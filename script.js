document.addEventListener("DOMContentLoaded", function () {
    function updateclock() {
        let currentDate = new Date();
        let hours = currentDate.getHours();
        let minutes = currentDate.getMinutes();
        let seconds = currentDate.getSeconds();
        console.log(hours);
        document.getElementById("hour").textContent = hours;
        document.getElementById("minute").textContent = minutes;
        document.getElementById("second").textContent = seconds;
    }
    setInterval(updateclock, 1000);
    updateclock();

});
