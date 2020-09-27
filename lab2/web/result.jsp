<%@ page contentType="text/html;charset=UTF-8" language="java" session="true" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>Результат вычислений</title>
    <meta charset="UTF-8">
    <link href="css/main.css" rel="stylesheet">
    <link href="css/result.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital@0;1&display=swap" rel="stylesheet">
    <link rel="shortcut icon" href="favicon.png">
</head>
<body>
<header>
    <div id="lab">
        <span id="variant">Вариант: 8981</span>
    </div>
    <div id="info">
        <span id="me">Кузнецов Владислав, P3213</span>
    </div>
</header>
<main>
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
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>${sessionScope.newPoint.x}</td>
                <td>${sessionScope.newPoint.y}</td>
                <td>${sessionScope.newPoint.r}</td>
                <td>${sessionScope.newPoint.popadanie}</td>
            </tr>
            </tbody>
        </table>
    </div>
    <div id="control">
        <button id="go-home" type="button" onclick="window.location.replace('index.jsp')">Вернуться</button>
    </div>
</main>
</body>
</html>
