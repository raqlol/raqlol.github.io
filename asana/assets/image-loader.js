<<<<<<< HEAD
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
=======
let dogBios;
const dog = document.getElementsByClassName("dog");
const lazyClass = document.getElementsByClassName('lazy');
const dogPic = document.getElementsByClassName("pic");
const dogThumbnail = document.getElementsByClassName("dog-thumbnail");
const closeBtns = document.getElementsByClassName("close");
const dogGallery = document.getElementById("dog-gallery");
const openBio = document.getElementsByClassName('open')
// image expander
function expandBio(e, state) {
  if(state == true) {
    /*if(openBio[0]) {
      openBio[0].classList.add("dog-thumbnail");
      openBio[0].classList.remove("open");
    }*/
    e.classList.remove("dog-thumbnail");
    e.classList.add("open");
  }
  else {
    e.parentNode.classList.add("dog-thumbnail");
    e.parentNode.classList.remove("open");
  }
}
function createImg(array, i){
  let imgContainer = document.createElement("div");
  if(i>17){
    imgContainer.classList.add("lazy")
  }
  else {
    imgContainer.style.backgroundImage = "url('" + array[i].image + "')"
  }
  imgContainer.classList.add("pic")
  imgContainer.setAttribute("data-src",array[i].image)
  imgContainer.classList.add("img-container")
  return imgContainer
}

/* see above for all created parts */
function createBio(array) {
    const dogGallery = document.getElementById("dog-gallery");
    for (i=0;i<array.length;i++){
      let container = document.createElement("div");
      container.classList.add("dog-thumbnail");
      container.classList.add("dog");

      let name = document.createElement("p");
      let nameTxt = document.createTextNode(array[i].name);
      name.appendChild(nameTxt)
      name.classList.add("name")
      let age = document.createElement("p");
      let ageTxt = document.createTextNode(array[i].age);
      age.appendChild(ageTxt)
      age.classList.add("age")
      let breed = document.createElement("p");
      let breedTxt = document.createTextNode(array[i].breed);
      breed.appendChild(breedTxt)
      breed.classList.add("breed")
      let gender = document.createElement("p");
      let genderTxt = document.createTextNode(array[i].gender);
      gender.appendChild(genderTxt)
      gender.classList.add("gender")
      let size = document.createElement("p");
      let sizeTxt = document.createTextNode(array[i].size);
      size.appendChild(sizeTxt)
      size.classList.add("size")
      let bio = document.createElement("p");
      let bioTxt = document.createTextNode(array[i].bio);
      bio.appendChild(bioTxt)
      bio.classList.add("bio")
      let close = document.createElement("p");
      let closeTxt = document.createTextNode("✖");

      let adoptBtn = document.createElement("button");


      close.appendChild(closeTxt);
      close.classList.add("close")
      close.setAttribute("aria-label", "close")
      container.appendChild(close)
      container.appendChild(createImg(array, i))
      container.appendChild(name)
      container.appendChild(size)
      container.appendChild(age)
      container.appendChild(gender)
      container.appendChild(breed)
      container.appendChild(bio)
      container.appendChild(adoptBtn)
      dogGallery.appendChild(container)
    }
    /* lazy load */
  let lazyImages = [].slice.call(document.querySelectorAll("div.lazy"));
    let active = false;
    const lazyLoad = function() {
      if (active === false) {
        active = true;
        setTimeout(function() {
          lazyImages.forEach(function(lazyImage) {
            if (
              lazyImage.getBoundingClientRect().top <= window.innerHeight &&
              lazyImage.getBoundingClientRect().bottom >= 0 &&
              getComputedStyle(lazyImage).display !== "none"
            ) {
              lazyImage.style.backgroundImage = "url('" + lazyImage.dataset.src + "')"
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
        }, 100);
      }
    };
    document.addEventListener("scroll", lazyLoad);
    window.addEventListener("resize", lazyLoad);
    window.addEventListener("orientationchange", lazyLoad);
    for (i=0;i<dogPic.length;i++){
        dogPic[i].addEventListener("click", function(event){
          expandBio(event.target.parentNode, true)
        })
      }
    for (i=0;i<dogThumbnail.length;i++){
        dogThumbnail[i].addEventListener("click", function(event){
          expandBio(event.target, true)
        })
      }
    for (i=0;i<closeBtns.length;i++) {
      closeBtns[i].addEventListener("click", function(event){
        expandBio(event.target, false)
      })
    }
}
(function fetchJSONFile() {
    var httpRequest = new XMLHttpRequest();
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                dogBios = (JSON.parse(xhr.responseText)).dogs
                createBio(dogBios);
            }
        }
    };
    xhr.open('GET', "https://raqlol.github.io/asana/assets/data/dogs.json", true);
    xhr.send();
})();
>>>>>>> d08a8d9cf16a8978b0eea31256b49a488eeb0d35
