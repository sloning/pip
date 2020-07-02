<?php

session_start();

date_default_timezone_set('Europe/Moscow');
$currentTime = date('H:i:s');
$startTime = microtime(true);

$x = $_POST['x'];
$y = $_POST['y'];
$r = $_POST['r'];
$popadanie = 'Промах';

if (in_array($x, array(-4, -3, -2, -1, 0, 1, 2, 3, 4)) || is_numeric($y) || $y >= -3 || $y <= 5 || in_array($r, array(1, 1.5, 2, 2.5, 3))) {
    if ($x >= 0 && $x <= $r && $y >= 0 && $y <= $r) {
        $popadanie = 'Попадание';
    } else if ($x >= 0 && $x <= $r && $y >= ($x - $r) / 2) {
        $popadanie = 'Попадание';
    } else if (sqrt($x * $x + $y * $y) <= $r && $y < 0 && $x < 0) {
        $popadanie = 'Попадание';
    }
}

$executeTime = (microtime(true) - $startTime) * 1000;
$executeTime = number_format((float)$executeTime, 3, '.', '');

$result = array($x, $y, $r, $popadanie, $currentTime, $executeTime);

$respone = "<tr><td>" . $x . "</td><td>" . $y . "</td><td>" . $r . "</td><td>" . $popadanie . "</td><td>" . $currentTime . "</td><td>" . $executeTime;

echo $respone;

?>