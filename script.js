// script.js
function updateTime() {
    const now = new Date();
    const timeElement = document.getElementById('time');
    const dayElement = document.getElementById('day');

    // Display current time in UTC
    const utcTime = now.toISOString().substr(11, 8); // HH:MM:SS
    timeElement.textContent = `UTC Time: ${utcTime}`;

    // Display current day of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[now.getUTCDay()];
    dayElement.textContent = `Day of the Week: ${dayOfWeek}`;
}

// Update time every second
setInterval(updateTime, 1000);
updateTime(); 
