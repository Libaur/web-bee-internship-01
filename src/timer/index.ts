const format = {
  milliseconds: 1000 * 60 * 60,
  seconds: 1000 * 60,
};

let startTime: number;

window.addEventListener("load", startTimer);

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
  const formattedTime = formatTime(elapsedTime);
  const count = document.querySelector("#count");
  if (count) {
    count.textContent = formattedTime;
  }
  updateStoredTimer(elapsedTime);
  requestAnimationFrame(updateTimer);
}

function formatTime(time: number) {
  const hours = Math.floor(time / format.milliseconds);
  const minutes = Math.floor((time % format.milliseconds) / format.seconds);
  const seconds = Math.floor((time % format.seconds) / 1000);
  return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
}

const padZero = (value: number) => value.toString().padStart(2, "0");

const updateStoredTimer = (elapsedTime: number) => {
  sessionStorage.setItem("timerValue", elapsedTime.toString());
};

export const renderTimer = (path: string) => path === "/time" && startTimer();
