const sliderValue = document.getElementById("slider");
const sliderLength = document.getElementById("data-length");

const passdisplay = document.getElementById("display");

const copyBtn = document.getElementById("copyBtn");
var cpyDisplay = document.getElementById("copyMsg");

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


sliderValue.addEventListener('input', (e) => {
    console.log("executing sliderValue event listener")
    passwordlength = e.target.value;
    handleSlider();
});

function handleSlider() {
    console.log("executing handleSlider")
    sliderLength.textContent = passwordlength;
    sliderValue.value = passwordlength;
}

function setIndicator() {
    console.log("executing setIndicator")
    if (passwordlength < 8) {
        indicator.style.backgroundColor = "red";
    }
    else if (checkCount == 0) {
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

function getRndInteger(min, max) {
    console.log("executing getRndInteger");
    return Math.floor(Math.random() * (max - min) + min);
}

function generateNumber() {
    console.log("executing generateNumber")
    return getRndInteger(0, 9);
}

function generateLowerCase() {
    console.log("executing generateLowerCase")
    return String.fromCharCode(getRndInteger(97, 123));
}

function generateUpperCase() {
    console.log("executing generateUpperCase")
    return String.fromCharCode(getRndInteger(65, 91));
}

function generateSymbol() {
    console.log("executing generateSymbol")
    return String.fromCharCode(getRndInteger(33, 48));
}

function calcStrength() {
    console.log("executing calcStrength")
    if (!uppercase.checked || !lowercase.checked || !numbers.checked || !symbols.checked) {
        checkCount = 0;
    }
    if (uppercase.checked) {
        checkCount++;
    }
    if (lowercase.checked) {
        checkCount++;
    }
    if (numbers.checked) {
        checkCount++;
    }
    if (symbols.checked) {
        checkCount++;
    }
    setIndicator();
}

all.forEach(checkbox => {
    checkbox.addEventListener('click', () => {
        console.log("executing all event listener");
        calcStrength();
    });
});


copyBtn.addEventListener('click', () => {
    console.log("executing copyBtn event listener")
    if (passdisplay.value != "") {
        copyContent();
    }
});

async function copyContent() {
    console.log("executing copyContent")
    try {
        await navigator.clipboard.writeText(passdisplay.value);
        cpyDisplay.innerHTML = "Copied!";
    }
    catch {
        cpyDisplay.innerHTML = "Failed!";
    }
    cpyDisplay.style.display = "block";
    setTimeout(() => {
        cpyDisplay.style.display = "none";
    }, 2000);
}


generate.addEventListener('click', () => {
    console.log("executing generate event listener")
    if(checkCount > passwordlength){
        alert("Password length is too short");
    }
    while (password.length < passwordlength) {
        if(!uppercase.checked && !lowercase.checked && !numbers.checked && !symbols.checked){
            alert("Please select atleast one option");
            break;
        }
        if (uppercase.checked && password.length < passwordlength) {
            password += generateUpperCase();
        }
        if (lowercase.checked && password.length < passwordlength) {
            password += generateLowerCase();
        }
        if (numbers.checked && password.length < passwordlength) {
            password += generateNumber();
        }
        if (symbols.checked && password.length < passwordlength) {
            password += generateSymbol();
        }
    }
    console.log("displaying password....")
    password = password.slice(0, passwordlength);
    passdisplay.value = password;
});

