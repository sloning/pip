"use strict";

var svg = document.querySelector("svg");

document.addEventListener("DOMContentLoaded", () => {
    svg.addEventListener("click", (event) => {
        if (checkR()) {
            let position = getMousePosition(event);
            let x = position.x;
            let y = position.y;
            let r = getR();

            let calculatedX = ((x - 150) / 100) * r;
            let calculatedY = -((y - 150) / 100) * r;
            $("#input-y-text").val(calculatedY.toFixed(1));
            hideDot();

            if (checkPoint(calculatedX, calculatedY)) {
                setDot(x, y, isPopadanie(calculatedX, calculatedY, r));
                sendRequest([{name: "X-value", value: calculatedX.toFixed(1)},
                    {name: "Y-value", value: calculatedY.toFixed(1)},
                    {name: "R-value", value: r}]);
            }
        }
    });
});

function getMousePosition(event) {
    let rect = svg.getBoundingClientRect();
    return {
        x: event.clientX - rect.left - 15,
        y: event.clientY - rect.top
    };
}

function setDot(x, y, popadanie) {
    let dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    dot.setAttribute("r", "5");
    dot.setAttribute("cx", `${x}`);
    dot.setAttribute("cy", `${y}`);
    dot.setAttribute("fill", popadanie ? "green" : "red");
    dot.setAttribute("class", "clickDots");
    svg.appendChild(dot);
}

function removeDots() {
    $(".clickDots").remove();
}

function parseTable() {
    let listOfPoints = [];
    let table = document.getElementById("resultTable");
    if (table.rows.item(1).cells.item(0).innerText === "") {
        return listOfPoints;
    }
    for (let i = 1; i < table.rows.length; i++) {
        let cells = table.rows.item(i).cells;
        let xFromTable = parseFloat(cells.item(0).innerText.trim());
        let yFromTable = parseFloat(cells.item(1).innerText.trim());
        let dotInfo = {
            x: xFromTable / getR() * 100 + 150,
            y: 150 - yFromTable / getR() * 100,
            color: isPopadanie(xFromTable, yFromTable, getR())
        };
        listOfPoints.push(dotInfo);
    }
    return listOfPoints;
}

function drawAllDots(listOfPoints) {
    for (let i = 0; i < listOfPoints.length; i++) {
        let dotInfo = listOfPoints[i];
        let dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        dot.setAttribute("r", "5");
        dot.setAttribute("cx", dotInfo.x.toString());
        dot.setAttribute("cy", dotInfo.y.toString());
        dot.setAttribute("fill", dotInfo.color ? "green" : "red");
        dot.setAttribute("class", "clickDots");
        svg.appendChild(dot);
    }
}

function redrawDots() {
    removeDots();
    drawAllDots(parseTable());
}

function checkPoint(x, y) {
    if (x >= -3 && x <= 5 && y >= -5 && y <= 3) {
        clearError();
        return true;
    } else {
        if (y < -5 || y > 3) {
            showError("Значение Y должно быть в диапазоне [-5;3]");
            return false;
        }
        showError("Значение X должно быть в диапазоне [-3;5]");
        return false;
    }
}

function isPopadanie(x, y, r) {
    return !!(checkSquare(x, y, r) || checkTriangle(x, y, r) || checkCircle(x, y, r));
}

function checkSquare(x, y, r) {
    return x <= 0 && x >= -r && y <= 0 && y >= -r;
}

function checkTriangle(x, y, r) {
    return x <= 0 && x >= -r && y <= (parseFloat(r) + x) / 2 && y >= 0;
}

function checkCircle(x, y, r) {
    return Math.sqrt(x * x + y * y) <= r / 2 && y <= 0 && x >= 0;
}