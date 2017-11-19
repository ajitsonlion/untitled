function createImageHTML(location, img) {
    return ` <img src="img/${location}/1x/${img}" srcset="img/${location}/1x/${img} 1x, img/${location}/2x/${img} 2x,
                                 img/${location}/3x/${img} 3x, img/${location}/4x/${img} 4x" style="width:100%">`;
}

function appendThumbnail(img, location) {
    let div = document.createElement("div");
    div.setAttribute('class', `column`);

    div.innerHTML = createImageHTML(location, img);
    div.addEventListener("click", () => {
        showOverlay(img);
    });

    return div;

}

let divs = [
    appendThumbnail("1.jpg", 'thumbnail'),
    appendThumbnail("2.jpg", 'thumbnail'),
    appendThumbnail("3.jpg", 'thumbnail'),
    appendThumbnail("4.jpg", 'thumbnail')

];

let docFrag = document.createDocumentFragment();
for (let i = 0; i < divs.length; i++) {
    docFrag.appendChild(divs[i]);
}


function showOverlay(image) {
    window.location.hash = image;
    let overlay = document.getElementById("overlay");
    overlay.style.display = "block";
    overlay.innerHTML = createImageHTML('overlay', image);

}

function hideOverlay() {
    window.location.hash = '';
    let overlay = document.getElementById("overlay");
    overlay.innerHTML = '';
    overlay.style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
    let preLoad = window.location.hash;
    if (preLoad) {
        let hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
        showOverlay(hash);
        // hash found
    }

    let generateHere = document.getElementById('image-holder');
    generateHere.appendChild(docFrag); // Appends all divs at once
});