function activateGallery() {
    let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
    let mainImage = document.querySelector("#gallery-photo > img");
    thumbnails.forEach(function(thumbnail) {
        // preload large images
        let newImageSrc = thumbnail.dataset.largeVersion;
        let largeVersion = new Image();
        largeVersion.src = newImageSrc;
        thumbnail.addEventListener("click", function() {
            mainImage.setAttribute("src", newImageSrc);
            mainImage.setAttribute("alt", thumbnail.alt);

            // change which image is current
            const currentClass = "current";
            document.querySelector("."+currentClass).classList.remove(currentClass);
            thumbnail.parentNode.classList.add(currentClass);

            // update gallery info
            let galleryInfo = document.querySelector("#gallery-info");
            let title       = galleryInfo.querySelector(".title");
            let description = galleryInfo.querySelector(".description");
            title.innerHTML       = thumbnail.dataset.title;
            description.innerHTML = thumbnail.dataset.description;
        });
    });
}
