import React from "react";
import {connect} from "react-redux";
import {addPoint, setError} from "../actions/pointsActions";
import Col from "react-bootstrap/cjs/Col";
import {URL} from "../utils/config";

export class Canvas1 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            size: 300,
        }

        this.handleClick = this.handleClick.bind(this);
        this.checkPoint = this.checkPoint.bind(this);
        this.isPopadanie = this.isPopadanie.bind(this);
        this.redrawDots = this.redrawDots.bind(this);
        this.getPoints = this.getPoints.bind(this);
        this.drawBase = this.drawBase.bind(this);
        this.resize = this.resize.bind(this);
    }

    componentDidMount() {
        this.drawBase()
        window.addEventListener('resize', this.resize, false);
        this.resize();
    }

    resize() {
        // let width = document.getElementById("container").offsetWidth;
        // let height = document.getElementById("container").offsetHeight;
        // let size = Math.min(width, height);

        let size;
        try {
            size = document.getElementById("container").offsetWidth;
        } catch (e) {
            console.log(e);
            return;
        }

        if (this.state.size !== size) {
            if (size >= 500) {
                if (this.state.size !== 375) {
                    this.setState({size: 375});
                }
            } else if (size <= 450) {
                this.setState({size: size});
            } else if (size > 450) {
                if (this.state.size !== 450) {
                    this.setState({size: 450});
                }
            }
        }
    }

    drawBase() {
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");

        let size = this.state.size;

        this.drawLines(size, ctx);
        this.drawTriangles(size, ctx);
        this.drawSerifs(size, ctx);
        this.drawFigures(size, ctx);
        this.showTargetDot(size, ctx);
    }

    drawLines(size, ctx) {
        ctx.lineWidth = 2 / 450 * size;

        ctx.beginPath();
        ctx.moveTo(0, size / 2);
        ctx.lineTo(size, size / 2);
        ctx.moveTo(size / 2, -size / 2);
        ctx.lineTo(size / 2, size);
        ctx.closePath();
        ctx.stroke();
    }

    drawTriangles(size, ctx) {
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.moveTo(size / 2, -1);
        ctx.lineTo(size / 2 - 10, 20);
        ctx.lineTo(size / 2 + 10, 20);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(size + 1, size / 2);
        ctx.lineTo(size - 20, size / 2 + 10);
        ctx.lineTo(size - 20, size / 2 - 10);
        ctx.fill();
        ctx.closePath();
    }

    drawSerifs(size, ctx) {
        ctx.beginPath();
        ctx.moveTo(size / 2 - 5, size / 6);
        ctx.lineTo(size / 2 + 5, size / 6);
        ctx.moveTo(size / 2 - 5, size * 2 / 6);
        ctx.lineTo(size / 2 + 5, size * 2 / 6);
        ctx.moveTo(size / 2 - 5, size * 4 / 6);
        ctx.lineTo(size / 2 + 5, size * 4 / 6);
        ctx.moveTo(size / 2 - 5, size * 5 / 6);
        ctx.lineTo(size / 2 + 5, size * 5 / 6);
        ctx.moveTo(size / 6, size / 2 - 5);
        ctx.lineTo(size / 6, size / 2 + 5);
        ctx.moveTo(size * 2 / 6, size / 2 - 5);
        ctx.lineTo(size * 2 / 6, size / 2 + 5);
        ctx.moveTo(size * 4 / 6, size / 2 - 5);
        ctx.lineTo(size * 4 / 6, size / 2 + 5);
        ctx.moveTo(size * 5 / 6, size / 2 - 5);
        ctx.lineTo(size * 5 / 6, size / 2 + 5);
        ctx.closePath();
        ctx.stroke();

        ctx.font = "20px black";
        ctx.fillText("R", size / 2 + 12, size / 6 + 5);
        ctx.fillText("R/2", size / 2 + 12, size * 2 / 6 + 5);
        ctx.fillText("-R/2", size / 2 + 12, size * 4 / 6 + 5);
        ctx.fillText("-R", size / 2 + 12, size * 5 / 6 + 5);
        ctx.fillText("R", size * 5 / 6 - 7, size / 2 - 12);
        ctx.fillText("R/2", size * 4 / 6 - 14, size / 2 - 12);
        ctx.fillText("-R/2", size * 2 / 6 - 20, size / 2 - 12);
        ctx.fillText("-R", size / 6 - 11, size / 2 - 12);
        ctx.fillText("X", size - 15, size / 2 - 12);
        ctx.fillText("Y", size / 2 + 12, 15);
    }

    drawFigures(size, ctx) {
        this.drawRectangleFigure(size, ctx);
        this.drawTriangleFigure(size, ctx);
        this.drawArcFigure(size, ctx);
    }

    drawTriangleFigure(size, ctx) {
        ctx.fillStyle = "rgba(255,222,3, 0.3)";
        ctx.beginPath();
        ctx.moveTo(size / 2, size / 2);
        ctx.lineTo(size * 5 / 6, size / 2);
        ctx.lineTo(size / 2, size * 5 / 6)
        ctx.fill();
        ctx.closePath();
    }

    drawArcFigure(size, ctx) {
        ctx.fillStyle = "rgba(255,2,102, 0.3)";
        ctx.beginPath();
        ctx.moveTo(size / 2, size / 2);
        ctx.arc(size / 2, size / 2, size / 3, Math.PI / 2, Math.PI, false);
        ctx.lineTo(size / 2, size * 5 / 6);
        ctx.lineTo(size / 6, size / 2);
        ctx.fill();
        ctx.closePath();
    }

    drawRectangleFigure(size, ctx) {
        ctx.fillStyle = "rgba(3,54,255, 0.3)";
        ctx.fillRect(size / 2, size / 2, size / 6, -size * 2 / 6);
    }

    componentDidUpdate() {
        if (this.getR() >= 1 && this.getR() <= 5) {
            this.redrawDots();
        } else {
            // this.removeDots();
            this.props.setError("Значение R должно быть в диапазоне [1;5]");
        }
        this.drawBase();
    }

    shouldComponentUpdate() {
        this.refs.canvas.getContext("2d").clearRect(0, 0, this.state.size, this.state.size);
        return true;
    }

    render() {
        return (
            <Col id="container" className={"d-flex justify-content-center"}>
                <canvas ref="canvas" onClick={this.handleClick} width={this.state.size} height={this.state.size}>
                    Это так не работает
                </canvas>
            </Col>
        )
    }

    handleClick(event) {
        if (this.getR() >= 1 && this.getR() <= 5) {
            let position = this.getMousePosition(event);
            let x = position.x;
            let y = position.y;
            let r = this.getR();

            let calculatedX = ((x - (this.state.size / 2)) / (this.state.size / 3)) * r;
            let calculatedY = -((y - (this.state.size / 2)) / (this.state.size / 3)) * r;

            if (this.checkPoint(calculatedX, calculatedY)) {
                // this.setDot(x, y, this.isPopadanie(calculatedX, calculatedY, r));

                this.sendPoint(calculatedX.toFixed(5), calculatedY.toFixed(5), r)
            }
        } else {
            this.showError("Значение R должно быть в диапазоне [1;5]");
            // this.removeDots();
        }
    }

    sendPoint(x, y, r) {
        this.props.setXYR([x, y, r]);

        let details = {
            "x": x,
            "y": y,
            "r": r
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

    getMousePosition(event) {
        let rect = this.refs.canvas.getBoundingClientRect();
        return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        };
    }

    setDot(x, y, popadanie) {
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");
        let size = this.state.size;

        let color;
        if (popadanie) {
            color = "rgb(3,255,16)";
        } else {
            color = "rgb(255,3,3)";
        }

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, size / 60, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.closePath();
    }

    removeDots() {
        document.querySelectorAll(".clickDots").forEach(function (a) {
            a.remove()
        });
    }

    getPoints() {
        let listOfPoints = [];
        const points = this.props.points;

        for (let i = 0; i < points.length; i++) {
            const x = points[i][0];
            const y = points[i][1];
            const r = this.getR();
            let dotInfo = {
                x: x / r * this.state.size / 3 + this.state.size / 2,
                y: this.state.size / 2 - y / r * this.state.size / 3,
                color: this.isPopadanie(x, y, r)
            };
            listOfPoints.push(dotInfo);
        }

        return listOfPoints;
    }

    drawAllDots(listOfPoints) {
        for (let i = 0; i < listOfPoints.length; i++) {
            let dotInfo = listOfPoints[i];
            // let dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            // dot.setAttribute("r", "5");
            // dot.setAttribute("cx", dotInfo.x.toString());
            // dot.setAttribute("cy", dotInfo.y.toString());
            // dot.setAttribute("fill", dotInfo.color ? "green" : "red");
            // dot.setAttribute("class", "clickDots");
            // document.querySelector("svg").appendChild(dot);

            this.setDot(dotInfo.x.toString(), dotInfo.y.toString(), dotInfo.color);
        }
    }

    redrawDots() {
        // this.removeDots();
        this.drawAllDots(this.getPoints());
    }

    checkPoint(x, y) {
        if (x >= -5 && x <= 5 && y >= -5 && y <= 5) {
            this.clearError();
            return true;
        } else {
            if (y < -5 || y > 5) {
                this.showError("Значение Y должно быть в диапазоне [-5;5]");
                return false;
            }
            this.showError("Значение X должно быть в диапазоне [-5;5]");
            return false;
        }
    }

    isPopadanie(x, y, r) {
        return !!(this.checkSquare(x, y, r) || this.checkTriangle(x, y, r) || this.checkCircle(x, y, r));
    }

    checkSquare(x, y, r) {
        return x >= 0 && x <= r / 2 && y >= 0 && y <= r;
    }

    checkTriangle(x, y, r) {
        return x >= 0 && x <= r && y >= (x - parseFloat(r)) && y <= 0;
    }

    checkCircle(x, y, r) {
        return Math.sqrt(x * x + y * y) <= r && y <= 0 && x <= 0;
    }

    getR() {
        return this.props.rValue;
    }

    showError(msg) {
        this.props.setError(msg);
    }

    clearError() {
        this.props.setError("");
    }

    showTargetDot(size, ctx) {
        if (this.props.isTarget) {

            let x = this.props.targetDot[0];
            let y = this.props.targetDot[1];
            let r = this.props.targetDot[2];

            let calculatedX = x / r * this.state.size / 3 + this.state.size / 2;
            let calculatedY = this.state.size / 2 - y / r * this.state.size / 3;

            // calculatedX = 2 * (x * 50 / r) + 150;
            // calculatedY = -(((y * 50 * 2) / r) - 150);
            // x: x / r * this.state.size / 3 + this.state.size / 2
            // y: this.state.size / 2 - y / r * this.state.size / 3

            ctx.fillStyle = "rgb(0, 0, 0)"
            ctx.beginPath();
            ctx.arc(calculatedX, calculatedY, size / 60, 0, 2 * Math.PI, false);
            ctx.fill();
            ctx.closePath();
        }
    }
}

function mapStateToProps(state) {
    return {
        rValue: state.pointsReducer.rValue,
        points: state.pointsReducer.points,
        isTarget: state.pointsReducer.isTarget,
        targetDot: state.pointsReducer.targetDot,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setError: msg => dispatch(setError(msg)),
        setXYR: point => dispatch(addPoint(point)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Canvas1)