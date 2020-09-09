<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="ru">
<head>
    <title>ПИП</title>
    <meta charset="UTF-8">
    <link href="css/main.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital@0;1&display=swap" rel="stylesheet">
    <link rel="shortcut icon" href="favicon.png">
</head>

<body>
<script src="js/jQuery-3.5.1.js"></script>
<script src="js/main.js"></script>
<script src="js/graph.js"></script>

<header>
    <div id="lab">
        <span id="variant">Вариант: 8981</span>
    </div>
    <div id="info">
        <span id="me">Кузнецов Владислав, P3213</span>
    </div>
</header>

<main>
    <div id="main-section">
        <div id="main-svg-picture">
            <svg height="300" width="300" xmlns="http://www.w3.org/2000/svg">
                <!-- Оси со стрелками -->
                <line class="axis" stroke="black" x1="0" x2="300" y1="150" y2="150"></line>
                <line class="axis" stroke="black" x1="150" x2="150" y1="0" y2="300"></line>
                <polygon fill="black" points="150,0 144,15 156,15" stroke="black"></polygon>
                <polygon fill="black" points="300,150 285,156 285,144" stroke="black"></polygon>
                <text class="coor-line" x="280" y="140">X</text>
                <text class="coor-line" x="160" y="20">Y</text>

                <!-- Засечки -->
                <line class="coor-line" stroke="black" x1="200" x2="200" y1="155" y2="145"></line>
                <line class="coor-line" stroke="black" x1="250" x2="250" y1="155" y2="145"></line>

                <line class="coor-line" stroke="black" x1="50" x2="50" y1="155" y2="145"></line>
                <line class="coor-line" stroke="black" x1="100" x2="100" y1="155" y2="145"></line>

                <line class="coor-line" stroke="black" x1="145" x2="155" y1="100" y2="100"></line>
                <line class="coor-line" stroke="black" x1="145" x2="155" y1="50" y2="50"></line>

                <line class="coor-line" stroke="black" x1="145" x2="155" y1="200" y2="200"></line>
                <line class="coor-line" stroke="black" x1="145" x2="155" y1="250" y2="250"></line>

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
                <polygon class="svg-figure square" fill="blue" fill-opacity="0.3" points="150,100 150,150 250,150 250,100"
                         stroke="blue"></polygon>

                <!-- second figure circle -->
                <path class="svg-figure circle" d="m 50 150 h 100 v -100 A 100 100 0 0 0 50 150 z" fill="green"
                      fill-opacity="0.3" stroke="green"></path>

                <!-- third figure -->
                <polygon class="svg-figure triangle" fill="red" fill-opacity="0.3" points="250,150 150,250 150,150"
                         stroke="red"></polygon>

                <circle r="0" cx="150" cy="150" id="target-dot"></circle>
            </svg>
        </div>
        <div id="user-input">
            <form action="" method="POST">
                <div id="input-x">
                    <div class="input-titles">
                        <span>Выберите X координату</span>
                    </div>
                    <input name="x" class="xRadio" id="xRadio1" onchange="checkX()" type="radio">-3 <br>
                    <input name="x" class="xRadio" id="xRadio2" onchange="checkX()" type="radio">-2 <br>
                    <input name="x" class="xRadio" id="xRadio3" onchange="checkX()" type="radio">-1 <br>
                    <input name="x" class="xRadio" id="xRadio4" onchange="checkX()" type="radio"> 0 <br>
                    <input name="x" class="xRadio" id="xRadio5" onchange="checkX()" type="radio"> 1 <br>
                    <input name="x" class="xRadio" id="xRadio6" onchange="checkX()" type="radio"> 2 <br>
                    <input name="x" class="xRadio" id="xRadio7" onchange="checkX()" type="radio"> 3 <br>
                    <input name="x" class="xRadio" id="xRadio8" onchange="checkX()" type="radio"> 4 <br>
                    <input name="x" class="xRadio" id="xRadio9" onchange="checkX()" type="radio"> 5 <br>
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
                    <div id="rButtons">
                        <button class="rButton" id="rButton1" onclick="selectR(1)" type="button">1</button>
                        <button class="rButton" id="rButton2" onclick="selectR(2)" type="button">2</button>
                        <button class="rButton" id="rButton3" onclick="selectR(3)" type="button">3</button>
                        <button class="rButton" id="rButton4" onclick="selectR(4)" type="button">4</button>
                        <button class="rButton" id="rButton5" onclick="selectR(5)" type="button">5</button>
                    </div>
                </div>
                <div id="buttons">
                    <button id="submit-button" onclick="validateAndSend()" type="button">Чекнуть</button>
                    <button id="reset-button" onclick="resetButtonDo()" type="button">Прибрать за собой</button>
                </div>
            </form>
            <div id="error"></div>
        </div>
    </div>
    <div id="response">
        <table id="response-table">
            <thead>
            <tr>
                <th>
                    X
                </th>
                <th>
                    Y
                </th>
                <th>
                    R
                </th>
                <th>
                    Результат
                </th>
                <th>
                    Время
                </th>
            </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
    </div>
</main>
</body>
</html>