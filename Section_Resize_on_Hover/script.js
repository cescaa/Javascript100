"use strict";

const barbieMainCell = document.getElementById("barbie");
const barbieImg = barbieMainCell.querySelector("img");
const barbieTitleDiv = document.getElementById("titleBarb");
const barbieText = barbieTitleDiv.querySelector("h1");

const oppenhMainCell = document.getElementById("oppenh");
const oopTitleDiv = document.getElementById("titleOpp");
const oppenhImg = oppenhMainCell.querySelector("img");
const oppenhText = oopTitleDiv.querySelector("h1");

// shows full text
barbieMainCell.addEventListener("mouseover", function () {
  barbieTitleDiv.style.width = "80%";
  oopTitleDiv.style.width = "20%";
  barbieText.style.transform = "translateX(30%)";
  barbieMainCell.style.width = "80%";
  oppenhMainCell.style.width = "20%";
});

barbieMainCell.addEventListener("mouseout", function () {
  reset();
});

oppenhMainCell.addEventListener("mouseover", function () {
  barbieTitleDiv.style.width = "20%";
  oopTitleDiv.style.width = "80%";
  oppenhText.style.transform = "translateX(8%)";
  barbieMainCell.style.width = "20%";
  oppenhMainCell.style.width = "80%";
});

oppenhMainCell.addEventListener("mouseout", function () {
  reset();
});

function reset() {
  barbieTitleDiv.style.width = "50%";
  oopTitleDiv.style.width = "50%";
  barbieText.style.transform = "translateX(49%)";
  oppenhText.style.transform = "translateX(-37%)";
  barbieMainCell.style.width = "50%";
  oppenhMainCell.style.width = "50%";
}
