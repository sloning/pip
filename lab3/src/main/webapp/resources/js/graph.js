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
            $("#input-y-text").val(calculatedY.toFixed(1));
            hideDot();

            if (checkPoint(calculatedX, calculatedY)) {
                hideDot();
                setDot(x, y, svg);
                sendRequest([{name: "X-value", value: calculatedX.toFixed(1)},
                    {name: "Y-value", value: calculatedY.toFixed(1)},
                    {name: "R-value", value: r}]);
            }
        }
    });
});

function getMousePosition(svg, event) {
    let rect = svg.getBoundingClientRect();
    return {
        x: event.clientX - rect.left - 15,
        y: event.clientY - rect.top
    };
}

function setDot(x, y, svg) {
    svg.insertAdjacentHTML("beforeEnd", `<circle class="clickDots" r="5" cx="${x}" cy="${y}"></circle>`);
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