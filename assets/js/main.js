let myImages = document.querySelector('.my-images');
let myButton = document.querySelector('.my-effect')


function normal() {
    myImages.style.filter = "none"
}

function blackWhite() {
    myImages.style.filter = "grayscale(100%)"
}

function sepia() {
    myImages.style.filter = "sepia(1)"
}

function saturate() {
    myImages.style.filter = "saturate(8)"
}

function contrast() {
    myImages.style.filter = "contrast(4)"
}