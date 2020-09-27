"use strict";

var rValue = null;

function checkX() {
    const error = $('#error');
    const list = $('.xRadio');
    for (let i = 0; i < list.length; i++) {
        if (list[i].checked) {
            error.html("");
            error.css("margin-bottom", "58px");
            showDot();
            return true;
        }
    }
    error.html("Нужно выбрать координату X");
    error.css("margin-bottom", "0px");
    hideDot();
    return false;
}

function checkY() {
    const error = $('#error');
    let yStr = document.getElementById("input-y-text").value.replace(",", ".");
    if (yStr.length === 0) {
        error.html("");
        error.css("margin-bottom", "58px");
        return false;
    }
    if (!/^-?[0-9]\d*(\.\d+)?$/.test(yStr) || getY() < -3 || getY() > 3) {
        error.html("Значение Y должно быть в диапазоне [-3;3]");
        error.css("margin-bottom", "0px");
        hideDot();
        return false;
    }
    error.html("");
    error.css("margin-bottom", "58px");
    showDot();
    return true;
}

function checkR() {
    const error = $('#error');
    if (rValue !== null) {
        error.html("");
        error.css("margin-bottom", "58px");
        showDot();
        return true;
    }
    error.html("Нужно выбрать R");
    error.css("margin-bottom", "29px");
    hideDot();
    return false;
}

function selectR(value) {
    switch (value) {
        case 1: {
            rValue = 1;
            break;
        }
        case 2: {
            rValue = 2;
            break;
        }
        case 3: {
            rValue = 3;
            break;
        }
        case 4: {
            rValue = 4;
            break;
        }
        case 5: {
            rValue = 5;
            break;
        }
    }
    checkR();
}

function showDot() {
    let y = getY();
    let x = getX();
    let r = getR();

    if (!isNaN(y) && !isNaN(x) && !isNaN(r) && r !== null) {
        let calculatedX = 2 * (x * 50 / r) + 150;
        let calculatedY = -(((y * 50 * 2) / r) - 150);

        let dotTarget = $("#target-dot");
        dotTarget.attr("r", 5);
        dotTarget.attr("cy", calculatedY);
        dotTarget.attr("cx", calculatedX);
    }
}

function hideDot() {
    let dotTarget = $("#target-dot");
    dotTarget.attr("r", 0);
}

function validateAndSend() {
    if (checkX() && checkY() && checkR()) {
        send(getX(), getY(), getR());
    }
}

function send(x, y, r) {
    let request = "x=" + encodeURIComponent(x) + "&y=" + encodeURIComponent(y) + "&r=" +
        encodeURIComponent(r) + "&key=" + encodeURIComponent("point");

    fetch("app", {
        method: "POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"},
        body: request
    }).then(response => response.text()).then(function (response) {
        window.location.replace('result.jsp');
    }).catch(err => fetchErr(`Ошибка HTTP ${err.textContent}. Повторите попытку позже.`));
}

function fetchErr(str) {
    const error = $('#error');
    error.html(str);
    error.css("margin-bottom", "0px");
}

function getX() {
    const list = $('.xRadio');
    for (let i = 0; i < list.length; i++) {
        if (list[i].checked) {
            const checkbox = list[i];
            switch (checkbox.id) {
                case 'xRadio1':
                    return -3;
                case 'xRadio2':
                    return -2;
                case 'xRadio3':
                    return -1;
                case 'xRadio4':
                    return 0;
                case 'xRadio5':
                    return 1;
                case 'xRadio6':
                    return 2;
                case 'xRadio7':
                    return 3;
                case 'xRadio8':
                    return 4;
                case 'xRadio9':
                    return 5;
            }
        }
    }
}

function getY() {
    let yStr = document.getElementById("input-y-text").value.replace(",", ".");
    return parseFloat(yStr);
}

function getR() {
    return rValue;
}

function resetButtonDo() {
    const list = $('.xRadio');
    for (let i = 0; i < list.length; i++) {
        list[i].checked = false;
    }

    $('#input-y-text').val('');
    rValue = null;

    const error = $('#error');
    error.html("");
    error.css("margin-bottom", "58px");
    let tableBody = $('#response-table > tbody');
    tableBody.empty();
    hideDot();
    $(".clickDots").remove();

    let request = "&key=" + encodeURIComponent("reset");

    fetch("app", {
        method: "POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"},
        body: request
    }).catch(err => fetchErr(`Ошибка HTTP ${err.textContent}. Повторите попытку позже.`));
}