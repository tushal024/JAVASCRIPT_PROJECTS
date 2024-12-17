function updateClock() {
    const clockElement = document.getElementById('digital-clock');
    
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Format hours, minutes, and seconds to always show two digits
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Update the clock display
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Update the clock every 1 second
setInterval(updateClock, 1000);

// Initial call to display the time immediately
updateClock();
