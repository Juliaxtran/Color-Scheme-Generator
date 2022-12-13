const colorInput = document.getElementsByClassName("color");
const modeInput = document.getElementsByClassName("mode");

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const color = colorInput.value;
  console.log('color: ', color);
  const options = modeInput.value;
  console.log('options: ', options);
})