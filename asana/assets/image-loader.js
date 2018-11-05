let dogBios;
const dog = document.getElementsByClassName("dog");
const lazyClass = document.getElementsByClassName('lazy');
const dogPic = document.getElementsByClassName("pic");
const dogThumbnail = document.getElementsByClassName("dog-thumbnail");
const closeBtns = document.getElementsByClassName("close");
// image expander
function expandBio(e, state) {
  if(state == true) {
    e.classList.remove("dog-thumbnail");
  }
  else {
    e.parentNode.classList.add("dog-thumbnail");
  }
}
function createBio(array) {
    const dogGallery = document.getElementById("dog-gallery");
    for (i=0;i<array.length;i++){
      let container = document.createElement("div");
      container.classList.add("dog-thumbnail");
      container.classList.add("dog");
      let imgContainer = document.createElement("div");
      if(i>15){
        imgContainer.classList.add("lazy")
      }
      imgContainer.classList.add("pic")
      imgContainer.setAttribute("data-src",array[i].image)
      imgContainer.classList.add("img-container")
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
      container.appendChild(imgContainer)
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
    console.log("calling all json")
    var httpRequest = new XMLHttpRequest();
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              console.log("success")
                dogBios = (JSON.parse(xhr.responseText)).dogs
                createBio(dogBios);
            }
        }
    };
    xhr.open('GET', "https://raqlol.github.io/asana/assets/data/dogs.json", true);
    xhr.send();
  console.log("done")
})();

// image filter

// random wiggle

// konami code
