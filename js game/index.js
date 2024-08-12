const body = document.getElementsByTagName("body")[0];
const board = document.getElementById("board");
body.appendChild(board);

for (let i = 0; i < 9; i++) {
  let pipe = document.createElement("div");
  board.appendChild(pipe);
  pipe.style.width = "250px";
  pipe.style.height = "250px";
  pipe.style.backgroundImage = "url('image copy.png')";
  pipe.style.backgroundSize = "cover";
  pipe.style.display = "flex";
  pipe.style.justifyContent = "center";
  pipe.style.alignItems = "start";
  pipe.id = i.toString();
}
let mole = document.createElement("button");
mole.style.backgroundImage = "url('image copy 2.png')";
mole.style.backgroundSize = "cover";
mole.style.backgroundColor = "inherit";
mole.style.border = "none";
mole.style.width = "150px";
mole.style.height = "150px";
document.getElementById(Math.floor(Math.random() * 9)).appendChild(mole);

let monster = document.createElement("button");
monster.style.backgroundImage = "url('image copy 3.png')";
monster.style.backgroundSize = "cover";
monster.style.backgroundColor = "inherit";
monster.style.border = "none";
monster.style.width = "150px";
monster.style.height = "125px";
document.getElementById(Math.floor(Math.random() * 9)).appendChild(monster);

const score = document.getElementById("score");
let result = 0;
let randomNumb = randomNum();
setInterval(function () {
  randomNumb = randomNum();
}, 900);
int = setInterval(Monster, 900);
interval = setInterval(Mole, 900);

function randomNum() {
  let sum = Math.floor(Math.random() * 9);
  return sum.toString();
}

function Mole() {
  document.getElementById(randomNumb).appendChild(mole);
}
function Monster() {
  document.getElementById(randomNumb).appendChild(monster);
  let randomTile = randomNum();
  if (randomTile === randomNumb) {
    if (randomTile + 1 > 8) {
      document.getElementById(randomTile - 1).appendChild(monster);
    } else if (randomTile == 0) {
      document.getElementById(randomTile + 1).appendChild(monster);
      document.getElementById(randomTile + 1).appendChild(monster);
    }
  } else {
    document.getElementById(randomTile).appendChild(monster);
  }
}
function Point() {
  result += 10;
  score.innerHTML = result;
}
function gameover() {
  score.innerHTML = `Game Over : ${result}`;
  clearInterval(int);
  clearInterval(interval);
  result = 0;
  mole.onclick = 0;
  x;
}
mole.onclick = Point;
monster.onclick = gameover;
