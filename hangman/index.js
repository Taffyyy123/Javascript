const body = document.getElementsByTagName("body")[0];
const alphabet = document.getElementById("alphabet");
const underline = document.getElementsByClassName("randomWord");
let selectedLetters = document.getElementById("selectedLetters");
const categories = [
  "monkey",
  "elephant",
  "horse",
  "panda",
  "giraffe",
  "crocodile",
];
const randomWord = categories[Math.floor(Math.random() * categories.length)];
for (let i = 0; i < randomWord.length; i++) {
  const replacement = document.createElement("div");
  replacement.innerHTML = "__";
  replacement.className = randomWord[i];
  replacement.className = "randomWord";
  selectedLetters.appendChild(replacement);
}

let letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let lives = document.createElement("div");
lives.className = "lives";
let result = 10;
lives.innerHTML = `You Have ${result} lives`;
body.appendChild(lives);

function gameOver() {
  lives.innerHTML = `Game Over Word was: ${randomWord}`;
}

for (let i = 0; i < letters.length; i++) {
  const container = document.createElement("button");
  container.innerHTML = letters[i];
  container.className = "letters-container";
  container.addEventListener("click", function () {
    container.style.pointerEvents = "none";
    container.style.opacity = "0.5";
    const clickedcontainer = document.createElement("div");
    clickedcontainer.innerHTML = letters[i];
    clickedcontainer.className = "letters-container";
    if (randomWord.includes(letters[i]) == true) {
      for (let j = 0; j < randomWord.length; j++) {
        if (randomWord[j] === letters[i]) {
          underline[j].innerHTML = letters[i];
        }
      }
    } else {
      result--;
      lives.innerHTML = `You Have ${result} lives`;
      body.appendChild(lives);
    }
    setInterval(complete(), 100);
    setInterval(gameOver(), 100);
  });
  alphabet.appendChild(container);
}
function complete() {
  let completed = "";
  for (let i = 0; i < randomWord.length; i++) {
    const letter = document.getElementById("selectedLetters").childNodes[i];
    completed += letter.innerHTML;
  }
  if (completed == randomWord) {
    document.getElementsByClassName("lives");
    lives.innerHTML = "You Won!";
    playAgain();
  }
}
function gameOver() {
  if (result <= 0) {
    document.getElementsByClassName("lives");
    lives.innerHTML = `Game Over!`;
  }
}
function playAgain() {
  const button = document.createElement("button");
  button.innerHTML = "enter the here play again";
  document.body.appendChild(button);
  button.onclick = refresh();
}
function refresh() {
  location.reload();
}
