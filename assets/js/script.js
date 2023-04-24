var searchBtn = document.querySelector("#search");
var currentCity = document.querySelector("#current-city");
var searchCity = document.querySelector("#city-search")
var pastCity = document.querySelector("#past-city");
var currentTemp = document.querySelector("#current-temp");
var currentWind = document.querySelector("#current-wind");
var currentHumid = document.querySelector("#current-humid");
var firstDayTemp = document.querySelector("#first-day-temp");
var firstDayWind = document.querySelector("#first-day-wind");
var firstDayHumid = document.querySelector("#first-day-humid");
var secondDayTemp = document.querySelector("#second-day-temp");
var secondDayWind = document.querySelector("#second-day-wind");
var secondDayHumid = document.querySelector("#second-day-humid");
var thirdDayTemp = document.querySelector("#third-day-temp");
var thirdDayWind = document.querySelector("#third-day-wind");
var thirdDayHumid = document.querySelector("#third-day-humid");
var fourthDayTemp = document.querySelector("#fourth-day-temp");
var fourthDayWind = document.querySelector("#fourth-day-wind");
var fourthDayHumid = document.querySelector("#fourth-day-humid");
var fifthDayTemp = document.querySelector("#fifth-day-temp");
var fifthDayWind = document.querySelector("#fifth-day-wind");
var fifthDayHumid = document.querySelector("#fifth-day-humid");
var todayIcon = document.querySelector("#today-icon");
var firstDayIcon = document.querySelector("#first-day-icon");
var secondDayIcon = document.querySelector("#second-day-icon");
var thirdDayIcon = document.querySelector("#third-day-icon");
var fourthDayIcon = document.querySelector("#fourth-day-icon");
var fifthDayIcon = document.querySelector("#fifth-day-icon");
var currentDate = dayjs();
$('#current-date').text(currentDate.format("M/D/YYYY"));
var dayOne = currentDate.add(1,'day');
$('#day-one').text(dayOne.format("M/D/YYYY"));
var dayTwo = dayOne.add(1,'day');
$('#day-two').text(dayTwo.format("M/D/YYYY"));
var dayThree = dayTwo.add(1,'day');
$('#day-three').text(dayThree.format("M/D/YYYY"));
var dayFour = dayThree.add(1,'day');
$('#day-four').text(dayFour.format("M/D/YYYY"));
var dayFifth = dayFour.add(1,'day');
$('#day-fifth').text(dayFifth.format("M/D/YYYY"));






function getWeather() {
var cityName = searchCity.value
fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=44937540199d83cda6cdba6424273fb3&units=imperial`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data)
    currentCity.textContent = cityName
    pastCity.textContent = cityName
    currentTemp.textContent = `${data.list[0].main.temp}`
    currentWind.textContent = `${data.list[0].wind.speed}`
    currentHumid.textContent = `${data.list[0].main.humidity}`
    firstDayTemp.textContent = `${data.list[8].main.temp}`
    firstDayWind.textContent = `${data.list[8].wind.speed}`
    firstDayHumid.textContent = `${data.list[8].main.humidity}`
    secondDayTemp.textContent = `${data.list[16].main.temp}`
    secondDayWind.textContent = `${data.list[16].wind.speed}`
    secondDayHumid.textContent = `${data.list[16].main.humidity}`
    thirdDayTemp.textContent = `${data.list[24].main.temp}`
    thirdDayWind.textContent = `${data.list[24].wind.speed}`
    thirdDayHumid.textContent = `${data.list[24].main.humidity}`
    fourthDayTemp.textContent = `${data.list[32].main.temp}`
    fourthDayWind.textContent = `${data.list[32].wind.speed}`
    fourthDayHumid.textContent = `${data.list[32].main.humidity}`
    fifthDayTemp.textContent = `${data.list[39].main.temp}`
    fifthDayWind.textContent = `${data.list[39].wind.speed}`
    fifthDayHumid.textContent = `${data.list[39].main.humidity}`
    todayIcon.src = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png`
}
)};




searchBtn.addEventListener("click", getWeather);
