const condition = document.getElementById('condition')
const city = document.getElementById('city')
const country = document.getElementById('country')
const mainText = document.getElementById('main')
const description = document.getElementById('description')
const temp = document.getElementById('temp')
const pressure = document.getElementById('pressure')
const humidity = document.getElementById('humidity')


const cityInput = document.getElementById('city-input')
const historyElm = document.getElementById('history')
const masterHistory = document.getElementById('master-history')

const API_KEY = 'a8e63f8c50dba18f0e49b29c63269979'
/*
const Base_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`
const countryCode = `https://api.openweathermap.org/data/2.5/weather?q={city name},{country code}&appid={API key}`
const latt = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`
*/
const ICON_URL = `https://openweathermap.org/img/wn/`
const cityName = 'kushtia,bd'

window.onload = function() {
  navigator.geolocation.getCurrentPosition(function(s) {
    console.log(s)
    getWeatherData(null, s.coords)
  }, function(e) {
    getWeatherData(cityName)
  })
  cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      if (e.target.value) {
       
        getWeatherData(e.target.value)
        e.target.value= ""
      } else {
        alert('Please provide a city name')
      }
    }
  })
}

function getWeatherData(city = cityName, coords) {
  let url;

  city === null ?
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${API_KEY}` :
    url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`

  axios.get(url)
    .then(({ data }) => {
      let weather = {
        icon: data.weather[0].icon,
        name: data.name,
        country: data.sys.country,
        main: data.weather[0].main,
        description: data.weather[0].description,
        temp:data.main.temp,
        pressure: data.main.pressure,
        humidity: data.main.humidity
      }

      setWeather(weather)
    })
    .catch(e => {
      console.log(e.message)

    })

}



function setWeather(d) {
  condition.src = `https://openweathermap.org/img/wn/${d.icon}.png`
  city.innerHTML = d.name
  country.innerHTML = d.country
  mainText.innerHTML = d.main
  description.innerHTML = d.description
  temp.innerHTML = d.temp
  humidity.innerHTML = d.humidity
  pressure.innerHTML = d.pressure
}
