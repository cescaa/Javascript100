"use strict";

const boxes = document.querySelectorAll(".box");

document.addEventListener("keydown", function (k) {
  if (k.code !== "Space") {
    boxes[0].innerText = k.key.toUpperCase();
  } else {
    boxes[0].innerText = "SPACE";
  }

  boxes[1].innerText = k.keyCode; // deprecated
  boxes[2].innerText = `${k.code}`;
});
