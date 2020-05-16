var secDiv = document.getElementById('sec');
var minDiv = document.getElementById('min');
var hourDiv = document.getElementById('hour');
setInterval(updateDate,1000);
function updateDate(){
    let date = new  Date();
    let sec = date.getSeconds() / 60; 
    let min = (date.getMinutes() + sec) / 60;
    let hour = (date.getHours() + min) / 12; 
    secDiv.style.transform = "rotate(" + (sec * 360) + "deg)";
    minDiv.style.transform = "rotate(" + (min * 360) + "deg)";
    hourDiv.style.transform = "rotate(" + (hour * 360) + "deg)";
}
updateClock();