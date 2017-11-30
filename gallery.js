const IMAGES = [
  'http://lifeglobe.net/x/entry/687/5d53cb35440c_3.jpg',
  'http://29palms.ru/photo/blog/animals/enoti_1/resized/020_Blog_Pavla_Aksenova_V_mire_zhivotnyh_Enoty_Foto_andamanec_-_Depositphotos.jpg',
  'http://img1.liveinternet.ru/images/attach/c/11/115/587/115587703_1.jpg',
  'http://polit.ru/media/photolib/2015/03/21/ps_raccoon.jpg',
  'http://farm4.static.flickr.com/3455/3237211012_3ae761995f_o.jpg',
  'https://enot-doma.ru/wp-content/uploads/2017/02/20.02.2017_02-1.jpg',
  'http://www.vokrugsveta.ru/img/cmn/2015/01/11/012.jpg',
  'http://29palms.ru/photo/blog/animals/enoti_1/resized/024_Blog_Pavla_Aksenova_V_mire_zhivotnyh_Enoty_Foto_friday_-_Depositphotos.jpg',
  'http://www.wonderfulnature.ru/photo/raccoon/2.jpg',
  'http://webmandry.com/wp-content/uploads/2015/01/2015_01_942_enot-13.jpg',
  'https://i.ytimg.com/vi/TFrtge-euGo/hqdefault.jpg',
  'http://www.vokrugsveta.ru/img/cmn/2015/01/11/005.jpg',
  'http://images.medicaldaily.com/sites/medicaldaily.com/files/styles/headline/public/2013/08/04/1/04/10476.jpg',
  'https://assets.change.org/photos/1/ki/yx/nekiyxxbJhEMEBx-800x450-noPad.jpg?1509259685',
  'https://gayfartsandculture.files.wordpress.com/2013/01/a-aaa-raccoons-pairs.jpg',
  'http://i.imgur.com/BtqjsLG.jpg',
  'https://centralinsurance1876.files.wordpress.com/2012/01/91702654.jpg',
  'http://gazeta.a42.ru/uploads/7eb/7eb7c260-a996-11e7-8c33-0f7ccd716408.jpg',
  'http://www.poznavayka.org/wp-content/uploads/2015/06/enotyi-2.jpg',
  'http://enot-1.ru/wp-content/uploads/2015/11/SPIQAI-o3F8-500x750.jpg',
  'http://www.poznavayka.org/wp-content/uploads/2015/06/enot.jpg',
  'https://netparazitam.org/images/enottoneru2.jpg',
  'https://enot-doma.ru/wp-content/uploads/2017/02/21.02.2017_03.jpg'
];

// const gallery = document.getElementById('gallery');



function prepareImgList(imgList) {
  let imgObgList = new Array();

// create Array of Objects with fields url and title
  imgObgList = imgList.map(function(element) {
    return new Object({url: element, title : findImgName(element)});
  });

// find image name in url
  function findImgName(str) {
    let start = str.lastIndexOf('/') + 1;
    let end = str.length;
    return str.substring(start, end);
  }
  return imgObgList;
}

function renderGallery() {
  for (let i = 0; i < IMAGES.length; i++) {
    let galleryItem = document.createElement('div');
    galleryItem.classList.add('galleryItem');
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

renderGallery();

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
