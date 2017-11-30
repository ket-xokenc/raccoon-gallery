function handleFileSelect(event) {
  var files = event.target.files; // FileList object
  // console.log(files);
  // Loop through the FileList and render image files as thumbnails.
  for (var i = 0, f; (f = files[i]); i++) {
    // Only process image files.
    if (!f.type.match("image.*")) {
      continue;
    }

    var reader = new FileReader();

    // Closure to capture the file information.
    reader.onload = (function(theFile) {
      return function(e) {
        // Render thumbnail.
        
        // let gallery = document.getElementById("gallery");
        // let galleryItem = document.createElement('div');
        // galleryItem.classList.add('galleryItem');
        // galleryItem.style.backgroundImage = "url('"+e.target.result+"')";
        // gallery.appendChild(galleryItem);
        
        // // image name
        // let galleryItemName = document.createElement('div');
        // galleryItem.appendChild(galleryItemName);
        // galleryItemName.className = 'galleryItem__name';
        // galleryItemName.innerHTML = theFile.name;

        // // image close icon
        // let galleryItemClose = document.createElement('div');
        // galleryItem.appendChild(galleryItemClose);
        // galleryItemClose.className = 'galleryItem__closeIcon';
        // galleryItemClose.innerHTML = "&#10006";

        IMAGES.unshift(e.target.result);
        // console.log(IMAGES);
        // load;
        // renderGallery(IMAGES);
        // console.log(e.target.result);
        // var span = document.createElement("span");
        // span.innerHTML = [
        //   '<img class="thumb" src="',
        //   e.target.result,
        //   '" title="',
        //   escape(theFile.name),
        //   '"/>'
        // ].join("");
      };
    })(f);

    // Read in the image file as a data URL.
    reader.readAsDataURL(f);
  }
}

document
  .querySelector('.img-upload-form__hidden-input')
  .addEventListener("change", handleFileSelect, false);
