function attachEventsListeners() {
    let daysBtn = document.getElementById('daysBtn');
    let hoursBtn = document.getElementById('hoursBtn');
    let minutesBtn = document.getElementById('minutesBtn');
    let secondsBtn = document.getElementById('secondsBtn');

    daysBtn.addEventListener('click', convertFromDays);
    hoursBtn.addEventListener('click', convertFromHours);
    minutesBtn.addEventListener('click', convertFromMinutes);
    secondsBtn.addEventListener('click', convertFromSeconds);
}

function convertFromDays() {
    let days = parseFloat(document.getElementById('days').value);
    let hours = days * 24;
    let minutes = hours * 60;
    let seconds = minutes * 60;

    document.getElementById('hours').value = hours;
    document.getElementById('minutes').value = minutes;
    document.getElementById('seconds').value = seconds;
}

function convertFromHours() {
    let hours = parseFloat(document.getElementById('hours').value);
    let days = hours / 24;
    let minutes = hours * 60;
    let seconds = minutes * 60;

    document.getElementById('days').value = days;
    document.getElementById('minutes').value = minutes;
    document.getElementById('seconds').value = seconds;
}

function convertFromMinutes() {
    let minutes = parseFloat(document.getElementById('minutes').value);
    let hours = minutes / 60;
    let days = hours / 24;
    let seconds = minutes * 60;

    document.getElementById('days').value = days;
    document.getElementById('hours').value = hours;
    document.getElementById('seconds').value = seconds;
}

function convertFromSeconds() {
    let seconds = parseFloat(document.getElementById('seconds').value);
    let minutes = seconds / 60;
    let hours = minutes / 60;
    let days = hours / 24;

    document.getElementById('days').value = days;
    document.getElementById('hours').value = hours;
    document.getElementById('minutes').value = minutes;
}
