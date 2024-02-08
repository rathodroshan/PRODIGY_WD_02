let timer;
let isRunning = false;
let time = 0;

const formatTime = (milliseconds) => {
  const minutes = Math.floor(milliseconds / (60 * 1000));
  const seconds = Math.floor((milliseconds % (60 * 1000)) / 1000);
  const millisecondsFormatted = Math.floor((milliseconds % 1000) / 10);

  return `${padTwoDigits(minutes)}:${padTwoDigits(seconds)}:${padTwoDigits(millisecondsFormatted)}`;
};

const padTwoDigits = (number) => {
  return number < 10 ? `0${number}` : `${number}`;
};

const updateDisplay = () => {
  document.getElementById('time').textContent = formatTime(time);
};

const startStopToggle = () => {
  const startButton = document.getElementById('start');
  if (isRunning) {
    stopTimer();
    startButton.textContent = 'Start';
  } else {
    startTimer();
    startButton.textContent = 'Stop';
  }
};

const startTimer = () => {
  if (!isRunning) {
    timer = setInterval(() => {
      time += 10;
      updateDisplay();
    }, 10);
    isRunning = true;
  }
};

const stopTimer = () => {
  clearInterval(timer);
  isRunning = false;
};

const resetTimer = () => {
  clearInterval(timer);
  isRunning = false;
  time = 0;
  updateDisplay();
  clearRecordList();
};

const recordTime = () => {
  const recordList = document.getElementById('recordList');
  const recordItem = document.createElement('li');
  recordItem.textContent = formatTime(time);
  recordList.appendChild(recordItem);
};

const clearRecordList = () => {
  const recordList = document.getElementById('recordList');
  while (recordList.firstChild) {
    recordList.removeChild(recordList.firstChild);
  }
};

document.getElementById('start').addEventListener('click', startStopToggle);
document.getElementById('reset').addEventListener('click', resetTimer);
document.getElementById('record').addEventListener('click', recordTime);

document.getElementById('darkModeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
