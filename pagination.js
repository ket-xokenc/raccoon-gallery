const IMGPERPAGE = 3;

function getNumberOfPages() {
  return  Math.ceil(IMAGES.length/IMGPERPAGE);
}

function printPagination() {
  let imagesQuantity = getNumberOfPages();
  let gallery = document.getElementById("gallery");

  if (imagesQuantity > IMGPERPAGE) {
    // create centered wrapper
    let centeredBox = document.createElement('div');
    gallery.appendChild(centeredBox);
    centeredBox.classList.add('center');
    // create block for links
    let paginationBox = document.createElement('div');
    paginationBox.classList.add('pagination');
    centeredBox.appendChild(paginationBox);
    // add links to prev block
    for (let i = 0; i < imagesQuantity; i++) {
      let pageLink = document.createElement('a');
      pageLink.setAttribute("href", "#");
      paginationBox.appendChild(pageLink);
      pageLink.innerHTML = i + 1;
    }

    let prevPageLink = document.createElement("a");
    prevPageLink.setAttribute("href", "#");
    prevPageLink.innerHTML = '&laquo;';
    paginationBox.insertBefore(prevPageLink, paginationBox.firstChild);

    let nextPageLink = document.createElement("a");
    nextPageLink.setAttribute("href", "#");
    nextPageLink.innerHTML = '&raquo;';
    paginationBox.appendChild(nextPageLink);
  }
}

// renderGallery(IMAGES, IMGPERPAGE);
printPagination(IMGPERPAGE, IMAGES);

// let arrayPageLinks = document.querySelector(".pagination a:not(:first-child):not(:last-child)");
// for() {}
// document.querySelector(".pagination").addEventListener('click', addActiveClassToPageLink);

function addActiveClassToPageLink() {
  let arrayLinks = document.querySelectorAll('.pagination a:not(:first-child):not(:last-child)');
  // console.log(arrayLinks);
  for(let i = 0; i < arrayLinks.length; i++) {
    if(currentPage == arrayLinks[i].textContent) {
      arrayLinks[i].classList.add('active');
    } else {
      arrayLinks[i].classList.remove('active');
    }
  }
}

function checkDisabledLinks() {
  if (currentPage == 1) {
    // disabled prevbutton
    document.querySelector('.pagination a:first-child').classList.add('disabled');
  } else if (currentPage == getNumberOfPages()) {
    // disable next button
    document.querySelector('.pagination a:last-child').classList.add('disabled');
  } else {
    let arrayLinks = document.querySelectorAll('.pagination a');
    for (let i = 0; i < arrayLinks.length; i++) {
      arrayLinks[i].classList.remove('disabled');
    }

  }
}

// checkDisabledLinks();