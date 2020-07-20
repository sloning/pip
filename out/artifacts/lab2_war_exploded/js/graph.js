"use strict";

// let calculatedX = 2 * (x * 50 / r) + 150;
// let calculatedY = -(((y * 50 * 2) / r) - 150);

document.addEventListener("DOMContentLoaded", () => {
    let svg = document.querySelector("svg");
    svg.addEventListener("click", (event) => {
        if (checkR()) {
            let position = getMousePosition(svg, event);
            let x = position.x;
            let y = position.y;
            let r = getR();

            setDot(x, y);

            let calculatedX = ((x - 150) / 100) * r;
            let calculatedY = -((y - 150) / 100) * r;

            $("#input-y-text").val(calculatedY.toFixed(0));
            send(calculatedX.toFixed(1), calculatedY.toFixed(1), r);
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

function setDot(x, y) {
    let dotTarget = $("#target-dot");
    dotTarget.attr("r", 5);
    dotTarget.attr("cy", y);
    dotTarget.attr("cx", x);
}