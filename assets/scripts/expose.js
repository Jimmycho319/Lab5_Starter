// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const jsConfetti = new JSConfetti()

  const air_horn = document.getElementById("air-horn")
  const car_horn = document.getElementById("car-horn")
  const party_horn = document.getElementById("party-horn")
  const horn_selector = document.getElementById("horn-select")
  const image = document.getElementById("expose").querySelector("img")
  const audio = document.querySelector(".hidden")
  const button = document.querySelector('button')
  const vol = document.getElementById('volume')
  const vol_control = document.getElementById('volume-controls')
  const vol_image = document.getElementById('volume-controls').querySelector('img')
  var sentinel = 0


  //image_selector.src = "assets/images/air-horn.svg"


  horn_selector.addEventListener('change', function() {
    if (this.value == "air-horn") {
      image.src = "assets/images/air-horn.svg"
      audio.src = "assets/audio/air-horn.mp3"
      sentinel = 0
    }

    if (this.value == "car-horn") {
      image.src = "assets/images/car-horn.svg"
      audio.src = "assets/audio/car-horn.mp3"
      sentinel = 0
    }

    if (this.value == "party-horn") {
      image.src = "assets/images/party-horn.svg"
      audio.src = "assets/audio/party-horn.mp3"
      sentinel = 1
    }
    
    
  })

  button.addEventListener('click', function() {
    //play the song
    if (sentinel == 1) {
      //confetti
      jsConfetti.addConfetti()
    }
    audio.play()
  })



  vol.addEventListener('input', function() {
    audio.volume = (vol.value)/100
    if (vol.value == 0) {
      vol_image.src = "assets/icons/volume-level-0.svg"
    }
    else if (vol.value < 33) {
      vol_image.src = "assets/icons/volume-level-1.svg"
    }
    else if (vol.value < 67) {
      vol_image.src = "assets/icons/volume-level-2.svg"
    }
    else if (vol.value < 101) {
      vol_image.src = "assets/icons/volume-level-3.svg"
    }
  })


}