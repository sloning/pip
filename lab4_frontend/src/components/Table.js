import React from "react";
import Container from 'react-bootstrap/cjs/Container';
import Row from 'react-bootstrap/cjs/Row';
import Col from 'react-bootstrap/cjs/Col';
import {connect} from "react-redux";
import {addPoint, clearPoints, setError} from "../actions/pointsActions";
import {URL} from "../utils/config";

export class Table extends React.Component {
    constructor(props) {
        super(props);

        this.restorePoints = this.restorePoints.bind(this);
        this.getPoints = this.getPoints.bind(this);
    }

    componentDidMount() {
        this.getPoints();
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <table id="resultTable" className={"table table-striped"}>
                            <thead>
                            <tr>
                                <th>
                                    X
                                </th>
                                <th>
                                    Y
                                </th>
                                <th>
                                    R
                                </th>
                                <th>
                                    Результат
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                            </tr>
                            </tbody>
                        </table>
                    </Col>
                </Row>
            </Container>
        )
    }

    getPoints() {
        fetch(`${URL}/api/points/getpoints`, {
            method: "POST",
            credentials: "include"
        }).then(response => response.json())
            .then(response => {
                this.props.clearPoints();
                for (let i = 0; i < response.points.length; i++) {
                    this.props.addPoint([response.points[i].x, response.points[i].y, response.points[i].r]);
                }
            })
            .then(() => this.restorePoints())
            .catch(e => console.log(e));
    }

    restorePoints() {
        let response = this.props.points;

        for (let i = 0; i < response.length; i++) {
            this.addRow("resultTable", response[i]);
        }
        this.forceUpdate();
        this.props.setError("");
    }

    addRow(tableID, response) {
        let tableRef = document.getElementById(tableID);
        let newRow = tableRef.insertRow(1);

        let xCell = newRow.insertCell(0);
        let yCell = newRow.insertCell(1);
        let rCell = newRow.insertCell(2);
        let resultCell = newRow.insertCell(3);

        let xText = document.createTextNode(response[0].toFixed(1));
        let yText = document.createTextNode(response[1].toFixed(1));
        let rText = document.createTextNode(response[2].toFixed(1));
        let resultText = document.createTextNode(response.result ? "Попадание" : "Промах");

        xCell.appendChild(xText);
        yCell.appendChild(yText);
        rCell.appendChild(rText);
        resultCell.appendChild(resultText);
    }
}

function mapStateToProps(state) {
    return {
        points: state.pointsReducer.points,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setXYR: value => dispatch(addPoint(value)),
        setError: msg => dispatch(setError(msg)),
        addPoint: point => dispatch(addPoint(point)),
        clearPoints: () => dispatch(clearPoints())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);