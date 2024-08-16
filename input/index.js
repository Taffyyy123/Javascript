const Email = document.getElementById("Email");
Email.innerHTML = "Email";
const Password = document.getElementById("Password");
const phonenumber = document.getElementById("Number");
const button = document.getElementById("button");
const too = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const alphabet = "abcdefghijklmnopqrstuvwxyz";

function isValidEmail() {
  const email = Email.value;
  if (email.includes("@") === false) {
    alert("@ bhgu bn");
  }
}

function isValidPhoneNumber() {
  const number = phonenumber.value;
  if (number.length < 8) {
    alert("8 oron hurehgu bn");
  }

  for (let i = 0; i < number.length; i++) {
    if (number.includes(alphabet[i])) {
      alert("invalid phone number");
      break;
    }
  }
}

function isValidPassword() {
  const password = Password.value;
  if (password.length < 8) {
    alert("8 oron hurehgu bn");
  }
  for (let i = 0; i < number.length; i++) {
    if (number.includes(alphabet[i])) {
      alert("invalid phone number");
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
button.addEventListener("click", function () {
  isValidEmail();
  isValidPhoneNumber();
});
