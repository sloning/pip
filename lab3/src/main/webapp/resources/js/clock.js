"use strict";

document.addEventListener("DOMContentLoaded", () => {
    showTime();
    setInterval(function () {
        showTime();
    }, 11000);
});

function showTime() {
    let date = new Date();
    let day = (date.getDate() < 10 ? "0" : "") + date.getDate();
    let month = (date.getMonth() < 9 ? "0" : "") + (date.getMonth() + 1);
    let year = (date.getFullYear());
    let hour = (date.getHours() < 10 ? "0" : "") + date.getHours();
    let minute = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
    let seconds = (date.getSeconds() < 10 ? "0" : "") + date.getSeconds();
    $('#clock').html(day + "." + month + "." + year + " " + hour + ":" + minute + ":" + seconds);
}