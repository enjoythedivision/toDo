//document.getElementById("greeting").innerHTML = "Hello World!";

// DOM MANIPUILATION
// document.getElementById("greeting").innerHTML = "123";
// document.getElementById("weather").innerHTML = "123";
// select this element and change the text to "123" using the DOM

//document.getElementsByClassName("product-item").innerHTML = "123"; //nothing hapens,WE NEED A loop for multiple elemtns
//document.getElementsByTagName("p").innerHTML = "123"; //nothing hapens,WE NEED A loop for multiple elemtns
//document.querySelector(".product-item").innerHTML = "123"; //only the first element with this class will be changed
//document.querySelector("p#weather").innerHTML = "123"; //only the first element with this id will be changed\

//document.querySelector("p#weather").style.color = "red"; //only the first element with this id will be changed
//document.querySelector("p#weather").style.fontSize = "20px"; //only the first element with this id will be changed

//ΕVENTS
document.querySelector("p#weather").addEventListener("click", function () {
  alert("Weather clicked!");
});

document.querySelector("#open-nav-menu").addEventListener("click", function () {
  document.querySelector("header nav .wrapper").classList.add("nav-open");
});

document.querySelector("#close-nav-menu").addEventListener("click", function() {
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
});

//var customer = "Maria"; // var -> global variable -> available anywhere
console.log("Hello" + customer); // HelloMaria
console.log(`Hello ${customer}!`);

let customer = "Maria"; // let -> block scope variable -> available only within the block it is defined

const pi = 3.14; // const -> constant variable -> cannot be reassigned