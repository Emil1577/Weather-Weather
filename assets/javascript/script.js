
const apiKey = "184a8198da896feaef067743bfa7b988";
var submitButton = $('#submitButton') 
var latitude;
var long;
var lat;
var cityEl = $('#cityName');
var currentDate = $('#currentDate');
var aprUrl;

function clockTick(){
	today = dayjs();
	$('#currentDay').text(today.format('MMM D, YYYY, h:mm:ss a'));
  }
  setInterval (clockTick, 1000);
//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

//var apiResults = api.openweathermap.org/data/2.5/forecast?lat=38.1074&lon=122.5697&appid=184a8198da896feaef067743bfa7b988;

console.log(apiKey);

submitButton.on("click", function(event) {
    event.preventDefault();
    //assigned id "#text-x" to HTML
    var selectedCity = document.querySelector("#searchCity").value;

	console.log(selectedCity);

  




var apiGeo ="http://api.openweathermap.org/geo/1.0/direct?q="+selectedCity+"&limit=5&appid=184a8198da896feaef067743bfa7b988";


fetch(apiGeo).then(function (response) {
	if (response.ok) {
	  response.json().then(function (data) {
		console.log("response", response);
		console.log("data", data);

		var long = (data[0].lon);
		var lat = (data[0].lat);

		console.log(lat);
		console.log(long);

		var apiUrl  = "https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+long+"&appid="+apiKey+"&units=imperial";


	fetch(apiUrl).then(function (response) {
		if (response.ok) {
		  response.json().then(function (data) {
			console.log("response", response);
			console.log("data", data);

			console.log(data.city.name);

			var city = (data.city.name);
			$(cityEl).text(city);


	for (var i =0; i<39; i+=8){


			var dates = (data.list[i].dt_txt);
			var temp = (data.list[i].main.temp);
			var icon = (data.list[i].weather[0].icon);
			var wind = (data.list[i].wind.speed);
			var humidity = (data.list[i].main.humidity);


			$('#date-'+i).text(dates);
			$('#icon-'+i).text(icon);
			$('#temp-'+i).text("Temp "+temp);
			$('#wind-'+i).text("Speed " + wind);
			$('#humidity-'+i).text("Humidity "+humidity);

		var x = i+5;
console.log(i);
		console.log(dates);

		//console.log(x);
	}
			RenderSearch();
		
			if (response.headers.get('Link')) {
			  displayWarning(repo);
			}
		  });
		} else {
		  document.location.replace('./index.html');
		}
	  });
	})}})
}); 
	;

function RenderSearch(){


   //$(currentDate)= date;
 





  //console.log(data.list[1].weather);

}