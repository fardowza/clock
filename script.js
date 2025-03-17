document.addEventListener("DOMContentLoaded", function () {
let currentDate = new Date();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();
console.log(hours);
document.getElementById("hour").textContent = hours;
document.getElementById("minute").textContent = minutes;
document.getElementById("second").textContent = seconds;
});
