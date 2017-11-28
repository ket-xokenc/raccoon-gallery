var pageList = new Array();
var currentPage = 1;
var numberPerPage = 3;
var events = Array.prototype.slice.call(document.querySelectorAll(".galleryItem"));

// console.log(events);

function getNumberOfPages() {
  return Math.ceil(events.length / numberPerPage);
}

function nextPage() {
  currentPage += 1;
  loadList();
}

function previousPage() {
  currentPage -= 1;
  loadList();
}

function firstPage() {
  currentPage = 1;
  loadList();
}

function lastPage() {
  currentPage = numberOfPages;
  loadList();
}

function loadList() {
  var begin = ((currentPage - 1) * numberPerPage);
  var end = begin + numberPerPage;
  // console.log(events);
  for (i = 0; i < events.length; i++) {
    events[i].classList.add("not-visible"); // make the old list invisible
  }
  pageList = events.slice(begin, end);
  drawList();
  checkDisabledLinks();
  addActiveClassToPageLink();
}

function pagination(event) {
  event.stopPropagation;

  if(event.target != document.querySelector(".pagination a:first-child") && event.target != document.querySelector(".pagination a:last-child") && event.target != document.querySelector('.pagination')) {
    currentPage = event.target.textContent;
    loadList();
  } else {
    // console.log(event.target);
    // event.preventDefault();
    
  }

}
document.querySelector(".pagination").addEventListener('click', pagination);

// pagination();

function drawList() {
  for (i = 0; i < pageList.length; i++) {
    pageList[i].classList.remove("not-visible");
  }
}


function load() {
  loadList();
}

var prevPage = document.querySelector('.pagination a:first-child');
prevPage.addEventListener('click', previousPage);

var nextPageLink = document.querySelector('.pagination a:last-child');
nextPageLink.addEventListener('click', nextPage);

var numberOfPages = getNumberOfPages();
window.onload = load;