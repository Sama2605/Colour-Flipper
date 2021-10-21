const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const randomNumber = getRandomNumber();
/*
function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

btn.addEventListener("click", function () {
    //get random number between 0-3
    let randomN = getRandomNumber(4);
    document.body.style.backgroundColor = colors[randomN];
    color.textContent = colors[randomN];
    color.style.color = colors[randomN];
});
*/

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}

btn.addEventListener("click", function () {
  //get random number between 0-3
  const randomNumber = getRandomNumber();
  console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});
