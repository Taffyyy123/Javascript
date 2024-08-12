//    2.
// let a = prompt("a taliig oruul");
// let b = prompt("b taliig oruul");
// let c = prompt("c taliig oruul");
// console.log(Number(a) + Number(b) + Number(c));
//   3.
// let C = prompt("C ee oruul");
// console.log(Number(C) * 1.8 + 32);
//   4.
// let cm = prompt(" cm oruul");
// console.log(Number(cm) / 2.54);
// 5.
// let i =
//   "Hello i am Tsolmon. \nI am 16 years old. \n    This is the new line with tab and some \\backslashes\\.";
// console.log(i);
//   .6
//   let i = prompt("1dh utga oruul");
//   let b = prompt("2dh utga orul");
//   if (i.length > b.length) {
//     console.log(alert(i));
//   } else if (i.length < b.length) {
//     console.log(alert(b));
//   } else {
//     console.log(alert("same"));
//   }
//   8;
//   for (let i = 1; i <= 10; i++) {
//     console.log(i);
//   }
//   9.
//   for (let i = 15; i >= 3; i--) {   
//     console.log(i);
//   }
//   .10
//   let num = 27500;
//   if (num >= 5000 && num <= 30000) {
//     num = num * 1.15;
//     alert(num);
//   } else {
//     num = num * 1.2;
//     alert(num);
//   }


// let num = 3;
// let result = ""
// for (let j = 0; j < num; j++) {
//     for (let i = 0; i < num; i++) {
//         if (j % 2 === 0) {    
//             if( i % 2 === 0) {
//             result += "_"
//         } else{
//             result += "#"
//         }
//     } else {
//         if (i % 2 === 0) {  
//             result += "#";
//         } else {
//             result += "_";
//         } 
//    }
// }
//   result += "\n"
// }
// console.log(result);


// let pyramid = ""
// for(pyramid.length = 0; pyramid.length <= 7; pyramid += "*"){
//     console.log(pyramid);
//  } 
// for (let i = 0; i < 7; i++) {
//     let pyramid = ""

//     if( i % 2 == 0){
//     for (let j = 0; j < 7 - i ; j++) {
//         pyramid += "";
//     }
//     for (let j = 0; j < i + 1; j++) {
//         pyramid += "*"
//     }
//     } else { 
//     } 
//     for(let j = 0; j < 7; j--){
//         let a = "a"
//         if( j )
//         for (let j = 0; j < 7 - i ; j--) {
//             pyramid += "";
//         }
//         for (let j = 0; j < i + 1; j--) {
//             pyramid += "*"
//         }
//     }
//     console.log(pyramid);

// let studentAges = [10, 20, 15, 19, 18, 19, 19];
// let sum = 0
// for( let i = 0; i < studentAges.length; i++) {
//     sum += studentAges[i];
// }
// let avarage = sum /studentAges.length;
// console.log(avarage)

// let userBalance = [ 1000, 2000, 2500, 4000000, 13054, 323425 ];
// for ( i = 0; i < userBalance.length; i++) {
//     userBalance[i] += userBalance[i] * 1.15;
// }  
//   console.log(userBalance) 
// 1.
// let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
// 1.
// console.log(itCompanies)
// 2
// console.log(itCompanies.length)
// 3
// for(let i = 0; i < itCompanies.length; i++){
//     if( i % 3 === 0) {
//         console.log(itCompanies[i])
//     } else{
//     }
// }
// 4
// for( let i = 0; i < itCompanies.length; i++){
//     console.log(itCompanies[i])
// }
// 5
// for(let i = 0; i < itCompanies.length; i++){
//     itCompanies = 
//     console.log(itCompanies)
// }


// 2.
// let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
// // 1
// console.log(itCompanies.slice(0, 3));
// 2   
// console.log(itCompanies.slice(4, 7))
// 3
// console.log(itCompanies.slice( 1, 7))
// 4
// console.log(itCompanies.slice(0, 6)) 


// 3.
// let data = ['Засгийн', 'газарт', '6.4', 'сая', 'тонн', 'Нүүрс', 'алдагдсан', 'гэх', 'мэдээлэл', 'ирээгүй', 'байна.', 'Бодит', 'байдалд', 'ийм', 'их', 'хэмжээний', 'нүүрс', 'алдагдсан', 'гэх', 'асуудал', 'эргэлзээтэй', 'байна.', 'Хууль', 'хяналтын', 'байгууллага', 'хяналт', 'шалгалтын', 'ажил', 'явуулж', 'байна'];
// let searching = 'Нүүрс';
// let search = 'нүүрс'
// let result = 0
// for(let i = 0; i < data.length; i++){
//     if (data[i] == searching){
//         result += 1
//     }
//     else if (data[i] == search){
//         result += 1
//     }
// }
// console.log(result)
// 4.
// let arrayOfNumbers = [43, 56, 23, 89, 88, 90, 99, 65, 15, 29, 11]


// let result = 0
// for( let i = 0; i < arrayOfNumbers.length; i++){
//     result += arrayOfNumbers[i]
// }
// console.log(result)

//     arrayOfNumbers.sort();
//     console.log(arrayOfNumbers[10])

// arrayOfNumbers.sort();
// console.log(arrayOfNumbers[0])

// arrayOfNumbers.splice(0, 0, 10)
// console.log(arrayOfNumbers)

// arrayOfNumbers.splice(11, 11, 33)
// console.log(arrayOfNumbers)

// 5.
// let arr1 = [3, 45, 23, 78, 34,];
// let arr2 = [4, 2, 34, 4, 12];
// let result = []
// for(let i = 0; i < arr2.length; i++){
//     const multipledNumber = arr1[i] * arr2[i];
//     result.push(multipledNumber)
// }
// console.log(result)

// 6.
// let arrayvalues = [5, 6, 4, 12, 19, 121, 1, 7, 9, 63] 
// let tegsh = 0
// let sondgoi = 0
// for(let i = 0; i < arrayvalues.length; i++){
//     if(arrayvalues[i] % 2 == 0){
//         tegsh += 1
//     }
//     else{
//         sondgoi += 1
//     }
// }
// console.log(sondgoi)

// 7.
// let arrnum = [4, 2, 34, 4, 1, 12, 1, 4]
// let result = []
// for(let i = 0; i < arrnum.length; i++){
//     for(let j = 0; j < arrnum.length; j++){
//         if(arrnum[i] === arrnum[j]){
//             result = arrnum[i]
//         }
//     }
// }
// console.log(result)


// 1.
// function fullname(Lastname, Firstname) {
//     console.log(Lastname, Firstname)
// }
// let Firstname = "Oyunsuren"
// let Lastname = "Purevsuren"

// fullname(Lastname, Firstname)

// 2.
// function fullname(Firstname, Lastname){
//     return Firstname + Lastname;
// }

// let Firstname = prompt("Enter the Firstname")
// let Lastname = prompt("Enter the Lastname")

// let Fullname = fullname(Firstname, Lastname);

// console.log(Fullname)

// 3.
// Declare a function  and it takes two parameters and it returns sum.(Гаднаас 2 утга буюу параметр авч нийлбэрийг нь буцаадаг функц бичнэ үү .

// function sum(a, b){
//     return a + b;

// }
// let a = prompt("enter the number1")
// let b = prompt("enter the number2")

// let result = sum(Number(a),Number(b));

//     console.log(result)

// 4.
// Гаднаас 2 тоо авч , авсан тоонуудын хоорондох тэгш тоонуудын array буцаадаг функц бич.
// function sum(a, b){
//     const result = [];
//     for(let i = a; i < b; i++){
//         if( i % 2 === 0){
//             result.push(i)
//         }
//     }
//     return result;
// }
// const tegshtoo = sum(1, 7)
// console.log(tegshtoo)

// 5.
// Гаднаас 2 тоо авч , авсан тоонуудын хоорондох сондгой тоонуудын array буцаадаг функц бич. (example : returnEvenNumbers(1 , 7) - [ 3, 5 ])
// function sum (a, b) {
//     const result = [];
//     for(let i = a; i < b; i++){
//         if(i % 2 === 1){
//             result.push(i)
//         }
//     }
//     return result;
// }
// const sondgoitoo = sum(1, 7);
// console.log(sondgoitoo)

// 6.
// Өгөгдсөн array -аас өгөгдсөн тоо байгаа эсэхийг олох функц бич. 
// Тухайн тоо байвал индексийг буцаана. Байхгүй бол -1 буцаана. (array өөрсдөө үүсгээрэй , гаднаас өгөх тоог prompt-оор авна)


// const arr = [1, 2, 3, 4, 5]
// let lf = prompt("enter the number")

// function sum(num, array){
// for(let i = 0; i < arr.length; i++){
//     if(Number(lf) == arr[i] ){
//         return arr.indexOf(arr[i]); 
//     } else if(!array.includes(num)){
//         return -1
//     }
//   }
// }
// const result = sum(Number(lf), arr)
// console.log(result)

// 7.
// const arr = [1, 2, 3, 4, 5, ]
// function findAvarage(array){
//     let avarage = 0;
//     let sum = 0;
//     for(let i = 0; i < array.length; i++){
//     sum += array[i]
//     avarage = sum / array.length
//     }
//     return avarage;
// } 
// const avarage = findAvarage(arr)
// console.log(avarage)

// 8.
// let str = "Hello world"
// function toUpperCase(string){
//     let sum = "";
//     for(let i = 0; i < string.length; i++){
//         sum = string.toUpperCase();
//     }
//     return sum
// }
// const sum = toUpperCase(str)
// console.log(sum)

// 9.
// let str = "HELLO World"
// function toLowerCase(string){
//     let sum = "";
//     for(let i = 0; i < string.length; i++){
//         sum = string.toLowerCase();
//     }
//     return sum
// }
// const sum = toLowerCase(str)
// console.log(sum)

// 10.
// let arr = [4, 32, 2, 5, 8, -10, 20, 1, 0, -20]
// function erembleh(srt){
//     let sum = [];
//     for(let i = 0; i < srt.length; i++ ){
//         sum += srt[i].sort()
//     }
//     return sum;
// }
// const sum = erembleh(arr);
// console.log(sum)

// let arr = [3, 6, -1, -5, 2,]
// let teg = 0;
// function toClosezero(num){
//     let sum = [];
//     for(let i = 0; i < num.length; i++){
//         num.sort();
//         sum.push(num[i]);
//     }
//     return sum;
// }
// const sum = toClosezero(arr);
// console.log(sum);

// document.getElementsByTagName("h1") [0].innerHTML = "tag name";
// document.getElementsByClassName("hii") [0].innerHTML = "Class"
// document.getElementById("Hii").innerHTML = "id"



// const newElement = document.createElement("h1");
// const newtext = document.createTextNode("hii");
// newElement.appendChild(newtext);
// const body = document.getElementsByTagName("body")[0];
// body.appendChild(newElement);
 
// const addImage = document.createElement("img");
// addImage.src = "image.png"
// body.appendChild(addImage);

//     const body = document.getElementsByTagName("body")[0];
//     const colors = ["red", "yellow", "blue", "green"];
// for(let i = 0; i < 4; i++){
//     const Box = document.createElement("div");
//     body.appendChild(Box);
//     Box.style.backgroundColor = colors[i];
//     Box.style.width = "200px"
//     Box.style.height = "200px"
// }

//     body.style.display = "flex";
//     body.style.justifyContent = "center";
//     body.style.alignItems = "center";
//     body.style.gap = "20px"
//     body.style.height = "100vh"

// const body = document.getElementsByTagName("body")[0];
// const button = document.createElement("button");
// const text2 = document.createTextNode("button");
// button.appendChild(text2);
// body.appendChild(button);
// button.style.width = "200px"
// button.style.height = "80px"
// button.style.backgroundColor = "gray"
// body.style.display = "flex"
// body.style.flexDirection = "column"
// body.style.alignItems = "center"
// button.style.border = "0.5px solid gray"
// button.style.borderRadius = "50px"
// function test() {
//     const newElement = document.createElement("h1")
//     const text = prompt("type something")
//     newElement.innerHTML = text;  
//     body.appendChild(newElement)
//     if(text === ""){
//        alert("ymaa bicee hu");
//     }
// }
// button.onclick = test;

// const body = document.getElementsByTagName("body")[0];
// const input = document.getElementById("input");
// body.appendChild(input);
// function log() {
//     console.log(input.value)
// }
// input.onchange = log;\

const body = document.getElementsByTagName("body")[0];
const input1 = document.createElement("input")
const ops = document.createElement("select");
const operators = ["+", "-", "*", "/", "%"]
const sum = "";
for(let i = 0; i < operators.length; i++){
    const sum = document.createElement("option");
    const sum2 = document.createTextNode(operators[i]);
    sum.appendChild(sum2);
    ops.appendChild(sum)
}
const input2 = document.createElement("input");
const button = document.createElement("button")
const text2 = document.createTextNode("=")
button.appendChild(text2)
const result = document.createElement("input")
body.appendChild(input1);
body.appendChild(ops);
body.appendChild(input2);
body.appendChild(button);
body.appendChild(result)
body.style.display = "flex"
body.style.gap = "30px"
body.style.alignItems = "center"
body.style.justifyContent = "center"
body.style.width = "100vw"
body.style.height = "100vh"
body.style.backgroundImage = "url('image copy.png')";
body.style.backgroundRepeat = "no-repeat"
body.style.backgroundSize = "cover"
body.style.backgroundPosition = "center"
input1.style.width = "300px"
input1.style.height = "50px"
input1.style.fontSize = "40px"
input2.style.width = "300px"
input2.style.height = "50px"
input2.style.fontSize = "40px"
result.style.width = "300px"
result.style.height = "50px"
result.style.fontSize = "40px"
button.style.width = "100px"
button.style.height = "30px"
ops.style.width = "50px"
ops.style.height = "30px"
ops.style.fontSize = "20px"
function calculator(){
    if(ops[0].selected){
    result.value = Number(input1.value) + Number(input2.value);
    } else if(ops[1].selected){
        result.value = Number(input1.value) - Number(input2.value);
    } else if(ops[2].selected){
        result.value = Number(input1.value) * Number(input2.value);
    } else if(ops[3].selected){
        result.value = (Number(input1.value) / Number(input2.value)).toFixed(2);
    } else if(ops[4].selected){
        result.value = (( Number(input2.value) * 100) / Number(input1.value)).toFixed(2) + "%"
    }
}
button.onclick = calculator;