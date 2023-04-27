var searchBtn = document.querySelector("#search");
var currentCity = document.querySelector("#current-city");
var searchCity = document.querySelector("#city-search")
var searchData = document.querySelector("#search-data");
var clearData = document.querySelector("#clear");
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

clearData.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});

function init() {
  var cityList = [];
  cityList = JSON.parse(localStorage.getItem("searchedCities"));
  console.log(cityList);
if(cityList !== null) {
  for(var i = 0; i < cityList.length; i++) {
    var listEl = document.createElement("button");
    listEl.textContent = cityList[i];
    listEl.setAttribute("class", "col-12 col-md-8");
    listEl.setAttribute("style", "background-color: rgb(9, 133, 235); color: aliceblue; border-style: hidden; margin-top: 2%")
    searchData.append(listEl);
    listEl.addEventListener("click", searchHistoryBtn);
  }
  
}
};

function searchHistoryBtn () {
  console.log("test");
  // for(var i = 0; i < listEl.length; i++) {
  //   var cityName = listEl[0].textContent;
  //   console.log(cityName)
  // }
  // var cityName = listEl.textContent;
console.log(this.textContent);
var cityName = (this.textContent);
// (this).textContent
fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=44937540199d83cda6cdba6424273fb3&units=imperial`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // console.log(data)
    currentCity.textContent = cityName
    currentTemp.textContent = `${data.list[0].main.temp}`
    currentWind.textContent = `${data.list[0].wind.speed}`
    currentHumid.textContent = `${data.list[0].main.humidity}`
    firstDayTemp.textContent = `${data.list[6].main.temp}`
    firstDayWind.textContent = `${data.list[6].wind.speed}`
    firstDayHumid.textContent = `${data.list[6].main.humidity}`
    secondDayTemp.textContent = `${data.list[14].main.temp}`
    secondDayWind.textContent = `${data.list[14].wind.speed}`
    secondDayHumid.textContent = `${data.list[14].main.humidity}`
    thirdDayTemp.textContent = `${data.list[22].main.temp}`
    thirdDayWind.textContent = `${data.list[22].wind.speed}`
    thirdDayHumid.textContent = `${data.list[22].main.humidity}`
    fourthDayTemp.textContent = `${data.list[30].main.temp}`
    fourthDayWind.textContent = `${data.list[30].wind.speed}`
    fourthDayHumid.textContent = `${data.list[30].main.humidity}`
    fifthDayTemp.textContent = `${data.list[38].main.temp}`
    fifthDayWind.textContent = `${data.list[38].wind.speed}`
    fifthDayHumid.textContent = `${data.list[38].main.humidity}`
    todayIcon.src = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png`
    firstDayIcon.src = `https://openweathermap.org/img/wn/${data.list[6].weather[0].icon}.png`
    secondDayIcon.src = `https://openweathermap.org/img/wn/${data.list[14].weather[0].icon}.png`
    thirdDayIcon.src = `https://openweathermap.org/img/wn/${data.list[22].weather[0].icon}.png`
    fourthDayIcon.src = `https://openweathermap.org/img/wn/${data.list[30].weather[0].icon}.png`
    fifthDayIcon.src = `https://openweathermap.org/img/wn/${data.list[38].weather[0].icon}.png`
})
}

fetch("https://api.openweathermap.org/data/2.5/forecast?q=philadelphia&appid=44937540199d83cda6cdba6424273fb3&units=imperial")
  .then(function (answer) {
    // console.log(answer)
    return answer.json(); 
  })
  .then(function (data) {
    // console.log(data)
    currentTemp.textContent = `${data.list[0].main.temp}`
    currentWind.textContent = `${data.list[0].wind.speed}`
    currentHumid.textContent = `${data.list[0].main.humidity}`
    firstDayTemp.textContent = `${data.list[6].main.temp}`
    firstDayWind.textContent = `${data.list[6].wind.speed}`
    firstDayHumid.textContent = `${data.list[6].main.humidity}`
    secondDayTemp.textContent = `${data.list[14].main.temp}`
    secondDayWind.textContent = `${data.list[14].wind.speed}`
    secondDayHumid.textContent = `${data.list[14].main.humidity}`
    thirdDayTemp.textContent = `${data.list[22].main.temp}`
    thirdDayWind.textContent = `${data.list[22].wind.speed}`
    thirdDayHumid.textContent = `${data.list[22].main.humidity}`
    fourthDayTemp.textContent = `${data.list[30].main.temp}`
    fourthDayWind.textContent = `${data.list[30].wind.speed}`
    fourthDayHumid.textContent = `${data.list[30].main.humidity}`
    fifthDayTemp.textContent = `${data.list[38].main.temp}`
    fifthDayWind.textContent = `${data.list[38].wind.speed}`
    fifthDayHumid.textContent = `${data.list[38].main.humidity}`
    todayIcon.src = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png`
    firstDayIcon.src = `https://openweathermap.org/img/wn/${data.list[6].weather[0].icon}.png`
    secondDayIcon.src = `https://openweathermap.org/img/wn/${data.list[22].weather[0].icon}.png`
    thirdDayIcon.src = `https://openweathermap.org/img/wn/${data.list[14].weather[0].icon}.png`
    fourthDayIcon.src = `https://openweathermap.org/img/wn/${data.list[30].weather[0].icon}.png`
    fifthDayIcon.src = `https://openweathermap.org/img/wn/${data.list[38].weather[0].icon}.png`
  });





function getWeather() {
var nameCity = searchCity.value;
console.log(nameCity)
console.log(searchCity.value);
fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${nameCity}&appid=44937540199d83cda6cdba6424273fb3&units=imperial`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    currentCity.textContent = nameCity
    currentTemp.textContent = `${data.list[0].main.temp}`
    currentWind.textContent = `${data.list[0].wind.speed}`
    currentHumid.textContent = `${data.list[0].main.humidity}`
    firstDayTemp.textContent = `${data.list[6].main.temp}`
    firstDayWind.textContent = `${data.list[6].wind.speed}`
    firstDayHumid.textContent = `${data.list[6].main.humidity}`
    secondDayTemp.textContent = `${data.list[14].main.temp}`
    secondDayWind.textContent = `${data.list[14].wind.speed}`
    secondDayHumid.textContent = `${data.list[14].main.humidity}`
    thirdDayTemp.textContent = `${data.list[22].main.temp}`
    thirdDayWind.textContent = `${data.list[22].wind.speed}`
    thirdDayHumid.textContent = `${data.list[22].main.humidity}`
    fourthDayTemp.textContent = `${data.list[30].main.temp}`
    fourthDayWind.textContent = `${data.list[30].wind.speed}`
    fourthDayHumid.textContent = `${data.list[30].main.humidity}`
    fifthDayTemp.textContent = `${data.list[38].main.temp}`
    fifthDayWind.textContent = `${data.list[38].wind.speed}`
    fifthDayHumid.textContent = `${data.list[38].main.humidity}`
    todayIcon.src = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png`
    firstDayIcon.src = `https://openweathermap.org/img/wn/${data.list[6].weather[0].icon}.png`
    secondDayIcon.src = `https://openweathermap.org/img/wn/${data.list[14].weather[0].icon}.png`
    thirdDayIcon.src = `https://openweathermap.org/img/wn/${data.list[22].weather[0].icon}.png`
    fourthDayIcon.src = `https://openweathermap.org/img/wn/${data.list[30].weather[0].icon}.png`
    fifthDayIcon.src = `https://openweathermap.org/img/wn/${data.list[38].weather[0].icon}.png`
})
var citiesList = JSON.parse(localStorage.getItem("searchedCities")) || [];
citiesList.push(searchCity.value);
localStorage.setItem("searchedCities",JSON.stringify(citiesList));

for(var i = 0; i < citiesList.length; i++) {
  var citiesList = [];
  citiesList.push(searchCity.value);
  var list = document.createElement("button");
  list.textContent = citiesList[i];
  list.setAttribute("class", "col-12 col-md-8");
  list.setAttribute("style", "background-color: rgb(9, 133, 235); color: aliceblue; border-style: hidden; margin-top: 2%")
  searchData.append(list);
}
  

// location.reload();
};







searchBtn.addEventListener("click", getWeather);


init();