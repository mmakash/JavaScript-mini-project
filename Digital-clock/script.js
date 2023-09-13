function getDate(){
    const d = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const day = days[d.getDay()];
    const month = months[d.getMonth()];
    const date = d.getDate();
    const year = d.getFullYear();
    return `${day}, ${month} ${date}, ${year}`;
}
document.querySelector('.date').innerHTML = getDate();
function getTime(){
    const d = new Date();
    let hours  = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours < 10 ? "0" : hours;
    minutes = minutes < 10 ? "0" : minutes;
    seconds = seconds < 10 ? "0" : seconds;
    const time = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.querySelector('.time').innerHTML = time;
}
setInterval(getTime, 1000);