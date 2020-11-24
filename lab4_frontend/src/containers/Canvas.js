import React from "react";
import {connect} from "react-redux";
import {addPoint, setError} from "../actions/pointsActions";

export class Canvas extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.checkPoint = this.checkPoint.bind(this);
        this.isPopadanie = this.isPopadanie.bind(this);
        // this.parseTable = this.parseTable.bind(this);
        this.redrawDots = this.redrawDots.bind(this);
        this.getPoints = this.getPoints.bind(this);
    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) {
        if (this.getR() >= 1 && this.getR() <= 5) {
            this.redrawDots();
        } else {
            this.removeDots();
            this.props.setError("Значение R должно быть в диапазоне [1;5]");
        }
    }

    render() {
        return (
            <svg height="300" width="300" xmlns="http://www.w3.org/2000/svg" onClick={this.handleClick}>
                <line className="axis" stroke="black" x1="0" x2="300" y1="150" y2="150"/>
                <line className="axis" stroke="black" x1="150" x2="150" y1="0" y2="300"/>
                <polygon fill="black" points="150,0 144,15 156,15" stroke="black"/>
                <polygon fill="black" points="300,150 285,156 285,144" stroke="black"/>
                <text fill="black" className="coor-line" x="280" y="140">X</text>
                <text fill="black" className="coor-line" x="160" y="20">Y</text>

                <line className="coor-line" stroke="black" x1="200" x2="200" y1="155" y2="145"/>
                <line className="coor-line" stroke="black" x1="250" x2="250" y1="155" y2="145"/>

                <line className="coor-line" stroke="black" x1="50" x2="50" y1="155" y2="145"/>
                <line className="coor-line" stroke="black" x1="100" x2="100" y1="155" y2="145"/>

                <line className="coor-line" stroke="black" x1="145" x2="155" y1="100" y2="100"/>
                <line className="coor-line" stroke="black" x1="145" x2="155" y1="50" y2="50"/>

                <line className="coor-line" stroke="black" x1="145" x2="155" y1="200" y2="200"/>
                <line className="coor-line" stroke="black" x1="145" x2="155" y1="250" y2="250"/>

                <text className="coor-text" fill="black" x="195" y="140">R/2</text>
                <text className="coor-text" fill="black" x="248" y="140">R</text>

                <text className="coor-text" fill="black" x="40" y="140">-R</text>
                <text className="coor-text" fill="black" x="90" y="140">-R/2</text>

                <text className="coor-text" fill="black" x="160" y="105">R/2</text>
                <text className="coor-text" fill="black" x="160" y="55">R</text>

                <text className="coor-text" fill="black" x="160" y="205">-R/2</text>
                <text className="coor-text" fill="black" x="160" y="255">-R</text>

                <polygon className="svgFigure square" fill="blue" fillOpacity="0.3"
                         points="200,50 150,50 150,150 200,150"
                         stroke="blue"/>

                <path className="svgFigure circle" d="m 50 150 h 100 v 100 A 100 100 0 0 1 50 150 z" fill="green"
                      fillOpacity="0.3" stroke="green"/>

                <polygon className="svgFigure triangle" fill="red" fillOpacity="0.3"
                         points="150,250 250,150 150,150"
                         stroke="red"/>

                <circle r="0" cx="150" cy="150" id="targetDot"/>
            </svg>
        )
    }

    handleClick(event) {
        if (this.getR() !== 0) {
            let position = this.getMousePosition(event);
            let x = position.x;
            let y = position.y;
            let r = this.getR();

            let calculatedX = ((x - 150) / 100) * r;
            let calculatedY = -((y - 150) / 100) * r;

            if (this.checkPoint(calculatedX, calculatedY)) {
                this.setDot(calculatedX, calculatedY, this.isPopadanie(calculatedX, calculatedY, r));

                this.sendPoint(calculatedX.toFixed(1), calculatedY.toFixed(1), r)
            }
        } else {
            this.showError("Значение R должно быть в диапазоне [1;5]");
            this.removeDots();
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

        fetch("http://127.0.0.1:8981/lab4/api/points/newpoint", {
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

        let xText = document.createTextNode(response.x);
        let yText = document.createTextNode(response.y);
        let rText = document.createTextNode(response.r);
        let resultText = document.createTextNode(response.result ? "Попадание" : "Промах");

        xCell.appendChild(xText);
        yCell.appendChild(yText);
        rCell.appendChild(rText);
        resultCell.appendChild(resultText);
    }

    getMousePosition(event) {
        let rect = document.querySelector("svg").getBoundingClientRect();
        return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        };
    }

    setDot(x, y, popadanie) {
        let dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        dot.setAttribute("r", "5");
        dot.setAttribute("cx", `${x}`);
        dot.setAttribute("cy", `${y}`);
        dot.setAttribute("fill", popadanie ? "green" : "red");
        dot.setAttribute("class", "clickDots");
        document.querySelector("svg").appendChild(dot);
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
                x: x / r * 100 + 150,
                y: 150 - y / r * 100,
                color: this.isPopadanie(x, y, r)
            };
            listOfPoints.push(dotInfo);
        }

        return listOfPoints;
    }

    drawAllDots(listOfPoints) {
        for (let i = 0; i < listOfPoints.length; i++) {
            let dotInfo = listOfPoints[i];
            let dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            dot.setAttribute("r", "5");
            dot.setAttribute("cx", dotInfo.x.toString());
            dot.setAttribute("cy", dotInfo.y.toString());
            dot.setAttribute("fill", dotInfo.color ? "green" : "red");
            dot.setAttribute("class", "clickDots");
            document.querySelector("svg").appendChild(dot);
        }
    }

    redrawDots() {
        this.removeDots();
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
}

function mapStateToProps(state) {
    return {
        rValue: state.pointsReducer.rValue,
        points: state.pointsReducer.points
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setError: msg => dispatch(setError(msg)),
        setXYR: point => dispatch(addPoint(point)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Canvas)