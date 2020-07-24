const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360);
  if (secondHand.classList.contains("reset")) {
    secondHand.classList.remove("reset");
  }
  if (secondsDegrees === 0) {
    secondHand.classList.add("reset");
  }
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360);
  if (minuteHand.classList.contains("reset")) {
    minuteHand.classList.remove("reset");
  }
  if (minutesDegrees === 0) {
    minuteHand.classList.add("reset");
  }
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360);
  if (hourHand.classList.contains("reset")) {
    hourHand.classList.remove("reset");
  }
  if (hoursDegrees === 0) {
    hourHand.classList.add("reset");
  }
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);