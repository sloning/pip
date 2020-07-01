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
    if (!/^\d+$/.test(yStr) || getY() < -3 || getY() > 5) {
        document.getElementById('error').innerHTML = "Значение Y должно быть в диапазоне [-3;5]";
        return false;
    }
    document.getElementById('error').innerHTML = "<br><br>";
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
        document.getElementById('error').innerHTML = "Нужно выбрать хотя бы 1 R <br>";
        return false;
    } else if (count > 1) {
        document.getElementById('error').innerHTML = "Нельзя выбирать несколько R! <br>";
        return false;
    }
    document.getElementById('error').innerHTML = "<br><br>";
    return true;
}

function finalValidation() {
}

function submit() {
    if (checkX() && checkY() && checkR()) {
        let x = getX();
        let y = getY();
        let r = getR();

        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
            const serverResponse = document.getElementById('response');
            serverResponse.innerHTML = this.responseText;
        };

        xhr.open("POST", "php/main.php");
        xhr.setRequestHeader("Content-type", "application/x-www-urlencoded");
        xhr.send("msg=works");
    }
}

function getX() {
    var list = document.getElementsByClassName("xCheckBox");
    for (var i = 0; i < list.length; i++) {
        if (list[i].checked) {
            var checkbox = list[i];
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
    var list = document.getElementsByClassName("rCheckBox");
    for (let i = 0; i < list.length; i++) {
        if (list[i].checked) {
            var checkbox = list[i];
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
    //TODO clean table
    var list = document.getElementsByTagName("input");
    for (var i = 0; i < list.length; i++) {
        if (list[i].type === 'checkbox') {
            list[i].checked = false;
        } else {
            list[i].value = "";
        }
    }
    document.getElementById('error').innerHTML = "<br><br>";
}