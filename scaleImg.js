var gallery = document.querySelector("#gallery");
function showBigImg(event) {
  // don`t work search querySelector. return null. only getElementsByClassName work. WHY?
  let galleryItemList = Array.prototype.slice.call(
    document.getElementsByClassName("galleryItem")
  );

  if (galleryItemList.indexOf(event.target) != -1) {
    // create modal wrapper
    let modalWindow = document.createElement("div");
    modalWindow.classList.add("modalWindow");
    document.body.appendChild(modalWindow);

    // create modal central wrapper
    let modalCenterBox = document.createElement("div");
    modalCenterBox.classList.add("modalImgBox");
    document.body.appendChild(modalCenterBox);

    // create img in centered box
    let bigImg = document.createElement("img");
    let srcImgString = event.target.style.backgroundImage;
    // get pure url. trim url("")
    let srcImg = srcImgString.substring(5, srcImgString.length - 2);
    bigImg.classList.add("bigImg");
    bigImg.setAttribute("src", srcImg);
    modalCenterBox.appendChild(bigImg);
    showFlippingArrows();
    showCloseBtn();
    findImgInList();
    modalCenterBox.addEventListener("click", flippingImagesByControls);
  }
}

function showFlippingArrows() {
  let modalImgBox = document.querySelector(".modalImgBox");
  let leftArrow = document.createElement("div");
  let rightArrow = document.createElement("div");
  leftArrow.classList.add("flipping-arrow", "left-arrow");
  rightArrow.classList.add("flipping-arrow", "right-arrow");
  modalImgBox.appendChild(leftArrow);
  modalImgBox.appendChild(rightArrow);
}

function showCloseBtn() {
  let modalImgBox = document.querySelector(".modalImgBox");
  let closeBtn = document.createElement("div");
  closeBtn.classList.add("close-btn");
  modalImgBox.appendChild(closeBtn);
}

function findImgInList() {
  let srcImg = document.querySelector(".bigImg").getAttribute("src");
  let currentImgIndex;
  imgList.forEach(function(element, index) {
    if (element.url == srcImg) {
      currentImgIndex = index;
      if (currentImgIndex == 0) {
        document.querySelector(".left-arrow").setAttribute("hidden", true);
      } else if (currentImgIndex == imgList.length - 1) {
        document.querySelector(".right-arrow").setAttribute("hidden", true);
      }
    }
  });
  return currentImgIndex;
}

function prevImage(index) {
  let currentImgSrc = document.querySelector(".bigImg");
  if (index == 0) {
    // do nothing. we are at first img
    return;
  } else if (index == 1) {
    // if current index = 1, flip img to index = 0 and hide arrow
    currentImgSrc.setAttribute("src", imgList[index - 1].url);
    document.querySelector(".left-arrow").setAttribute("hidden", true);
  } else {
    // show arrows and flip img
    document.querySelectorAll(".flipping-arrow").forEach(function(element) {
      element.removeAttribute("hidden");
    });
    currentImgSrc.setAttribute("src", imgList[index - 1].url);
  }
}

function nextImage(index) {
  let currentImgSrc = document.querySelector(".bigImg");
  if (index == imgList.length - 1) {
    // do nothing. we are at last img
    return;
  } else if (index + 1 == imgList.length - 1) {
    // penultimate img. flip to last img and hide arrow
    document.querySelector(".right-arrow").setAttribute("hidden", true);
    currentImgSrc.setAttribute("src", imgList[index + 1].url);
  } else {
    // show arrows and flip img
    currentImgSrc.setAttribute("src", imgList[index + 1].url);
    document.querySelectorAll(".flipping-arrow").forEach(function(element) {
      element.removeAttribute("hidden");
    });
  }
}

function destroyModalWindow() {
  let modalWindow = document.querySelector(".modalWindow");
  let modalCenterBox = document.querySelector(".modalImgBox");
  // remove modal window
  modalWindow.parentNode.removeChild(modalWindow);
  // remowe window with img
  modalCenterBox.parentNode.removeChild(modalCenterBox);
}

function flippingImagesByButtons(event) {
  // ESC pressed
  if (event.keyCode == 27) {
    destroyModalWindow();
  } else if (event.keyCode == 37) {
    // left arrow pressed
    prevImage((index = findImgInList()));
  } else if (event.keyCode == 39) {
    // right arrow pressed
    nextImage((index = findImgInList()));
  }
}

function flippingImagesByControls(event) {
  if (event.target.classList.contains("left-arrow")) {
    // left arrow was clicked
    prevImage((index = findImgInList()));
  } else if (event.target.classList.contains("right-arrow")) {
    // right arrow was clicked
    nextImage((index = findImgInList()));
  } else if (event.target.classList.contains("close-btn")) {
    // close btn was clicked
    destroyModalWindow();
  }
}

gallery.addEventListener("click", showBigImg);
window.onkeydown = flippingImagesByButtons;
