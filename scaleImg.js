var gallery = document.querySelector('#gallery');
// var srcImg;
// var index;
function bigImg(event) {
  // don`t work search querySelector. return null. only getElementsByClassName work. WHY?
  let galleryItemList = Array.prototype.slice.call(
    document.getElementsByClassName("galleryItem")
  );

  if(galleryItemList.indexOf(event.target) != -1) {
    // create modal wrapper
    let modalWindow = document.createElement('div');
    modalWindow.classList.add('modalWindow');
    document.body.appendChild(modalWindow);

    // create modal central wrapper
    let modalCenterBox = document.createElement('div');
    modalCenterBox.classList.add('modalImgBox');
    document.body.appendChild(modalCenterBox);

    // create img in centered box
    let bigImg = document.createElement('img');
    let srcImgString = event.target.style.backgroundImage;
    // get pure url. trim url("")
    let srcImg = srcImgString.substring(5, (srcImgString.length -2) );
    bigImg.classList.add('bigImg');
    bigImg.setAttribute('src', srcImg);
    modalCenterBox.appendChild(bigImg);
  }
}

function findImgInList() {
  let srcImg = document.querySelector('.bigImg').getAttribute('src');
  let currentImgIndex;
  imgList.forEach(function(element, index){
    if(element.url == srcImg) {
      currentImgIndex = index;
    }
  });
  return currentImgIndex;
}

// let index=findImgInList();
function prevImage(index) {
  let currentImgSrc = document.querySelector('.bigImg');
  currentImgSrc.setAttribute('src', imgList[index-1].url);
  console.log(imgList[(index-1)].url);
  console.log(index);
}

gallery.addEventListener('click', bigImg);
gallery.addEventListener('click', findImgInList);
// let index = findImgInList();
// console.log(srcImg);
function destroyModalWindow() {
  let modalWindow = document.querySelector('.modalWindow');
  let modalCenterBox = document.querySelector('.modalImgBox');
  modalWindow.parentNode.removeChild(modalWindow);
  modalCenterBox.parentNode.removeChild(modalCenterBox);
}
// console.log(findImgInList());

function checkPressedKey(event) {
  // ESC pressed
  if(event.keyCode == 27) {
    destroyModalWindow();
  } // left arrow pressed
  else if (event.keyCode == 37) {
    // let index = findImgInList();
    // console.log(index);
    prevImage(index = findImgInList());
    // function to flipping prev images
  } //right arrow pressed
  else if(event.keyCode == 39) {

    // function to flipping next images
  }
}

window.onkeydown = checkPressedKey;
// console.log(imgList);