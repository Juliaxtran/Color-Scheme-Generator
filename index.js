const colorInput = document.getElementById("color");
const modeInput = document.getElementById("mode");
const url = "https://www.thecolorapi.com"
const colorTwo = document.querySelector(".color-two");

const getColor = () => {
  // this works but
  fetch(`${url}/scheme?hex=00000&mode=monochrome&count=5`)
  // this doesn't work don't know why :(
  // fetch(`${url}/scheme?hex=${color}&mode=${mode}&count=5`)
    .then(res => res.json())
    .then(data => {
      console.log(data.colors);
      console.log(data.colors[0].hex.value);
      colorTwo.style.backgroundColor = `${data.colors[0].hex.value}`;
    })
}




document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const color = colorInput.value.substring(1);
  console.log(color);
  const mode = modeInput.value;
  console.log(mode);
  getColor();
})




    // fetch(`${url}/scheme?hex=00000&mode=monochrome&count=5`)