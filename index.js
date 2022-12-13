const colorInput = document.getElementById("color");
const modeInput = document.getElementById("mode");
const url = "https://www.thecolorapi.com"
const colorOne = document.querySelector(".color-one");
const colorTwo = document.querySelector(".color-two");
const colorThree = document.querySelector(".color-three");
const colorFour = document.querySelector(".color-four");
const colorFive = document.querySelector(".color-five");
const hexOne = document.querySelector(".hex-one");
const hexTwo = document.querySelector(".hex-two");
const hexThree = document.querySelector(".hex-three");
const hexFour = document.querySelector(".hex-four");
const hexFive = document.querySelector(".hex-five");
const colors = document.querySelectorAll("div.color");


const getColor = () => {
  fetch(`${url}/scheme?hex=${colorInput.value.substring(1)}&mode=${modeInput.value}&count=5`)
    .then(res => res.json())
    .then(data => {

      colorOne.style.backgroundColor = `${data.colors[0].hex.value}`;
      hexOne.innerText = `${data.colors[0].hex.value}`;
      colorTwo.style.backgroundColor = `${data.colors[1].hex.value}`;
      hexTwo.innerText = `${data.colors[1].hex.value}`;
      colorThree.style.backgroundColor = `${data.colors[2].hex.value}`;
      hexThree.innerText = `${data.colors[2].hex.value}`;
      colorFour.style.backgroundColor = `${data.colors[3].hex.value}`;
      hexFour.innerText = `${data.colors[3].hex.value}`;
      colorFive.style.backgroundColor = `${data.colors[4].hex.value}`;
      hexFive.innerText = `${data.colors[4].hex.value}`;
    })
}

const rgbToHex = (r, g, b) => {
  r = Math.max(0, Math.min(255, Math.floor(r)));
  g = Math.max(0, Math.min(255, Math.floor(g)));
  b = Math.max(0, Math.min(255, Math.floor(b)));

  r = r.toString(16).padStart(2, "0");
  g = g.toString(16).padStart(2, "0");
  b = b.toString(16).padStart(2, "0");

  return "#" + r + g + b;
}

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  getColor();
})


colors.forEach((color) => {
  color.addEventListener("click", () => {

    let style = window.getComputedStyle(color);
    let copyColor = style.getPropertyValue("background-color");
    navigator.clipboard.writeText(copyColor);
    const newColor = copyColor.substring(4, copyColor.length - 1)
      .replace(/ /g, '')
      .split(',');
    const hexNumber = rgbToHex(newColor[0], newColor[1], newColor[2]);
    const newHexNumber = hexNumber.toUpperCase();
    color.style.color = "white";
    color.innerText = "Copied!";
    navigator.clipboard.writeText(newHexNumber);

    setTimeout(() => {
      color.innerText = newHexNumber;
    }, 2000);

  })
})

