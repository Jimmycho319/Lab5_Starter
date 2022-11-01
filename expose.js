const air_horn = document.getElementById(".air-horn")
const car_horn = document.getElementById(".car-horn")
const party_horn = document.getElementById(".party-horn")


const horn_selector = document.getElementById(".horn-select")
const image_selector = document.getElementById(".image")

image_selector.src = "assets/images/air-horn.svg"

horn_selector.addEventListener("change", (e) => {
    console.log("air")
    if (e.target.value == "air-horn") {
        e.img.src = "assets/images/air-horn.svg"
    }
})


air_horn.addEventListener("click", e => {
    console.log(e)
})


function changeImage(a) {
    document.getElementById("img").src = a
}

