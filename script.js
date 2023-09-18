var sliderValue = document.getElementById("slider").value;
var sliderLength = document.getElementById("data-length");

const passdisplay = document.getElementById("display");


const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

const indicator = document.querySelector("[data-indidcator]");


const generate = document.querySelector("#generate");


const all = document.querySelectorAll("input[type=checkbox]");

let password = "";
let passwordlength = 8;
let checkCount = 0;
handleSlider();

function handleSlider() {
    sliderValue = passwordlength;
    sliderLength.textContent = sliderValue;
    passwordlength = sliderValue;
}

function setIndicator() {
    if (checkCount == 0) {
        indicator.style.backgroundColor = "red";
    }
    else if (checkCount == 1) {
        indicator.style.backgroundColor = "red";
    }
    else if (checkCount == 2) {
        indicator.style.backgroundColor = "orange";
    }
    else if (checkCount == 3) {
        indicator.style.backgroundColor = "yellow";
    }
    else {
        indicator.style.backgroundColor = "white";
    }
}

function getRndInteger(min,max) {
    Math.floor(Math.random() * (max - min)+min);
}