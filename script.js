const apiKey = "c6c64c2b51b9bff0c17219313b7cf61f";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherImage = document.querySelector(".weather-icon");

async function getWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
  }

  if (data.weather[0].main == "Clouds") {
    weatherImage.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherImage.src = "images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    weatherImage.src = "images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherImage.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherImage.src = "images/mist.png";
  }

  document.querySelector(".weather").style.display = "block";
  document.querySelector(".error").style.display = "none";
}

searchBtn.addEventListener("click", () => {
  getWeather(search.value);
});
