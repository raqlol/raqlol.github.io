function createBio(elements) {
    elements = JSON.parse(elements);
    console.log(elements)
    const dogGallery = document.getElementById("dog-gallery");
    elements.forEach(funciton (element) {
        console.log(elements)
    });
}
var xhr = new XMLHttpRequest();
xhr.onload = createBio;
xhr.open("GET", "data/dogs.json", true);
xhr.send();

// image filter

// image expander

// random wiggle

//lazy load
