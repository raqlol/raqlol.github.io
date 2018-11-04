let dogBios;
// image expander
const dog = document.getElementsByClassName("dog");
function expandBio(e) {
  let dogThumbnail = e.target
  dogThumbnail.classList.remove("dog-thumbnail")
}
/* load bios from json */
function createBio(array) {
    const dogGallery = document.getElementById("dog-gallery");
    for (i=0;i<array.length;i++){
      let container = document.createElement("div");
      container.classList.add("dog-thumbnail");
      container.classList.add("dog");
      let img = document.createElement("IMG");
      img.src= "https://melbournechapter.net/images/beagle-clipart-cutedog-1.png"
      img.classList.add("lazy")
      img.setAttribute("data-src",array[i].image)
      img.setAttribute("alt", array[i].breed)

      let name = document.createElement("p");
      let nameTxt = document.createTextNode(array[i].name);
      name.appendChild(nameTxt)

      let age = document.createElement("p");
      let ageTxt = document.createTextNode(array[i].age);
      age.appendChild(ageTxt)

      let breed = document.createElement("p");
      let breedTxt = document.createTextNode(array[i].breed);
      breed.appendChild(breedTxt)

      let gender = document.createElement("p");
      let genderTxt = document.createTextNode(array[i].gender);
      gender.appendChild(genderTxt)

      let size = document.createElement("p");
      let sizeTxt = document.createTextNode(array[i].size);
      size.appendChild(sizeTxt)

      let bio = document.createElement("p");
      let bioTxt = document.createTextNode(array[i].bio);
      bio.appendChild(bioTxt)

      container.appendChild(img)
      container.appendChild(name)
      container.appendChild(age)
      container.appendChild(breed)
      container.appendChild(gender)
      container.appendChild(size)
      container.appendChild(bio)
      dogGallery.appendChild(container)
    }
    addLL()
}
(function fetchJSONFile() {
    var httpRequest = new XMLHttpRequest();
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                dogBios = (JSON.parse(xhr.responseText)).dogs
                createBio(dogBios)
            }
        }
    };
    xhr.open('GET', "assets/data/dogs.json", true);
    xhr.send();
})();

/* adds expander click event */
for (i=0;i<dog.length;i++){
  dog[i].addEventListener("click", function(event){
    expandBio(event)
  })
}

//lazy load
document.addEventListener("DOMContentLoaded", function() {
  let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
  let active = false;
  console.log("i see you moving")
  const lazyLoad = function() {
    if (active === false) {
      active = true;

      setTimeout(function() {
        lazyImages.forEach(function(lazyImage) {
          if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.classList.remove("lazy");

            lazyImages = lazyImages.filter(function(image) {
              return image !== lazyImage;
            });

            if (lazyImages.length === 0) {
              document.removeEventListener("scroll", lazyLoad);
              window.removeEventListener("resize", lazyLoad);
              window.removeEventListener("orientationchange", lazyLoad);
            }
          }
        });

        active = false;
      }, 200);
    }
  };

  document.addEventListener("scroll", lazyLoad);
  window.addEventListener("resize", lazyLoad);
  window.addEventListener("orientationchange", lazyLoad);
});
// image filter

// random wiggle

// konami code
