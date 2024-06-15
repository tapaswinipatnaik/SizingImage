let imageElement = document.getElementById("image");
let imageWidthElement = document.getElementById("imageWidth");
let warningMessageElement = document.getElementById("warningMessage");
let imageMax = 300;
let imageMin = 100;
let d1 = 200;

imageElement.style.width = d1 + "px";

function onIncrement() {
    if (d1 >= imageMax) {
        warningMessageElement.textContent = "Too big.Dectease the size of the Image.";
    } else {
        d1 = d1 + 5;
        let u1 = d1 + "px";
        warningMessageElement.textContent = "";
        imageElement.style.width = u1;
        imageWidthElement.textContent = u1;
    }
}

function onDecrement() {
    if (d1 <= imageMin) {
        warningMessageElement.textContent = "Can't visible.Increase the size of the Image";
    } else {
        d1 = d1 - 5;
        let u1 = d1 + "px";
        warningMessageElement.textContent = "";
        imageElement.style.width = u1;
        imageWidthElement.textContent = u1;
    }
}
