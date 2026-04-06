//document.getElementById("greeting").innerHTML = "Hello World!";

// DOM MANIPUILATION
// document.getElementById("greeting").innerHTML = "123";
// document.getElementById("weather").innerHTML = "123";
// select this element and change the text to "123" using the DOM

//document.getElementsByClassName("product-item").innerHTML = "123"; //nothing hapens,WE NEED A loop for multiple elemtns
//document.getElementsByTagName("p").innerHTML = "123"; //nothing hapens,WE NEED A loop for multiple elemtns
//document.querySelector(".product-item").innerHTML = "123"; //only the first element with this class will be changed
//document.querySelector("p#weather").innerHTML = "123"; //only the first element with this id will be changed

//document.querySelector("p#weather").style.color = "red"; //only the first element with this id will be changed
//document.querySelector("p#weather").style.fontSize = "20px"; //only the first element with this id will be changed

// EVENTS
document.querySelector("#open-nav-menu").addEventListener("click", function () {
  document.querySelector("header nav .wrapper").classList.add("nav-open");
});

document
  .querySelector("#close-nav-menu")
  .addEventListener("click", function () {
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
  });

// VARIABLES
let customer = "Maria"; // let -> block scope variable -> available only within the block it is defined
//var customer = "Maria"; // var -> global variable -> available anywhere
const pi = 3.14; // const -> constant variable -> cannot be reassigned

// CONSOLE
console.log("Hello " + customer); // Hello Maria
console.log(`Hello ${customer}!`);

// GREETING SECTION
const greetingText = "Good morning!!";
const weatherCondition = "sunny";
const userLocation = "Athens";
let temperature = 25;
let tempUnit = "C"; // C for Celsius, F for Fahrenheit

let weatherText = `The weather is ${weatherCondition} in ${userLocation} with a temperature of ${temperature}°${tempUnit}.`;

document.querySelector("#greeting").innerHTML = greetingText;
document.querySelector("#weather").innerHTML = weatherText;

////DATATYPES
//STRINGS
//NUMBERS
//ARRAYS & OBJECTS
let array1 = [2, 4, 6, 8];
let student = {
  name: "John",
  age: 20,
}; //this is an object with two properties: name and age
student.name = "Maria"; // change the name property of the student object
student.age = 25; // change the age property of the student object
student.grade = 10; // add a new property to the student object
let student2 = {
  name: "Anna",
  age: 22,
  grade: 9,
}; //this is another object with three properties: name, age and grade

let students = [student, student2]; // this is an array of objects!
students.length; // 2

//BOOLEANS
num1 = 8;
num2 = 10; // kataxwritis
num1 == num2; // == -> equality operator -> checks if the values!!! are equal, returns true or false
num1 === num2; // === -> strict equality operator -> checks if the values && the types are equal, returns true or false

//NULL & UNDEFINED
//undefined: we never defined a value for this var
//null: we defined a value but it is empty (SEE MORE ON THIS.)

////FUNCTIONS
//no semicolons after functions, only on statements, eg celsiustofahr();
function updateWeather() {
  let weatherText = `The weather is ${weatherCondition} in ${userLocation} with a temperature of ${temperature}°${tempUnit}.`;
  document.querySelector("#weather").innerHTML = weatherText;
}

function convertToFahrenheit(celsius) {
  let fahr = ((celsius * 9) / 5 + 32).toFixed();
  return Number(fahr);
}

function convertToCelsius(fahr) {
  let celsius = (((fahr - 32) * 5) / 9).toFixed();
  return Number(celsius);
}

document
  .querySelector(".weather-group")
  .addEventListener("click", function (e) {
    //pls see more on e
    console.log(e.target.id);
    if (e.target.id == "celsius" && tempUnit !== "C") {
      temperature = convertToCelsius(temperature);
      tempUnit = "C";
      updateWeather();
    } else if (e.target.id == "fahr" && tempUnit !== "F") {
      temperature = convertToFahrenheit(temperature);
      tempUnit = "F";
      updateWeather();
    }
  });

//DATE AND TIME
//new Date().getHours();
let localTime = new Date();

//TIMEOUT
setTimeout(function () {
  console.log("inside the timeout");
}, 3000); //delaying. setInterval for every x seconds

setInterval(function () {
  let localTime = new Date();
  document.querySelector("span[data-time=hours]").textContent =
    localTime.getHours().toString().padStart(2, "0");
  document.querySelector("span[data-time=minutes]").textContent =
    localTime.getMinutes().toString().padStart(2, "0");
  document.querySelector("span[data-time=seconds]").textContent =
    localTime.getSeconds().toString().padStart(2, "0");
}, 1000); //check later

//PADSTART
myString = "5";
myString.padStart(2, "0"); //(how many digits i want, what i want to add)

//LOOPS
//for loop
for (let i = 0; i < 5; i++) {
  //code...
}

//while loop
let i = 0;
while (i < 5) {
  //code...
  i++;
}

//do while loop
let j = 0;
do {
  //code...
  j++;
}
while (j < 5);

//for arrays
let arr = [1, 2, 5, 7, 21];
for (let a = 0; a < arr.length; a++) {
  console.log(arr[a]);
}

//for...in
for (let a in arr) {
  console.log(arr[a]);
} // a is the indices

//for objects
let animal = { "name": "dog", "color": "white", "age": 5};
for (let k in animal) {
  console.log(k); //keys
  console.log(animal[k]); //values
}

const galleryImages = [
  {
    "src": "./assets/gallery/image2.jpg",
    "alt": "Image 2"
  },
  {
    "src": "./assets/gallery/image1.jpg",
    "alt": "Image 1"
  },

  {
    "src": "./assets/gallery/image3.jpg",
    "alt": "Image 3"
  }
]

// for (let img in galleryImages) {
//   console.log((galleryImages[img].src)); 
// }

//foreach
// galleryImages.forEach(function(image, index){ 
//   console.log(index);
//   console.log(image);
// });

let mainImage = document.querySelector("#gallery > img"); //brush up on css selectors
let thumbnails = document.querySelector("#gallery .thumbnails");

mainImage.src = galleryImages[0].src;
mainImage.alt = galleryImages[0].alt;

// <img src="" alt="" data-array-index="0" data-selected="true">
// <img src="" alt="" data-array-index="1" data-selected="false">
// <img src="" alt="" data-array-index="2" data-selected="false"></img>

galleryImages.forEach(function(image, index){
  let thumb = document.createElement("img");
  thumb.src = image.src;
  thumb.alt = image.alt;
  thumb.dataset.arrayIndex = index;

  // set first image as selected
  thumb.dataset.selected = index === 0 ? "true" : "false";

  thumb.addEventListener("click", function(){

    // update main image
    mainImage.src = image.src;
    mainImage.alt = image.alt;

    // remove selected from all
    document.querySelectorAll("#gallery .thumbnails img").forEach(function(img){
      img.dataset.selected = "false";
    });

    // set clicked one as selected
    this.dataset.selected = "true";
  });

  thumbnails.appendChild(thumb);
});