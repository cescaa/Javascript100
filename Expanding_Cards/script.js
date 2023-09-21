"use strict";

const cardsContainer = document.querySelector("container");
const cards = document.querySelectorAll(".card");
const crushName = document.querySelectorAll("h2");

const inuyashaH2 = (document.getElementById("inuyashaH2").style.opacity = 1);

cardsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".card");

  if (!clicked) return;

  cards.forEach((elem) => elem.classList.remove("active"));
  clicked.classList.add("active");
  crushName.forEach((elem) => (elem.style.opacity = 0));
  clicked.querySelector("h2").style.opacity = 1;
});
