"use strict";

const container = document.querySelector("section");
const numOfCircs = 750;
const colours = [
  "#BBDAC1",
  "#F8D3C5",
  "#E7D8C9",
  "#A3B899",
  "#667B68",
  "#FCEEE9",
];

for (let i = 0; i < numOfCircs; i++) {
  const circle = document.createElement("div");
  circle.classList.add("circle");

  circle.addEventListener("mouseover", () => changeColour(circle));
  circle.addEventListener("mouseout", () => resetColour(circle));

  container.appendChild(circle);
}

function changeColour(circle) {
  const colour = getColour();
  circle.style.background = colour;
}
function resetColour(circle) {
  circle.style.backgroundColor = "#e4f0e6";
}

function getColour() {
  return colours[Math.floor(Math.random() * colours.length)];
}
