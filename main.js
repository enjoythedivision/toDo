const galleryImages = [
  {
    src: "./assets/gallery/image2.jpg",
    alt: "Image 2",
  },
  {
    src: "./assets/gallery/image1.jpg",
    alt: "Image 1",
  },

  {
    src: "./assets/gallery/image3.jpg",
    alt: "Image 3",
  },
];

function menuHandler() {
  document
    .querySelector("#open-nav-menu")
    .addEventListener("click", function () {
      document.querySelector("header nav .wrapper").classList.add("nav-open");
    });

  document
    .querySelector("#close-nav-menu")
    .addEventListener("click", function () {
      document
        .querySelector("header nav .wrapper")
        .classList.remove("nav-open");
    });
}

function greetingHandler() {
  const greetingText = "Good morning!!";
  const weatherCondition = "sunny";
  const userLocation = "Athens";
  let temperature = 25;
  let tempUnit = "C"; // C for Celsius, F for Fahrenheit

  let weatherText = `The weather is ${weatherCondition} in ${userLocation} with a temperature of ${temperature}°${tempUnit}.`;

  document.querySelector("#greeting").innerHTML = greetingText;
  document.querySelector("#weather").innerHTML = weatherText;

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
}

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

function clockHandler() {
  //DATE AND TIME
  //new Date().getHours();
  let localTime = new Date();

  //TIMEOUT
  setTimeout(function () {
    console.log("inside the timeout");
  }, 3000); //delaying. setInterval for every x seconds

  setInterval(function () {
    let localTime = new Date();
    document.querySelector("span[data-time=hours]").textContent = localTime
      .getHours()
      .toString()
      .padStart(2, "0");
    document.querySelector("span[data-time=minutes]").textContent = localTime
      .getMinutes()
      .toString()
      .padStart(2, "0");
    document.querySelector("span[data-time=seconds]").textContent = localTime
      .getSeconds()
      .toString()
      .padStart(2, "0");
  }, 1000); //check later
}

function galleryHandler() {
  let mainImage = document.querySelector("#gallery > img"); //brush up on css selectors
  let thumbnails = document.querySelector("#gallery .thumbnails");

  mainImage.src = galleryImages[0].src;
  mainImage.alt = galleryImages[0].alt;

  // <img src="" alt="" data-array-index="0" data-selected="true">
  // <img src="" alt="" data-array-index="1" data-selected="false">
  // <img src="" alt="" data-array-index="2" data-selected="false"></img>

  galleryImages.forEach(function (image, index) {
    let thumb = document.createElement("img");
    thumb.src = image.src;
    thumb.alt = image.alt;
    thumb.dataset.arrayIndex = index;

    // set first image as selected
    thumb.dataset.selected = index === 0 ? "true" : "false";

    thumb.addEventListener("click", function () {
      // update main image
      mainImage.src = image.src;
      mainImage.alt = image.alt;

      // remove selected from all
      document
        .querySelectorAll("#gallery .thumbnails img")
        .forEach(function (img) {
          img.dataset.selected = "false";
        });

      // set clicked one as selected
      this.dataset.selected = "true";
    });

    thumbnails.appendChild(thumb);
  });
}

//Page Load
menuHandler();
greetingHandler();
clockHandler();
galleryHandler();