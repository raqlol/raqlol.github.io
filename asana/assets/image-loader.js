let dogBios;
function createBio(array) {
    const dogGallery = document.getElementById("dog-gallery");

    for (i=0;i<array.length;i++){
      let container = document.createElement("div");
      container.classList.add("dog-thumbnail");
      let img = document.createElement("IMG");
      img.src= array[i].image

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

// image filter

// image expander

// random wiggle

//lazy load
