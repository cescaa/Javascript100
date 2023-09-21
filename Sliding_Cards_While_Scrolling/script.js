"use strict";

const allCells = document.querySelectorAll(".cell");
for (let i = 3; i < allCells.length; i++) {
  window.addEventListener("scroll", function () {
    const coords = allCells[i - 3].getBoundingClientRect();

    if (window.screenY > coords.top) {
      allCells[i].classList.remove("invis");
      if (i % 2 == 0) {
        allCells[i].classList.add("rightMove");
      } else {
        allCells[i].classList.add("leftMove");
      }
    }
  });
}

console.log(document.body.scrollHeight);
