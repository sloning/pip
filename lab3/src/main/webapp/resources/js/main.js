"use strict";

var xValue = null;
var rValue = null;

function checkX() {
    if (getX() === null) {
        showError("Нужно выбрать координату X");
        return false;
    }
    clearError();
    return true;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("j_idt10:input-y-text")
        .addEventListener("input", (event) => checkY());
    document.getElementById("j_idt10:input-y-text")
        .addEventListener("input", (event) => showDot());
});

function checkY() {
    let yStr = document.getElementById("j_idt10:input-y-text").value.replace(",", ".");
    if (yStr.length === 0) {
        showError("Нужно ввести координату Y");
        return false;
    }
    if (!/^-?[0-9]\d*(\.\d+)?$/.test(yStr) || getY() < -5 || getY() > 3) {
        showError("Значение Y должно быть в диапазоне [-5;3]");
        return false;
    }
    clearError();
    return true;
}

function checkR() {
    if (rValue == null) {
        showError("Нужно выбрать R");
        return false;
    }
    clearError();
    return true;
}

document.getElementById("checkButton").onclick = function () {
    if (checkX() && checkY() && checkR()) {
        sendRequest([{name: "X-value", value: getX()}, {name: "Y-value", value: getY()}, {
            name: "R-value",
            value: getR()
        }]);
        let dotInfo = showDot();
        setDot(dotInfo.x, dotInfo.y, dotInfo.color);
    }
};

function setX(value) {
    switch (value) {
        case -3: {
            xValue = -3;
            break;
        }
        case -2: {
            xValue = -2;
            break;
        }
        case -1: {
            xValue = -1;
            break;
        }
        case 0: {
            xValue = 0;
            break;
        }
        case 1: {
            xValue = 1;
            break;
        }
        case 2: {
            xValue = 2;
            break;
        }
        case 3: {
            xValue = 3;
            break;
        }
        case 4: {
            xValue = 4;
            break;
        }
        case 5: {
            xValue = 5;
            break;
        }
    }
    showDot();
}

function getX() {
    return xValue;
}

function getY() {
    let yStr = document.getElementById("j_idt10:input-y-text").value.replace(",", ".");
    return parseFloat(yStr);
}

function setR(value) {
    rValue = value;
    showDot();
    redrawDots();
}

function getR() {
    return rValue;
}

function showError(errorText = "Произошла какая-то ошибка") {
    const error = $('#error');
    error.html(errorText);
    error.css("padding-bottom", "20px");
}

function clearError() {
    const error = $('#error');
    error.html('');
    error.css("padding-bottom", "50px");
}

function showDot() {
    let y = getY();
    let x = getX();
    let r = getR();

    let calculatedX;
    let calculatedY;
    if (!isNaN(y) && r !== null && x !== null) {
        calculatedX = 2 * (x * 50 / r) + 150;
        calculatedY = -(((y * 50 * 2) / r) - 150);

        let dotTarget = $("#target-dot");
        dotTarget.attr("r", 5);
        dotTarget.attr("cy", calculatedY);
        dotTarget.attr("cx", calculatedX);
    }
    return {
        x: calculatedX,
        y: calculatedY,
        color: isPopadanie(x, y, r)
    };
}

function hideDot() {
    $("#target-dot").attr("r", 0);
}

function resetButtonDo() {
    clearError();
    document.getElementById("j_idt10:input-y-text").value = "";
    xValue = null;
    rValue = null;
    try {
        document.querySelector('input[name="j_idt10:j_idt31"]:checked').checked = false;
    } catch (error) {
    }
    hideDot();
    $(".clickDots").remove();
    sendReset();
}