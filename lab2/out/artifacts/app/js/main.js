"use strict";

function checkX() {
    const list = document.getElementsByClassName("xCheckBox");
    let count = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i].checked) {
            count++;
        }
    }
    if (count === 0) {
        document.getElementById('error').innerHTML = "Нужно выбрать хотя бы 1 координату X <br>";
        return false;
    } else if (count > 1) {
        document.getElementById('error').innerHTML = "Нельзя выбирать несколько координат X! <br>";
        return false;
    }
    document.getElementById('error').innerHTML = "<br><br>";
    return true;
}

function checkY() {
    let yStr = document.getElementById("input-y-text").value.replace(",", ".");
    if (yStr.length === 0) {
        document.getElementById('error').innerHTML = "<br><br>";
        return false;
    }
    if (!/^-?[0-9]\d*(\.\d+)?$/.test(yStr) || getY() < -3 || getY() > 5) {
        document.getElementById('error').innerHTML = "Значение Y должно быть в диапазоне [-3;5]";
        hideDot();
        return false;
    }
    document.getElementById('error').innerHTML = "<br><br>";
    showDot();
    return true;
}

function checkR() {
    const list = document.getElementsByClassName("rCheckBox");
    let count = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i].checked) {
            count++;
        }
    }
    if (count === 0) {
        document.getElementById('error').innerHTML = "Нужно выбрать хотя бы 1 R <br><br>";
        return false;
    } else if (count > 1) {
        document.getElementById('error').innerHTML = "Нельзя выбирать несколько R! <br><br>";
        return false;
    }
    document.getElementById('error').innerHTML = "<br><br>";
    return true;
}

function intermediateCheckX() {
    const list = document.getElementsByClassName("xCheckBox");
    let count = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i].checked) {
            count++;
        }
    }
    if (count > 1) {
        document.getElementById('error').innerHTML = "Нельзя выбирать несколько координат X! <br>";
        hideDot();
        return false;
    }
    document.getElementById('error').innerHTML = "<br><br>";
    showDot();
    return true;
}

function intermediateCheckR() {
    const list = document.getElementsByClassName("rCheckBox");
    let count = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i].checked) {
            count++;
        }
    }
    if (count > 1) {
        document.getElementById('error').innerHTML = "Нельзя выбирать несколько R! <br><br>";
        hideDot();
        return false;
    } else if (count < 1) {

    }
    document.getElementById('error').innerHTML = "<br><br>";
    showDot();
    return true;
}

function showDot() {
    let y = getY();
    let x = getX();
    let r = getR();

    if (!isNaN(y) && !isNaN(x) && !isNaN(r)) {
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
    let request = "x=" + encodeURIComponent(x) + "&y=" + encodeURIComponent(y) + "&r=" + encodeURIComponent(r) + "&key=" + encodeURIComponent("point");

    console.log(x + "                " + y);

    fetch("app", {
        method: "POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"},
        body: request
    }).then(response => response.text()).then(function (response) {
        let table = $('#response-table > tbody');
        table.empty();
        table.append(response);
    }).catch(err => alert("Ошибка HTTP ${err.textContent}. Повторите попытку позже."));
}

function getX() {
    const list = document.getElementsByClassName("xCheckBox");
    for (let i = 0; i < list.length; i++) {
        if (list[i].checked) {
            const checkbox = list[i];
            switch (checkbox.id) {
                case 'xCheckBox1':
                    return -4;
                case 'xCheckBox2':
                    return -3;
                case 'xCheckBox3':
                    return -2;
                case 'xCheckBox4':
                    return -1;
                case 'xCheckBox5':
                    return 0;
                case 'xCheckBox6':
                    return 1;
                case 'xCheckBox7':
                    return 2;
                case 'xCheckBox8':
                    return 3;
                case 'xCheckBox9':
                    return 4;
            }
        }
    }
}

function getY() {
    let yStr = document.getElementById("input-y-text").value.replace(",", ".");
    return parseFloat(yStr);
}

function getR() {
    const list = document.getElementsByClassName("rCheckBox");
    for (let i = 0; i < list.length; i++) {
        if (list[i].checked) {
            const checkbox = list[i];
            switch (checkbox.id) {
                case 'rCheckBox1':
                    return 1;
                case 'rCheckBox2':
                    return 1.5;
                case 'rCheckBox3':
                    return 2;
                case 'rCheckBox4':
                    return 2.5;
                case 'rCheckBox5':
                    return 3;
            }
        }
    }
}

function resetButtonDo() {
    const list = document.getElementsByTagName("input");
    for (let i = 0; i < list.length; i++) {
        if (list[i].type === 'checkbox') {
            list[i].checked = false;
        } else {
            list[i].value = "";
        }
    }
    document.getElementById('error').innerHTML = "<br><br>";
    let tableBody = $('#response-table > tbody');
    tableBody.empty();
    hideDot();
    $(".clickDots").remove();

    let request = "&key=" + encodeURIComponent("reset");

    fetch("app", {
        method: "POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"},
        body: request
    }).catch(err => alert("Ошибка HTTP ${err.textContent}. Повторите попытку позже."));

}   //TODO почистить хттп сессию на бэке