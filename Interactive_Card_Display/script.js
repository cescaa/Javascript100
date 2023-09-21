function showDesc(card) {
  const descCell = card.querySelector(".descrip");
  const movImg = card.querySelector("img");
  const movTitle = card.querySelector("h3");
  const watchBtn = card.querySelector("button");
  if (descCell) {
    descCell.style.display = "flex";
    movImg.style.display = "none";
    movTitle.style.display = "none";
    watchBtn.style.display = "none";
  }
}

function hideDesc(card) {
  const descCell = card.querySelector(".descrip");
  const movImg = card.querySelector("img");
  const movTitle = card.querySelector("h3");
  const watchBtn = card.querySelector("button");
  if (descCell) {
    descCell.style.display = "none";
    movImg.style.display = "block";
    movTitle.style.display = "block";
    watchBtn.style.display = "block";
  }
}

function makeCard(movie) {
  const card = document.createElement("div");
  card.classList.add("card");

  const movImg = document.createElement("img");
  movImg.src = movie.imgURL;
  movImg.alt = movie.name;
  card.appendChild(movImg); // make img element a child of card div

  const movTitle = document.createElement("h3");
  movTitle.textContent = movie.name;
  card.appendChild(movTitle);

  const watchBtn = document.createElement("button");
  watchBtn.textContent = "watch";
  card.appendChild(watchBtn);

  const descCell = document.createElement("div");
  descCell.classList.add("descrip");
  const descH3 = document.createElement("h3");
  descCell.appendChild(descH3);
  descH3.textContent = movie.Desc;
  card.appendChild(descCell);
  descCell.style.display = "none";

  card.addEventListener("mouseover", () => showDesc(card));
  card.addEventListener("mouseout", () => hideDesc(card));
  return card;
}

document.addEventListener("DOMContentLoaded", function () {
  const { movies } = window; // destructure window objects
  const container = document.querySelector(".container");

  movies.forEach((movie) => {
    const movieCard = makeCard(movie);
    container.appendChild(movieCard);
  });
});
