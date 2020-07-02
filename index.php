<!DOCTYPE html>
<html lang="ru">
<head>
    <title>ПИП</title>
    <meta charset="UTF-8">
    <link href="css/main.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital@0;1&display=swap" rel="stylesheet">
</head>

<body>
<script src="js/jQuery-3.5.1.js"></script>
<script src="js/main.js"></script>
<header>
    <div id="lab">
        <span id="variant">Вариант: 2410</span>
    </div>
    <div id="info">
        <span id="me">Кузнецов Владислав, P3113</span>
    </div>
</header>

<main>
    <div id="main-section">
        <div class="main-svg-picture">
            <svg class="svg-graph" height="300" width="300" xmlns="http://www.w3.org/2000/svg">
                <!-- Оси со стрелками -->
                <line class="axis" stroke="black" x1="0" x2="300" y1="150" y2="150"/>
                <line class="axis" stroke="black" x1="150" x2="150" y1="0" y2="300"/>
                <polygon fill="black" points="150,0 144,15 156,15" stroke="black"/>
                <polygon fill="black" points="300,150 285,156 285,144" stroke="black"/>
                <text class="coor-line" x="280" y="140">X</text>
                <text class="coor-line" x="160" y="20">Y</text>

                <!-- Засечки -->
                <line class="coor-line" stroke="black" x1="200" x2="200" y1="155" y2="145"/>
                <line class="coor-line" stroke="black" x1="250" x2="250" y1="155" y2="145"/>

                <line class="coor-line" stroke="black" x1="50" x2="50" y1="155" y2="145"/>
                <line class="coor-line" stroke="black" x1="100" x2="100" y1="155" y2="145"/>

                <line class="coor-line" stroke="black" x1="145" x2="155" y1="100" y2="100"/>
                <line class="coor-line" stroke="black" x1="145" x2="155" y1="50" y2="50"/>

                <line class="coor-line" stroke="black" x1="145" x2="155" y1="200" y2="200"/>
                <line class="coor-line" stroke="black" x1="145" x2="155" y1="250" y2="250"/>

                <!-- Подписи к засечкам -->
                <text class="coor-text" fill="black" x="195" y="140">R/2</text>
                <text class="coor-text" fill="black" x="248" y="140">R</text>

                <text class="coor-text" fill="black" x="40" y="140">-R</text>
                <text class="coor-text" fill="black" x="90" y="140">-R/2</text>

                <text class="coor-text" fill="black" x="160" y="105">R/2</text>
                <text class="coor-text" fill="black" x="160" y="55">R</text>

                <text class="coor-text" fill="black" x="160" y="205">-R/2</text>
                <text class="coor-text" fill="black" x="160" y="255">-R</text>

                <!-- first figure square-->
                <polygon class="svg-figure square" fill="blue" fill-opacity="0.3" points="150,50 150,150 250,150 250,50"
                         stroke="blue"/>

                <!-- second figure circle -->
                <path class="svg-figure circle" d="m 50 150 h 100 v 100 A 100 100 0 0 1 50 150 z" fill="green"
                      fill-opacity="0.3" stroke="green"/>

                <!-- third figure -->
                <polygon class="svg-figure triangle" fill="red" fill-opacity="0.3" points="250,150 150,200 150,150"
                         stroke="red"/>
            </svg>
        </div>
        <div id="user-input">
            <form action="" method="POST">
                <div id="input-x">
                    <div class="input-titles">
                        <span>Выберите X координату</span>
                    </div>
                    <input class="xCheckBox" id="xCheckBox1" onchange="checkX()" type="checkbox">-4 <br>
                    <input class="xCheckBox" id="xCheckBox2" onchange="checkX()" type="checkbox">-3 <br>
                    <input class="xCheckBox" id="xCheckBox3" onchange="checkX()" type="checkbox">-2 <br>
                    <input class="xCheckBox" id="xCheckBox4" onchange="checkX()" type="checkbox">-1 <br>
                    <input class="xCheckBox" id="xCheckBox5" onchange="checkX()" type="checkbox"> 0 <br>
                    <input class="xCheckBox" id="xCheckBox6" onchange="checkX()" type="checkbox"> 1 <br>
                    <input class="xCheckBox" id="xCheckBox7" onchange="checkX()" type="checkbox"> 2 <br>
                    <input class="xCheckBox" id="xCheckBox8" onchange="checkX()" type="checkbox"> 3 <br>
                    <input class="xCheckBox" id="xCheckBox9" onchange="checkX()" type="checkbox"> 4 <br>
                </div>
                <div id="input-y">
                    <div class="input-titles">
                        <span>Введите Y координату</span>
                    </div>
                    <input autocomplete="off" id="input-y-text" oninput="checkY()" required type="text"> <br>
                </div>
                <div id="input-r">
                    <div class="input-titles">
                        <span>Выберите R</span>
                    </div>
                    <input class="rCheckBox" id="rCheckBox1" onchange="checkR()" type="checkbox"> 1 <br>
                    <input class="rCheckBox" id="rCheckBox2" onchange="checkR()" type="checkbox"> 1.5 <br>
                    <input class="rCheckBox" id="rCheckBox3" onchange="checkR()" type="checkbox"> 2 <br>
                    <input class="rCheckBox" id="rCheckBox4" onchange="checkR()" type="checkbox"> 2.5 <br>
                    <input class="rCheckBox" id="rCheckBox5" onchange="checkR()" type="checkbox"> 3 <br>
                </div>
                <div id="buttons">
                    <button id="submit-button" onclick="validateAndSend()" type="button">Чекнуть</button>
                    <button id="reset-button" onclick="resetButtonDo()" type="button">Прибрать за собой</button>
                </div>
            </form>
            <div id="error">
                <br> <br>
            </div>
        </div>
    </div>
    <div id="response">

    </div>
    <!-- <div id="response-table">
        <table>
            <tr>
                <td>
                    X
                </td>
                <td>
                    Y
                </td>
                <td>
                    R
                </td>
                <td>
                    Результат
                </td>
                <td>
                    Время
                </td>
                <td>
                    Время выполнения
                </td>
            </tr>
        </table>
    </div> -->
    <!-- TODO раскомментить и починить -->
    <!-- <footer>
        <span>Made with &#10084; by </span>
        <a href="https://github.com/sloning"> me</a>
    </footer> -->
</main>
</body>
</html>