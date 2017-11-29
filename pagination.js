const NUMBERPERPAGE = 3;
var pageImgList = new Array();
var currentPage = 1;
var galleryImgArray = Array.prototype.slice.call(
  document.querySelectorAll(".galleryItem")
);
// console.log(typeof(galleryImgArray));

function getNumberOfPages() {
  return Math.ceil(IMAGES.length / NUMBERPERPAGE);
}

function printPaginationBlock() {
  let imagesQuantity = getNumberOfPages();
  let gallery = document.getElementById("gallery");

  if (imagesQuantity > NUMBERPERPAGE) {
    // create centered wrapper
    let centeredBox = document.createElement("div");
    gallery.appendChild(centeredBox);
    centeredBox.classList.add("center");
    // create block for links
    let paginationBox = document.createElement("div");
    paginationBox.classList.add("pagination");
    centeredBox.appendChild(paginationBox);
    // add links to prev block
    for (let i = 0; i < imagesQuantity; i++) {
      let pageLink = document.createElement("a");
      pageLink.setAttribute("href", "#");
      paginationBox.appendChild(pageLink);
      pageLink.innerHTML = i + 1;
    }

    let prevPageLink = document.createElement("a");
    prevPageLink.setAttribute("href", "#");
    prevPageLink.innerHTML = "&laquo;";
    paginationBox.insertBefore(prevPageLink, paginationBox.firstChild);

    let nextPageLink = document.createElement("a");
    nextPageLink.setAttribute("href", "#");
    nextPageLink.innerHTML = "&raquo;";
    paginationBox.appendChild(nextPageLink);
  }
}

printPaginationBlock();

function addActiveClassToPageLink() {
  let arrayLinks = document.querySelectorAll(
    ".pagination a:not(:first-child):not(:last-child)"
  );
  for (let i = 0; i < arrayLinks.length; i++) {
    if (currentPage == arrayLinks[i].textContent) {
      arrayLinks[i].classList.add("active");
    } else {
      arrayLinks[i].classList.remove("active");
    }
  }
}

function checkDisabledLinks() {
  let arrayLinks = document.querySelectorAll(".pagination a");
  if (currentPage == 1) {
    // disabled prevbutton
    for (let i = 0; i < arrayLinks.length; i++) {
      arrayLinks[i].classList.remove("disabled");
    }
    document
      .querySelector(".pagination a:first-child")
      .classList.add("disabled");
  } else if (currentPage == getNumberOfPages()) {
    // disable next button
    for (let i = 0; i < arrayLinks.length; i++) {
      arrayLinks[i].classList.remove("disabled");
    }
    document
      .querySelector(".pagination a:last-child")
      .classList.add("disabled");
  } else {
    for (let i = 0; i < arrayLinks.length; i++) {
      arrayLinks[i].classList.remove("disabled");
    }
  }
}

function nextPage() {
  currentPage += 1;
  showPage();
}

function prevPage() {
  currentPage -= 1;
  showPage();
}

function showPage() {
  var start = (currentPage - 1) * NUMBERPERPAGE;
  var end = start + NUMBERPERPAGE;
  for (i = 0; i < galleryImgArray.length; i++) {
    galleryImgArray[i].classList.add("not-visible");
  }
  pageImgList = galleryImgArray.slice(start, end);
  displayImg();
  checkDisabledLinks();
  addActiveClassToPageLink();
}

function displayImg() {
  for (i = 0; i < pageImgList.length; i++) {
    pageImgList[i].classList.remove("not-visible");
  }
}

function pagination(event) {
  let arrayLinks = Array.prototype.slice.call(document.querySelectorAll(".pagination a:not(:first-child):not(:last-child)"));
  arrayLinks.forEach(function(item, i, arrayLinks) {
    if(item == event.target) {
      currentPage = +event.target.textContent;
      showPage();
    };
});
}
document.querySelector(".pagination").addEventListener("click", pagination);

function load() {
  showPage();
}

var prevPageLink = document.querySelector(".pagination a:first-child");
prevPageLink.addEventListener("click", prevPage);

var nextPageLink = document.querySelector(".pagination a:last-child");
nextPageLink.addEventListener("click", nextPage);

var numberOfPages = getNumberOfPages();
window.onload = load;
