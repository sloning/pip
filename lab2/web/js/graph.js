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
                $("#input-y-text").val(calculatedY.toFixed(1));
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
    svg.insertAdjacentHTML("beforeEnd", `<circle class="clickDots" r="5" cx="${x}" cy="${y}"></circle>`);
}

function checkPoint(x, y) {
    const error = $('#error');
    if (x >= -3 && x <= 5 && y >= -3 && y <= 3) {
        error.html("");
        error.css("margin-bottom", "58px");
        return true;
    } else {
        if (y < -3 || y > 3) {
            error.html("Значение Y должно быть в диапазоне [-3;3]");
            error.css("margin-bottom", "0px");
            return false;
        }
        error.html("Значение X должно быть в диапазоне [-3;5]");
        error.css("margin-bottom", "0px");
        return false;
    }
}