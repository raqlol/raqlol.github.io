let dogBios;
// image expander
const dog = document.getElementsByClassName("dog");
const lazyClass = document.getElementsByClassName('lazy');
const dogPic = document.getElementsByClassName("dog-thumbnail");
const closeBtns = document.getElementsByClassName("close");

function expandBio(e, state) {
  let dogThumbnail = e.target
  if(state == true) {
    dogThumbnail.classList.remove("dog-thumbnail");
  }
  else {
    dogThumbnail.parentNode.classList.add("dog-thumbnail");
  }
}
function createBio(array) {
    const dogGallery = document.getElementById("dog-gallery");
    for (i=0;i<array.length;i++){
      let container = document.createElement("button");
      container.classList.add("dog-thumbnail");
      container.classList.add("dog");

      let imgContainer = document.createElement("div");
      let img = document.createElement("IMG");
      img.src= "https://melbournechapter.net/images/beagle-clipart-cutedog-1.png"
      img.classList.add("lazy")
      img.classList.add("pic")
      img.setAttribute("data-src",array[i].image)
      img.setAttribute("alt", array[i].breed)
      imgContainer.appendChild(img)
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
      close.appendChild(closeTxt);
      close.classList.add("close")

      container.appendChild(close)
      container.appendChild(imgContainer)
      container.appendChild(name)
      container.appendChild(size)
      container.appendChild(age)
      container.appendChild(gender)
      container.appendChild(breed)


      container.appendChild(bio)
      dogGallery.appendChild(container)
    }
  console.log("done with bios")
  let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
    let active = false;
    console.log(lazyImages);
    const lazyLoad = function() {
      console.log("lazyloading func");
      if (active === false) {
        console.log("if");
        active = true;
        setTimeout(function() {
          lazyImages.forEach(function(lazyImage) {
            if (
              lazyImage.getBoundingClientRect().top <= window.innerHeight &&
              lazyImage.getBoundingClientRect().bottom >= 0 &&
              getComputedStyle(lazyImage).display !== "none"
            ) {
              console.log("if again");
              lazyImage.src = lazyImage.dataset.src;
              lazyImage.classList.remove("lazy");

              lazyImages = lazyImages.filter(function(image) {
                return image !== lazyImage;
              });
              if (lazyImages.length === 0) {
                console.log("nothing there");
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
    for (i=0;i<dogPic.length;i++){
          dogPic[i].addEventListener("click", function(event){
            expandBio(event, true)
          })
        }
        for (i=0;i<closeBtns.length;i++) {
          closeBtns[i].addEventListener("click", function(event){
            expandBio(event, false)
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
