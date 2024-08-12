const body = document.getElementsByTagName("body")[0];
const alphabet = document.getElementById("alphabet");
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
let selectedLetters = document.getElementById("selectedLetters");

let lives = document.createElement("div");
lives.className = "lives";
let result = 10;
lives.innerHTML = `You Have ${result} lives`;
body.appendChild(lives);

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
    for (let j = 0; j < randomWord.length; j++) {
      if (randomWord[j].includes(letters[i])) {
        for (
          let n = 0;
          n < document.getElementsByClassName(randomWord[j]).length;
          n++
        ) {
          document.getElementsByClassName(randomWord[j])[n].innerHTML =
            randomWord[j];
        }
      } else {
        if (result < 1) {
          lives.innerHTML = `Game Over Word was: ${randomWord}`;
        } else {
          result - 1;
        }
      }
    }
  });
  alphabet.appendChild(container);
}

const randomWord = "fanta";
for (let i = 0; i < randomWord.length; i++) {
  const replacement = document.createElement("div");
  replacement.className = randomWord[i];
  replacement.id = "randomWord";
  selectedLetters.appendChild(replacement);
}
