document.addEventListener('DOMContentLoaded', function() {
  shuffleImages()
});

function shuffleImages() {
  let photoArray = ["assets/photos/ayaanapres.jpg", "assets/photos/bwm.jpg", "assets/photos/doctor.jpg", "assets/photos/doula.jpg", "assets/photos/3gens.jpg"]
  let main = document.querySelectorAll(".main")[0];
  let index = 0;
  const loop = setInterval(() => {
    if (index === photoArray.length - 1) {
      index = 0;
    }
    main.style.backgroundImage = `url("${photoArray[index]}")`;
    index++;
  }, 2550);

}
