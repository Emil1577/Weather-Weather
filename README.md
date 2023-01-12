# Weather-Weather

## Decription

This website provides you 5 days weather forecast of a specific city .  The city on the header is the weather of the city. You are given a searchbox and a button to enter the city you want to search.  Each day will provide you the weather, temperature, wind speed and the humidity.  Once the weather was provided, a new button will appear that is below the search button which will be labeled the city you input.  This button will let you view back the weather.  Upon closing or refreshing the website, all saved buttons and city will be reset so you can have a fresh set of cities to search for.  

Here is the link to my game.  Feel free to share with your friends and family.

[https://emil1577.github.io/Emil-Work-Day-Scheduler](https://emil1577.github.io/Emil-Work-Day-Scheduler/)


## Table Of Contents

1: [Webpage Screenshot](https://github.com/Emil1577/Emil-Weather-Weather/blob/main/README.md#webpage-screenshots)
2: [Code Snippets](https://github.com/Emil1577/Emil-Weather-Weather/blob/main/README.md#code-snippets)
3: [How to use:](https://github.com/Emil1577/Emil-Weather-Weather/blob/main/README.md#how-to-use)
4: [My Contact Information](https://github.com/Emil1577/Emil-Weather-Weather/blob/main/README.md#my-contact-information)

## Webpage Screenshots:

![Screen Shot 2023-01-11 at 9 16 49 PM](https://user-images.githubusercontent.com/119825000/211983498-2f075dd7-9991-4c3f-9938-73c043913457.png)

![Screen Shot 2023-01-11 at 9 17 26 PM](https://user-images.githubusercontent.com/119825000/211983532-7895118b-aede-4fd9-bb89-d0ccd66c34f7.png)

## Code Snippets: 

### Function to enable click event for the Search button.

    submitButton.on("click", function (event) {
        event.preventDefault();

        var selectedCity = document.querySelector("#searchCity").value;
        var savedCities = JSON.parse(localStorage.getItem("savedCities")) || []

        console.log(typeof savedCities);

        if (!savedCities.includes(selectedCity)) {

            savedCities.push(selectedCity);

            $('#searches').append('<button class="storedCity" id=selectedCity>' + selectedCity + '</button>');

        }
        localStorage.setItem('savedCities', JSON.stringify(savedCities));

        getWeather(selectedCity);

    })

### Function to enable click event for the searched cities.

    $("body").on("click", '.storedCity', function (event) {
	event.preventDefault();
	getWeather($(this).text());

    })
    
### Function to fetch the coordinates of the cities provided to be used for the weather API.

    function getWeather(city) {

        var apiGeo = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=5&appid=184a8198da896feaef067743bfa7b988";

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

                    var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + long + "&appid=" + apiKey +            "&units=imperial";

### Function to fetch the weather information.  Console logging them to grab the data information.

    fetch(apiUrl).then(function (response) {
		if (response.ok) {
			        response.json().then(function (data) {
					console.log("response", response);
					console.log("data", data);

					console.log(data.city.name);

					var city = (data.city.name);
					$(cityEl).text(city);



### Loop function to generate 5 days of forecasting to be placed in the HTML file.

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


## How to use:

The link of the webpage is: https://emil1577.github.io/Emil-Work-Day-Scheduler

    Step 1 :Welcome homepage.
    Step 2 :Go to the search textbox and enter a city you want to check the weather of.  Click on the "Search" button to execute.  The city will be shown on the top page.  There will be 5 cards that will be shown with the correspoding dates and weather for the city searched.
    Step 3 :As soon as you hit the "Search" button, a new button will appear below the "search" button labeled the city you search.  When you click this button, it will again generate the weather of the city you searched previously.
    Step 4 :You can search as many city as you can and the button will keep populating.  However, I recommend keeping it to five cities for viewing purposes.
    Step 5 :To delete the buttons that was generated, just refresh the site and it will revert back to it's initial state.

## My Contact Information:

* [My LinkedIn](https://www.linkedin.com/in/emil-ronquillo-76832a32/)
* [My Github](https://github.com/Emil1577)
* [My Email](mailto:emilronquillo@gmail.com)

## Thank you for stopping by. 

Special thanks to all my Instructor, tutors and my colleagues
