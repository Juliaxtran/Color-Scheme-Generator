const colorInput = document.getElementById("color");
const modeInput = document.getElementById("mode");
const url = "https://www.thecolorapi.com"




document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const color = colorInput.value.substring(1);
  console.log('color: ', color);
  const mode = modeInput.value;
  console.log('options: ', mode);
  getColor();
})

const getColor = () => {
  fetch(`${url}/scheme?hex=${color}&mode=${mode}&count=5`)
  .then(res => res.json())
  .then(data => {
    console.log(data);
  })
  .catch(err => console.log(err));
  }

    // fetch(`${url}/scheme?hex=00000&mode=monochrome&count=5`)