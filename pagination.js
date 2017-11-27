const IMGPERPAGE = 3;

function printPagination(imgPerPage, IMAGES) {
  let imagesQuantity = IMAGES.length;
  let gallery = document.getElementById("gallery");

  if (imagesQuantity > imgPerPage) {
    // create centered wrapper
    let centeredBox = document.createElement('div');
    gallery.appendChild(centeredBox);
    centeredBox.classList.add('center');
    // create block for links
    let paginationBox = document.createElement('div');
    paginationBox.classList.add('pagination');
    centeredBox.appendChild(paginationBox);
    // add links to prev block
    for (let i = 0; i < Math.ceil(imagesQuantity/imgPerPage); i++) {
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

printPagination(IMGPERPAGE, IMAGES);

document.querySelector(".pagination").addEventListener('click', addActiveClassToPageLink);

function addActiveClassToPageLink(event) {
  event.target.classList.toggle('active');
}
