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

document.querySelector("#close-nav-menu").addEventListener("click", function () {
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
  age: 20
}; //this is an object with two properties: name and age
student.name = "Maria"; // change the name property of the student object
student.age = 25; // change the age property of the student object
student.grade = 10; // add a new property to the student object
let student2 = {
  name: "Anna",
  age: 22,
  grade: 9
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
  let fahr = ((celsius * 9/5) + 32).toFixed();
  return Number(fahr);
}

function convertToCelsius(fahr) {
  let celsius = ((fahr - 32) * 5/9).toFixed();
  return Number(celsius);
}

document.querySelector(".weather-group").addEventListener("click", function(e){ //pls see more on e
  console.log(e.target.id);
  if (e.target.id == "celsius") {
    temperature = convertToCelsius(temperature);
    tempUnit = "C";
    updateWeather();
  }
  else if (e.target.id == "fahr") {
    temperature = convertToFahrenheit(temperature);
    tempUnit = "F";
    updateWeather();
  }

});



