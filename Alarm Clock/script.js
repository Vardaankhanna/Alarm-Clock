let alarmTime = null;
let alarmTimeout = null;
let initialized = false;

const displayCurrentTime = () => {
  const now = new Date();
  const timeString = now.toLocaleTimeString("en-US", { hour12: false });
  document.getElementById("time").textContent = timeString;
  if (alarmTime === timeString) {
    ringAlarm();
  }
};

const ringAlarm = () => {
  document.getElementById("alarm-message").textContent =
    "Wake Up! Alarm is ringing!";
  clearTimeout(alarmTimeout);
  const alarmSound = document.getElementById("alarm-sound");
  alarmSound.play();
};

const setAlarm = () => {
  const alarmInput = document.getElementById("alarm-time").value;
  if (alarmInput) {
    alarmTime = alarmInput + ":00";
    document.getElementById(
      "alarm-message"
    ).textContent = `Alarm set for ${alarmTime}`;
  }
};

const initializeAlarm = () => {
  const alarmSound = document.getElementById("alarm-sound");
  alarmSound.play(); // Attempt to play sound to get user interaction permission
  alarmSound.pause(); // Immediately pause the sound

  document.getElementById("alarm-time").disabled = false;
  document.querySelector(".alarm-setting button").disabled = false;
  document.getElementById("initialize-button").style.display = "none";

  initialized = true;
};

setInterval(displayCurrentTime, 1000);
