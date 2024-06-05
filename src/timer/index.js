import { format } from "../constants";

let startTime;

addEventListener("load", () => {
  startTimer();
});

function startTimer() {
  startTime = Date.now();
  useStoredTimer();
  requestAnimationFrame(updateTimer);
}

function useStoredTimer() {
  const savedTime = sessionStorage.getItem("timerValue");
  if (savedTime) startTime -= parseInt(savedTime);
}

function updateTimer() {
  const elapsedTime = Date.now() - startTime;
  const count = document.getElementById("count");
  if (count) {
    count.textContent = formatTime(elapsedTime);
  }
  updateStoredTimer(elapsedTime);
  requestAnimationFrame(updateTimer);
}

function formatTime(time) {
  const hours = Math.floor(time / format.milliseconds);
  const minutes = Math.floor((time % format.milliseconds) / format.seconds);
  const seconds = Math.floor((time % format.seconds) / 1000);
  return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
}

const padZero = (value) => value.toString().padStart(2, "0");

const updateStoredTimer = (elapsedTime) => {
  sessionStorage.setItem("timerValue", elapsedTime.toString());
};
