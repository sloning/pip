"use strict";

document.addEventListener("DOMContentLoaded", () => {
    let svg = document.querySelector("svg");
    svg.addEventListener("click", (event) => {
        if (checkR()) {
            let position = getMousePosition(svg, event);
            let x = position.x;
            let y = position.y;
            let r = getR();

            let calculatedX = ((x - 150) / 100) * r;
            let calculatedY = -((y - 150) / 100) * r;

            if (checkPoint(calculatedX, calculatedY)) {
                setDot(x, y, svg);

                $("#input-y-text").val(calculatedY.toFixed(0));
                send(calculatedX.toFixed(1), calculatedY.toFixed(1), r);
            }
        }
    });
});

function getMousePosition(svg, event) {
    let rect = svg.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}

function setDot(x, y, svg) {
    svg.insertAdjacentHTML("beforeend", `<circle class="clickDots" r="5" cx="${x}" cy="${y}"></circle>`);
}

function checkPoint(x, y) {
    if (x >= -4 && x <= 4 && y >= -3 && y <= 5) {
        document.getElementById('error').innerHTML = "<br><br>";
        return true;
    } else {
        document.getElementById('error').innerHTML = "-4<=x<=4 | -3<=y<=5 <br>";
        return false;
    }
}