setInterval(function () {
    var time = new Date();

    document.getElementById("hours").innerHTML = (time.getHours() < 10) ? "0" + time.getHours() : time.getHours();
    document.getElementById("minutes").innerHTML = (time.getMinutes() < 10) ? "0" + time.getMinutes() : time.getMinutes();
    document.getElementById("seconds").innerHTML = (time.getSeconds() < 10) ? "0" + time.getSeconds() : time.getSeconds();

})