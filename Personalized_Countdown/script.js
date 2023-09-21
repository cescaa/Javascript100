"use strict";

const btn = document.querySelector("button");
let secDisplay = document.querySelector("h1");
let timeInput = document.getElementById("time");
let c = 0;

secDisplay.textContent = 0;

timeInput.addEventListener("input", function () {
  secDisplay.textContent = timeInput.value;

  if (timeInput.value === "" || timeInput.value === "0") {
    secDisplay.textContent = 1;
    timeInput.value = "1";
  }
  c = Number(timeInput.value);
});

let minusCount = function () {
  c = c - 1;
  secDisplay.textContent = c;
  if (c === 0) {
    timeInput.readOnly = false;
    btn.disabled = false;
    btn.style.background = "#03a8b7";
    btn.style.transform = "translateY(0px)";
    timeInput.value = "";
  }
  return c;
};

const startCount = function () {
  timeInput.readOnly = true;
  btn.disabled = true;
  btn.style.background = "#04929f";
  btn.style.transform = "translateY(2px)";
  for (let i = 0; i < c; i++) {
    setTimeout(minusCount, (i + 1) * 1000);
  }
};

btn.addEventListener("click", startCount);
