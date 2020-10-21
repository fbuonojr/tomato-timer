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
    var secondsLeft = totalSeconds-secondsElapsed;

    var minutesLeft = Math.floor(secondsLeft / 60);
 }