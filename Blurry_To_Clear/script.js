"use strict";
const countdown = document.getElementById("countdown");
const section = document.querySelector("section");
let timeSecs = 10;

const timer = () => {
  timeSecs--;
  countdown.innerHTML = String(timeSecs);
  section.style.filter = `blur(${timeSecs}px)`;

  return timeSecs > 0
    ? setTimeout(timer, 50)
    : (countdown.style.fontSize = "0");
};

timer();
