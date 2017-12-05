function handleFileSelect(event) {
  var files = event.target.files; // FileList object
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
        imgList.unshift({
          url: e.target.result,
          title: theFile.name
        });

        // delete old gallery and create new
        (function() {
          let gallery = document.getElementById("gallery");
          let galleryChildNodes = Array.prototype.slice.call(
            gallery.childNodes
          );
          galleryChildNodes.forEach(function(child) {
            gallery.removeChild(child);
          });
        })();

        initGallery();
      };
    })(f);

    // Read in the image file as a data URL.
    reader.readAsDataURL(f);
  }
}

document
  .querySelector(".img-upload-form__hidden-input")
  .addEventListener("change", handleFileSelect, false);

function initGallery() {
  renderGallery();

  // listeners for delete and restore elements
  let gallery = document.getElementById("gallery");
  gallery.addEventListener("click", hideElement);
  gallery.addEventListener("click", showRestoreBtn);
  gallery.addEventListener("click", hideRestoreBtn);

  initRating();
  initPagination();
  showPage();
}
window.onload = initGallery;
