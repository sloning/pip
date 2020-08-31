function checkX() {
    const list = $('.xCheckBox');
    const error = $('#error');
    let count = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i].checked) {
            count++;
        }
    }
    if (count === 0) {
        error.html("Нужно выбрать хотя бы 1 координату X");
        error.css("margin-bottom", "0px");
        return false;
    } else if (count > 1) {
        error.html("Нельзя выбирать несколько координат X!");
        error.css("margin-bottom", "0px");
        return false;
    }
    error.html("");
    error.css("margin-bottom", "58px");
    return true;
}

function checkY() {
    const error = $('#error');
    let yStr = document.getElementById("input-y-text").value.replace(",", ".");
    if (yStr.length === 0) {
        error.html("");
        error.css("margin-bottom", "58px");
        return false;
    }
    if (!/^-?[0-9]\d*(\.\d+)?$/.test(yStr) || getY() < -3 || getY() > 5) {
        error.html("Значение Y должно быть в диапазоне [-3;5]");
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
    const list = $('.rCheckBox');
    let count = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i].checked) {
            count++;
        }
    }
    if (count === 0) {
        error.html("Нужно выбрать хотя бы 1 R");
        error.css("margin-bottom", "29px");
        return false;
    } else if (count > 1) {
        error.html("Нельзя выбирать несколько R!");
        error.css("margin-bottom", "29px");
        return false;
    }
    error.html("");
    error.css("margin-bottom", "58px");
    return true;
}

function intermediateCheckX() {
    const list = $('.xCheckBox');
    const error = $('#error');
    let count = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i].checked) {
            count++;
        }
    }
    if (count > 1) {
        error.html("Нельзя выбирать несколько координат X!");
        error.css("margin-bottom", "0px");
        hideDot();
        return false;
    }
    error.html("");
    error.css("margin-bottom", "58px");
    showDot();
    return true;
}

function intermediateCheckR() {
    const error = $('#error');
    const list = $('.rCheckBox');
    let count = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i].checked) {
            count++;
        }
    }
    if (count > 1) {
        error.html("Нельзя выбирать несколько R!");
        error.css("margin-bottom", "29px");
        hideDot();
        return false;
    }
    error.html("");
    error.css("margin-bottom", "58px");
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
        let x = getX();
        let y = getY();
        let r = getR();

        $.ajax({
            type: "POST",
            url: "php/main.php",
            data: {x: x, y: y, r: r},
            success: function (response) {
                let table = $('#response-table > tbody');
                table.empty();
                table.append(response);
            }
        });
    }
}

function getX() {
    const list = $('.xCheckBox');
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
    const list = $('.rCheckBox');
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
    const list = $('input');
    for (let i = 0; i < list.length; i++) {
        if (list[i].type === 'checkbox') {
            list[i].checked = false;
        } else {
            list[i].value = "";
        }
    }
    const error = $('#error');
    error.html("");
    error.css("margin-bottom", "58px");
    let tableBody = $('#response-table > tbody');
    tableBody.empty();
    hideDot();
    fetch('php/clear.php', {
        method: 'POST',
    });
}