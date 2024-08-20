const Email = document.getElementById("Email");
Email.innerHTML = "Email";
const Password = document.getElementById("Password");
const phonenumber = document.getElementById("Number");
const button = document.getElementById("button");
const too = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const alphabet = "abcdefghijklmnopqrstuvwxyz";

let result = 0;

function isValidEmail() {
  const email = Email.value;
  if (email.includes("@") === false) {
    alert("@ bhgu bn");
  } else {
    result += 1;
  }
}

function isValidPhoneNumber() {
  const number = phonenumber.value;
  if (number.length < 8) {
    alert("8 oron hurehgu bn");
    for (let i = 0; i < number.length; i++) {
      if (number.includes(alphabet[i])) {
        alert("invalid phone number");
        break;
      }
    }
  } else {
    result += 1;
  }
}

function isValidPassword() {
  const password = Password.value;
  if (password.length < 8) {
    alert("8 oron hurehgu bn");
    for (let i = 0; i < password.length; i++) {
      if (password.includes(alphabet[i]) === true) {
        if (password.includes(too[i]) === true) {
        }
      } else {
        alert("invalid password");
        break;
      }
      for (let i = 0; i < password.length; i++) {
        if (password.includes(number[i])) {
          alert("invalid phone number");
          break;
        }
      }
    }
  }
}
// function isValidPass() {
//   const password = password.value;
//   if (password.length < 8) {
//     alert("Password is Too Short");
//   } else {
//     alert("Password Perfect");
//     isGood += 1;
//   }
//   if (password.includes(alphabet)) {
//     alert("Please add more symbols and letters.");
//   }
//   itBig(isPassValid);
//   if (isItTrue == false) {
//     alert("Add a UpperCase Letter");
//   }
// }
function isValidPassword() {
  const password = Password.value;
  if (password.length < 8) {
    alert("too_short");
    return "too_short";
  } else if (password.search(/\d/) == -1) {
    alert("nothing number");
    return "no_num";
  } else if (password.search(/[a-zA-Z]/) == -1) {
    alert("nothing letter");
    return "no_letter";
  } else if (
    password.search(/[^a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+\.\,\;\:]/) != -1
  ) {
    alert("nothing mark");
    return "bad_char";
  }
  result += 1;
}
button.addEventListener("click", function () {
  isValidEmail();
  isValidPhoneNumber();
  isValidPassword();
  if (result >= 3) {
    window.location.href = "/javascript/todo list";
    result = 0;
  }
});
