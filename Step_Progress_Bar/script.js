"use strict";

const steps = document.querySelectorAll(".step");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const progressBar = document.getElementById("progressBar");
let barStepPercent = 100 / (steps.length - 1);
let counter = 0;

const removeBorderClass = function () {
  for (let i = 0; i < steps.length; i++) {
    steps[i].classList.remove("active");
  }
};

const addBorderClass = function () {
  steps[counter].classList.add("active");
};

const updateProgress = () => {
  progressBar.style.width = counter * barStepPercent + "%";
};

const nextStep = function () {
  removeBorderClass();

  if (counter < steps.length - 1) {
    counter++;
    updateProgress();
    addBorderClass();
  } else {
    addBorderClass();
  }
};

const prevStep = function () {
  if (counter >= 1) {
    removeBorderClass();
    counter--;
    updateProgress();
    addBorderClass();
  }
};

nextBtn.addEventListener("click", nextStep);
prevBtn.addEventListener("click", prevStep);
