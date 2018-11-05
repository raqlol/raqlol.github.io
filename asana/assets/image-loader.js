let dogBios;
const dog = document.getElementsByClassName("dog");
const lazyClass = document.getElementsByClassName('lazy');
const dogPic = document.getElementsByClassName("pic");
const dogThumbnail = document.getElementsByClassName("dog-thumbnail");
const closeBtns = document.getElementsByClassName("close");
const dogGallery = document.getElementById("dog-gallery");
// image expander
function expandBio(e, state) {
  if(state == true) {
    e.classList.remove("dog-thumbnail");
  }
  else {
    e.parentNode.classList.add("dog-thumbnail");
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
function createName(array, i){
  let name = document.createElement("p");
  let nameTxt = document.createTextNode(array[i].name);
  name.appendChild(nameTxt)
  name.classList.add("name")
  return name
}
function createAge(array, i){
  let age = document.createElement("p");
  let ageTxt = document.createTextNode(array[i].age);
  age.appendChild(ageTxt)
  age.classList.add("age")
  return age
}
function createSize(array, i){
  let size = document.createElement("p");
  let sizeTxt = document.createTextNode(array[i].size);
  size.appendChild(sizeTxt)
  size.classList.add("size")
  return size
}
function createGender(array, i){
  let gender = document.createElement("p");
  let genderTxt = document.createTextNode(array[i].gender);
  gender.appendChild(genderTxt)
  gender.classList.add("gender")
  return gender
}
function createBreed(array, i){
  let breed = document.createElement("p");
  let breedTxt = document.createTextNode(array[i].breed);
  breed.appendChild(breedTxt)
  breed.classList.add("breed")
  return breed
}
function createBio(array, i){
  let bio = document.createElement("p");
  let bioTxt = document.createTextNode(array[i].bio);
  bio.appendChild(bioTxt)
  bio.classList.add("bio")
  return bio
}
/* see above for all created parts */
function createBio(array) {
    for (i=0;i<array.length;i++){
      /* create the outter container */
      let container = document.createElement("div");
      container.classList.add("dog-thumbnail");
      container.classList.add("dog");
      /* create the buttons on every popup */
      let close = document.createElement("p");
      let closeTxt = document.createTextNode("✖");
      let adoptBtn = document.createElement("button");
      close.appendChild(closeTxt);
      close.classList.add("close")
      close.setAttribute("aria-label", "close")
      /* putting all the peices together */
      container.appendChild(close)
      container.appendChild(createImg(array, i))
      container.appendChild(createName(array, i))
      container.appendChild(createSize(array, i))
      container.appendChild(createAge(array, i))
      container.appendChild(createGender(array, i))
      container.appendChild(createBreed(array, i))
      container.appendChild(createBio(array, i))
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
