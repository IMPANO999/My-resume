// Vanilla javascripts

const myName = document.getElementById("name");
const myColors = ["red", "blue", "violet", "green"];
let index = 0;

function changeColor() {
  if (index === 4) {
    index = 0;
  } else {
    myName.style.color = myColors[index];
    index = index + 1;
  }
}

myName.addEventListener("click", changeColor);
