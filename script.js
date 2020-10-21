//saving everything necessary from html page as variables to manipulate it
var statusSpan = document.querySelector("#status");
var statusToggle = document.querySelector("#status-toggle");
var playButton = document.querySelector("#play");
var pauseButton = document.querySelector("#pause");
var stopButton = document.querySelector("#stop");
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var workMinutesInput = document.querySelector("#work-minutes");
var restMinutesInput = document.querySelector("#rest-minutes");
var inputs = document.querySelector(".inputs")

//variables we need for timer
var totalSeconds = 0;
var secondsElapsed = 0;
var status = "Working";
var interval;

//starts application by calling setTime and renderTime()
getTimePreferences();

//these functions just format the numbers for the html elements
function getFormattedMinutes() {

    var secondsLeft = totalSeconds - secondsElapsed;

    var minutesLeft = Math.floor(secondsLeft / 60);

    var formattedMinutes;

    if (minutesLeft < 10) {
        formattedMinutes = "0" + minutesLeft;
    } 
    else {
        formattedMinutes = minutesLeft;
    }

    return formattedMinutes;
}

function getFormattedSeconds() {
    var secondsLeft = (totalSeconds - secondsElapsed) % 60;

    var formattedSeconds;

    if(secondsLeft < 10) {
        formattedSeconds = "0" + secondsLeft;
    } 
    else {
        formattedSeconds = secondsLeft;
    }

    return formattedSeconds
}

//this function retrieves the values from the html input elements, basically resets the timer


function setTime(){
    var minutes;

    if(status === "Working") {
        minutes = workMinutesInput.value.trim();
    } 
    else {
        minutes = restMinutesInput.value.trim();
    }

    clearInterval(interval);
    totalSeconds = minutes * 60;
}

//this function displays the time and checks to see if time has run out
function renderTime() {
    //sets textContent for html
    minutesDisplay.textContent = getFormattedMinutes();
    secondsDisplay.textContent = getFormattedSeconds();

    //then checks if time has run out
    if(secondsElapsed >= totalSeconds) {
        if(status === "Working") {
            alert("Time for a break!");
        } 
        else {
            alert("Time to get back to work!");
        }

        stopTimer();
    }
}

//this function is where the time runs: increments the secondsElapsed variable
function startTimer(){
    setTime();

    //only start if totalSeconds > 0
    if(totalSeconds > 0) {
        //here, interval using setInterval begins the recurring increment of the secondsElapsed variable which is used to check if the time is up
        interval = setInterval(function() {
            secondsElapsed++;

            //renderTime is called once every second
            renderTime();
        }, 1000);
    }
    else {
        alert("Minutes of work/rest must be greater than 0.")
    }
}


//this function stops the setInterval() in startTimer but doesn't reset secondsElapsed and doesn't reset the time
function pauseTimer() {
    clearInterval(interval);
    renderTime();
}



//this function stops the interval and also resets the secondsElapsed variable
function stopTimer() {
    secondsElapsed = 0;
    setTime();
    renderTime();
}

