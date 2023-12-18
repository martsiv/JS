let timeBlock = document.createElement('div');

document.body.append(timeBlock);
function updateClock() {
  let currentTime = new Date();

  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  timeBlock.textContent = hours + ':' + minutes + ':' + seconds;
}
setInterval(updateClock, 1000);