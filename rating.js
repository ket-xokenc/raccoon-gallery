function addRatingBlock() {
  const galleryItemList = document.getElementsByClassName("galleryItem");
  for (let i = 0; i < galleryItemList.length; i++) {
    let galleryItemRating = document.createElement("div");
    galleryItemList[i].appendChild(galleryItemRating);
    galleryItemRating.className = "galleryItem-rating";
  }
}

function addStarsToRating() {
  const galleryItemRating = document.getElementsByClassName(
    "galleryItem-rating"
  );
  for (let i = 0; i < galleryItemRating.length; i++) {
    for (let j = 5; j > 0; j--) {
      let name = "ratingStar" + j;
      name = document.createElement("div");
      galleryItemRating[i].appendChild(name);
      name.className = "galleryItem-rating__star";
      name.innerHTML = "&#9733;";
      name.setAttribute("data-rating", j);
    }
  }
}

function unfillStars(event) {
  let ratingBlock = event.target.parentNode;
  if (event.target.classList.contains("star--hovered")) {
    for (let j = 0; j < ratingBlock.children.length; j++) {
      ratingBlock.children[j].classList.remove("star--hovered");
    }
  }
}

function fillStarsToChecked(event) {
  if (
    event.target.classList.contains("galleryItem-rating__star") &&
    event.target.classList.contains("star--hovered")
  ) {
    unfillStars(event);
  } else if (event.target.classList.contains("galleryItem-rating__star")) {
    let rating = event.target.getAttribute("data-rating");
    let ratingBlock = event.target.parentNode;
    let rating__star = ratingBlock.children;
    for (let i = 0; i < ratingBlock.children.length; i++) {
      if (ratingBlock.children[i].getAttribute("data-rating") <= rating) {
        ratingBlock.children[i].classList.add("star--hovered");
      }
    }
  }
}

function addListenersToRating() {
  let ratingBlock = document.getElementsByClassName("galleryItem-rating");
  for (let i = 0; i < ratingBlock.length; i++) {
    ratingBlock[i].addEventListener("click", fillStarsToChecked);
  }
}
function initRating() {
  addRatingBlock();
  addStarsToRating();
  addListenersToRating();
}
