import React from "react";
import {Slider} from "primereact/slider";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import Container from "react-bootstrap/cjs/Container";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";
import {connect} from "react-redux";
import Error from "../components/Error";
import {addPoint, clearPoints, setError, setIsTarget, setR, setTarget} from "../actions/pointsActions";
import {URL} from "../utils/config";

export class Inputs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            slider: 0,
        };

        this.showError = this.showError.bind(this);
        this.clearError = this.clearError.bind(this);
        this.sendValues = this.sendValues.bind(this);
        this.reset = this.reset.bind(this);
        this.setR = this.setR.bind(this);
        this.showDot = this.showDot.bind(this);
    }

    componentDidUpdate() {
        this.showDot();
    }

    render() {
        return (
            <Container>
                <Row style={{marginBottom: "5%"}}>
                    <Col>
                        <h5>X</h5>
                        <InputText style={{width: "100%"}} maxLength={"5"} id={"xInput"} keyfilter="num"
                                   onChange={this.showDot}/>
                    </Col>
                </Row>
                <Row style={{marginBottom: "5%"}}>
                    <Col>
                        <span>{"Y: " + this.state.slider}</span>
                        <Slider value={this.state.slider} onChange={(e) => this.setState({slider: e.value})}
                                min={-5} max={5}/>
                    </Col>
                </Row>
                <Row style={{marginBottom: "5%"}}>
                    <Col>
                        <h5>R</h5>
                        <InputText style={{width: "100%"}} maxLength={"5"} id={"rInput"} keyfilter="num"
                                   onChange={this.setR}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button label={"Чекнуть"} type={"submit"} onClick={this.sendValues}/>
                    </Col>
                    <Col>
                        <Button label={"Очистить"} style={{float: "right"}} type={"reset"}
                                onClick={this.reset}/>
                    </Col>
                </Row>
                <Row>
                    <Col style={{paddingBottom: "50px"}}>
                        <Error/>
                    </Col>
                </Row>
            </Container>
        )
    }

    sendValues() {
        if (this.validateValues()) {
            let yValue = this.state.slider;
            let xValue = document.getElementById("xInput").value;
            let rValue = document.getElementById("rInput").value;

            this.props.setXYR([xValue, yValue, rValue]);

            let details = {
                "x": xValue,
                "y": yValue,
                "r": rValue
            };
            const formBody = Object.keys(details).map(key => encodeURIComponent(key) + "=" + encodeURIComponent(details[key])).join("&");

            fetch(`${URL}/api/points/newpoint`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                },
                body: formBody
            }).then(response => this.processResponse(response))
                .then(response => this.addRow("resultTable", response))
                .catch(() => this.showError("Ошибка HTTP"));
        }
    }

    processResponse(response) {
        if (response.ok) {
            this.clearError();
            return response.json();
        } else {
            this.showError("Ошибка HTTP");
        }
    }

    addRow(tableID, response) {
        let tableRef = document.getElementById(tableID);
        let newRow = tableRef.insertRow(1);

        let xCell = newRow.insertCell(0);
        let yCell = newRow.insertCell(1);
        let rCell = newRow.insertCell(2);
        let resultCell = newRow.insertCell(3);

        let xText = document.createTextNode(response.x.toFixed(1));
        let yText = document.createTextNode(response.y.toFixed(1));
        let rText = document.createTextNode(response.r.toFixed(1));
        let resultText = document.createTextNode(response.result ? "Попадание" : "Промах");

        xCell.appendChild(xText);
        yCell.appendChild(yText);
        rCell.appendChild(rText);
        resultCell.appendChild(resultText);
    }

    validateValues() {
        return !!(this.validateX() && this.validateR());
    }

    validateX() {
        let xValue = document.getElementById("xInput").value;
        if (xValue.length === 0) {
            this.showError("Нужно ввести координату X");
            return false;
        }
        if (!/^-?[0-9]\d*(\.\d+)?$/.test(xValue) || xValue < -5 || xValue > 5) {
            this.showError("Значение X должно быть в диапазоне [-5;5]");
            return false;
        }
        this.clearError();
        return true;
    }

    validateR() {
        let rValue = document.getElementById("rInput").value;
        if (rValue.length === 0) {
            this.showError("Нужно ввести R");
            return false;
        }
        if (!/^-?[0-9]\d*(\.\d+)?$/.test(rValue) || rValue < 1 || rValue > 5) {
            this.showError("Значение R должно быть в диапазоне [1;5]");
            return false;
        }
        this.clearError();
        return true;
    }

    showError(msg) {
        this.props.setError(msg);
    }

    clearError() {
        this.props.setError("");
    }

    reset() {
        document.getElementById("xInput").value = "";
        this.setState({slider: 0});
        document.getElementById("rInput").value = "";
        document.querySelector("tbody").innerHTML = "<tr><tr/>";
        this.clearError();

        fetch(`${URL}/api/points/droppoints`, {
            method: "POST",
            credentials: "include"
        }).then(response => console.log(response))
            .catch(() => console.log("Ошибка очистки"));

        document.querySelectorAll(".clickDots").forEach(function (a) {
            a.remove()
        });

        this.props.removeXYR();
    }

    setR() {
        let rValue = document.getElementById("rInput").value;
        this.props.setR(rValue);
        this.clearError();
        this.showDot();
    }

    showDot() {
        let y = this.state.slider;
        let x = document.getElementById("xInput").value;
        let r = document.getElementById("rInput").value;

        if (x >= -5 && x <= 5 && r >= 1 && r <= 5 && x !== "" && r !== "") {
            // calculatedX = 2 * (x * 50 / r) + 150;
            // calculatedY = -(((y * 50 * 2) / r) - 150);

            // let dotTarget = document.getElementById("targetDot");
            // dotTarget.setAttribute("r", 5);
            // dotTarget.setAttribute("cy", calculatedY);
            // dotTarget.setAttribute("cx", calculatedX);
            this.props.setTarget([x, y, r]);
            this.props.setIsTarget(true);
        } else {
            this.hideDot();
        }
    }

    hideDot() {
        // document.getElementById("targetDot").setAttribute("r", 0);
        this.props.setIsTarget(false);
    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        setError: msg => dispatch(setError(msg)),
        setR: rValue => dispatch(setR(rValue)),
        setXYR: point => dispatch(addPoint(point)),
        removeXYR: () => dispatch(clearPoints()),
        setTarget: dot => dispatch(setTarget(dot)),
        setIsTarget: is => dispatch(setIsTarget(is)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Inputs)