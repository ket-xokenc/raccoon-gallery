const IMGPERPAGE = 3;
var currentPage= 1;

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

document.querySelector(".pagination").addEventListener('click', addActiveClassToPageLink);

function addActiveClassToPageLink(event) {
  event.target.classList.toggle('active');
}

function renderGallery(IMAGES, IMGPERPAGE) {
  for (let i = 0; i < IMGPERPAGE; i++) {
    let galleryItem = document.createElement('div');
    galleryItem.className = 'galleryItem';
    galleryItem.style.backgroundImage = "url('"+IMAGES[i]+"')";
    gallery.appendChild(galleryItem);
    
    // image name
    let galleryItemName = document.createElement('div');
    galleryItem.appendChild(galleryItemName);
    galleryItemName.className = 'galleryItem__name';
    galleryItemName.innerHTML = IMAGES[i];

    // image close icon
    let galleryItemClose = document.createElement('div');
    galleryItem.appendChild(galleryItemClose);
    galleryItemClose.className = 'galleryItem__closeIcon';
    galleryItemClose.innerHTML = "&#10006";
  }
}

function checkDisabledLinks(currentPage) {
  if (currentPage == 1) {
    // disabled prevbutton
    document.querySelector('.pagination a:first-child').classList.toggle('disabled');
  } else if (currentPage == getNumberOfPages()) {
    // disable next button
    document.querySelector('.pagination a:last-child').classList.toggle('disabled');
  }
}

// checkDisabledLinks();