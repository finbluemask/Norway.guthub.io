



const counter = document.getElementById("counter");
const mini = document.getElementById("mini");
const containerLevels = document.getElementById("contai-levels");

const levels = document.getElementById("levels");
const exit = document.getElementById("exit");








const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const fourth = document.getElementById("fourth");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const ten = document.getElementById("ten");





let number = 0;


mini.addEventListener("click", function() {


    const audio = new Audio("./fx-a-variation-of-the-iconic-tiktok-boom-bling-sound-effect-247786.mp3");
    audio.currentTime = 0;
    audio.play();
    number++;
    counter.textContent = number;

    if(number === 10) {
      
        first.style.textDecoration = "line-through";
    }else if(number === 20) {
        second.style.textDecoration = "line-through";
      } else if(number === 30) {
        third.style.textDecoration = "line-through";
      } else if(number === 40) {
        fourth.style.textDecoration = "line-through";
      } else if(number === 50) {
        five.style.textDecoration = "line-through";
      } else if(number === 60) {
        six.style.textDecoration = "line-through";
      } else if(number ===70) {
        seven.style.textDecoration = "line-through";
      } else if(number === 80) {
        eight.style.textDecoration = "line-through";
      } else if(number === 90) {
        nine.style.textDecoration = "line-through";
      } else if(number === 100) {
        ten.style.textDecoration = "line-through";
      }
});


levels.addEventListener("click", function() {
    containerLevels.style.display = "flex";
    containerLevels.style.flexDirection = "column";
    containerLevels.style.justifyContent = "center";
    containerLevels.style.alignItems = "center";
    containerLevels.style.gap = "20px";
});


exit.addEventListener("click", function() {
    containerLevels.style.display = "none";
});