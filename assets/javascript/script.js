
const apiKey = "184a8198da896feaef067743bfa7b988";
var submitButton = $('#submitButton')
var cityEl = $('#cityName');
var currentDate = $('#currentDate');
var clearButton = $('#clearButton');

function clockTick() {
	today = dayjs();
	$('#currentDay').text(today.format('MMM D, YYYY, h:mm:ss a'));
}
setInterval(clockTick, 1000);

getSavedCities();
function getSavedCities() {

	var savedCities = JSON.parse(localStorage.getItem("savedCities")) || []


	showButton(savedCities);

	for (var i = 0; i < savedCities.length; i++) {

		$('#searches').append('<button class="storedCity" id=selectedCity>' + savedCities[i]);

	}
}


function showButton(savedCities){

	var x = document.getElementById("clearButton");
	console.log(savedCities.length);
	console.log("showbutton");

	if (savedCities.length) {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}

}

// getSavedCities();
// function getSavedCities() {

// 	var savedCities = JSON.parse(localStorage.getItem("savedCities")) || []

// 	for (var i = 0; i < savedCities.length; i++) {

// 		$('#searches').append('<button class="storedCity" id=selectedCity>' + savedCities[i] + '</button> <button onclick="deleteItem(' + savedCities[i] + ')">Delete</button>');



// 	}
// }

// function deleteItem(e){
//   console.log("Button element", e)
//   e.parentElement.remove()
// }

clearButton.on("click", function (event) {
	event.preventDefault();

	clearCity();


	console.log('clear');
	location.reload();

});

function clearCity() {

	localStorage.clear();

};


//Click event with if function to prevent duplicating the buttons created.
submitButton.on("click", function (event) {
	event.preventDefault();

	var selectedCity = document.querySelector("#searchCity").value;
	var savedCities = JSON.parse(localStorage.getItem("savedCities")) || []


	if (selectedCity === "") {

	} else {

		if (!savedCities.includes(selectedCity)) {

			savedCities.push(selectedCity);

			$('#searches').append('<button class="storedCity" id=selectedCity>' + selectedCity + '</button>');

		}
		localStorage.setItem('savedCities', JSON.stringify(savedCities));

		getWeather(selectedCity);
		showButton(savedCities)

	}

})

$("body").on("click", '.storedCity', function (event) {
	event.preventDefault();
	getWeather($(this).text());

})
//function to grab the city based on weather API
function getWeather(city) {

	var apiGeo = "https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=5&appid=184a8198da896feaef067743bfa7b988";

	//fetch the api based of the city
	fetch(apiGeo).then(function (response) {
		if (response.ok) {
			response.json().then(function (data) {
				console.log("response", response);
				console.log("data", data);

				var long = (data[0].lon);
				var lat = (data[0].lat);

				console.log(lat);
				console.log(long);

				var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + long + "&appid=" + apiKey + "&units=imperial";


				fetch(apiUrl).then(function (response) {
					if (response.ok) {
						response.json().then(function (data) {
							console.log("response", response);
							console.log("data", data);

							console.log(data.city.name);

							var city = (data.city.name);
							$(cityEl).text(city);

							for (var i = 0; i < 39; i += 8) {

								var date = (data.list[i].dt_txt);
								var temp = (data.list[i].main.temp);
								var icon = (data.list[i].weather[0].icon);
								var wind = (data.list[i].wind.speed);
								var humidity = (data.list[i].main.humidity);

								var dates = dayjs(date).format('MM/DD/YYYY');

								$('#date-' + i).text(dates);

								$('#temp-' + i).text("Temp: " + temp);
								$('#wind-' + i).text("Speed: " + wind);
								$('#humidity-' + i).text("Humidity: " + humidity)

								$('#icon-' + i).attr('src', 'https://openweathermap.org/img/wn/' + icon + '@2x.png');

								console.log(date);
							}

							if (response.headers.get('Link')) {
								displayWarning(repo);
							}
						});
					} else {
						document.location.replace('./index.html');
					}
				});
			})
		}
	})
};
;

