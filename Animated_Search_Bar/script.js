"use strict";
const container = document.getElementById("container");
const inputField = document.getElementById("input_field");
const transScreen = document.getElementById("trans_screen");

const showInput = () => {
  inputField.style.display = "block";
  inputField.style.width = "25rem";
};

container.addEventListener("click", function () {
  container.style.padding = "0";
  container.style.width = "30rem";
  container.style.transition = "width 0.3s ease-in-out";
  transScreen.style.display = "block";
  setTimeout(showInput, 300);
});

transScreen.addEventListener("click", function () {
  container.style.padding = "1rem";
  container.style.width = "5rem";

  inputField.style.display = "none";
  transScreen.style.display = "none";
});
