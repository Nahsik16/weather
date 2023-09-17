const apiKey="43fed0b90e39102924226253d967ee22";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
  const response =await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);

  document.querySelector(".city").innerHTML= data.name;
  document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + " °C";
  document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
  document.querySelector(".wind").innerHTML= data.wind.speed + " km/h";

  

  if(data.weather[0].main == "Clouds"){
    weatherIcon.src ="imagess/clouds.png";
  }
  else if(data.weather[0].main =="Rain"){
    weatherIcon.src ="imagess/rain.png";
  }
  else if(data.weather[0].main =="Clear"){
    weatherIcon.src ="imagess/clear.png";
  }
  else if(data.weather[0].main =="Drizzle"){
    weatherIcon.src ="imagess/drizzle.png";
  }
  else if(data.weather[0].main =="Mist"){
    weatherIcon.src ="imagess/mist.png";
  }
  else if(data.weather[0].main =="Snow"){
    weatherIcon.src ="imagess/snow1.png";
  }
  document.querySelector(".weather").style.display = "block";
}


searchBtn.addEventListener('click', 
()=>{
  checkWeather(searchBox.value);
})
