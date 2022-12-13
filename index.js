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


const getColor = () => {
  fetch(`${url}/scheme?hex=${colorInput.value.substring(1)}&mode=${modeInput.value}&count=5`)
    .then(res => res.json())
    .then(data => {
      // console.log(data.colors);
      // console.log(data.colors[0].hex.value);

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


document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  getColor();
})




