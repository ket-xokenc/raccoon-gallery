const IMAGES = [
  'http://lifeglobe.net/x/entry/687/5d53cb35440c_3.jpg',
  'http://29palms.ru/photo/blog/animals/enoti_1/resized/020_Blog_Pavla_Aksenova_V_mire_zhivotnyh_Enoty_Foto_andamanec_-_Depositphotos.jpg',
  'http://img1.liveinternet.ru/images/attach/c/11/115/587/115587703_1.jpg',
  'http://polit.ru/media/photolib/2015/03/21/ps_raccoon.jpg',
  'http://farm4.static.flickr.com/3455/3237211012_3ae761995f_o.jpg',
  'https://enot-doma.ru/wp-content/uploads/2017/02/20.02.2017_02-1.jpg',
  'http://www.vokrugsveta.ru/img/cmn/2015/01/11/012.jpg'
];

// const gallery = document.getElementById('gallery');

function renderGallery(IMAGES) {
  for (let i = 0; i < IMAGES.length; i++) {
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

renderGallery(IMAGES);

function hideElement(event) {
  if (!event.target.classList.contains('galleryItem__closeIcon')) return;
  event.target.parentNode.hidden = true;
}



function showElement(event) {
 let galleryItemList = document.getElementsByClassName('galleryItem');
  for(let i = 0; i < galleryItemList.length; i++) {
    if(galleryItemList[i].hidden === true) {
      galleryItemList[i].hidden = false;
    }
  }
}

function changeGallery() {
  const galleryItemClose = document.getElementsByClassName("galleryItem__closeIcon");
  const gallery = document.getElementById('gallery');
  gallery.addEventListener('click', hideElement);
  gallery.addEventListener('click', showRestoreBtn);
  gallery.addEventListener('click', hideRestoreBtn);
  
}
function showRestoreBtn() {
  let galleryItemList = document.getElementsByClassName('galleryItem');
  for(let i = 0; i < galleryItemList.length; i++) {
    if(galleryItemList[i].hidden === true) {
      if(document.getElementsByTagName('button').length == 0) {
        let galleryRestoreBtn = document.createElement('button');
        gallery.appendChild(galleryRestoreBtn);
        galleryRestoreBtn.className = 'gallery__restoreBtn';
        galleryRestoreBtn.innerHTML = "Restore";
        galleryRestoreBtn.addEventListener('click', showElement);
      }
    }
  }
}

function hideRestoreBtn(event) {
  if(event.target.classList.contains('gallery__restoreBtn')) {
    gallery.removeChild(event.target);
  }
}

changeGallery();
