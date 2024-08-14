const Email = document.getElementById("Email");
Email.innerHTML = "Email";
const Password = document.getElementById("Password");
const phonenumber = document.getElementById("Number");
const button = document.getElementById("button");
// const too = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// const useg = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
// ];

function isValidEmail() {
  const email = Email.value;
  if (email.includes("@") === false) {
    alert("@ bhgu bn");
  }
}

function isValidPhoneNumber() {
  const number = phonenumber.value;
  if(Number(number).includes())
}
// function isValidPassword() {
//   const password = Password.value;
//   if (password.length < 8) {
//     alert("8 oron hurehgu bn");
//   }
//   Num();
//   letter();
// }

// function Num() {
//   const password = Password.value;
//   for (let i = 0; i < password.length; i++) {
//     if (password[i].includes(Number) === false) {
//       alert("too nem");
//     }
//   }
// }
// function letter() {
//   const password = Password.value;
//   for (let j = 0; j < password.length; j++) {
//     if (password[j].includes(String) === false) {
//       alert("useg nem");
//     }
//   }
// }

console.log(isValidPassword);
button.addEventListener("click", function () {
  isValidEmail();
  isValidPassword();
});
