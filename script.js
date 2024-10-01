document.getElementById('get-weather-btn').addEventListener('click', getWeather);

function getWeather() {
    const apiKey = "527c07fe978146fb150a13dfb807a64b";
    let cityName = document.getElementById('city-input').value;
    const weatherOutput = document.getElementById('weatherOutput');
    
    if (!cityName){
        alert('Please Enter a city');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&limit=1&appid=${apiKey}&units=imperial`;

    // The elements that i want to update
    const cityNameElement = document.getElementById('city-name');
    const weatherIconElement = document.getElementById('weatherIcon');
    const tempElement = document.getElementById("temp");
    const descriptionElement = document.getElementById("weather-description");

    fetch(apiUrl)
        .then(response =>{
            if (!response.ok) {
                throw new Error('Network Reesponse Was Not Ok');
            }
            return response.json()
        })
        .then(data => {
            const temperature = data.main.temp;
            const picture = data.weather[0].id;
            const city = data.name;
            const description = data.weather[0].description;
            cityNameElement.textContent = city; // Update the city name
            tempElement.textContent = `Temperature: ${temperature}°C`; // Update the temperature
            descriptionElement.textContent = `Weather: ${description}`; // Update the description
            weatherIconElement.src = `http://openweathermap.org/img/wn/${iconCode}.png`; // Update the weather icon
        })
        .catch(error => {
            console.error('Error:', error);
        });

}

// Step 1: Set up an event listener for the button click
// - Use "document.getElementById()" to target the button element
// - Add an event listener that triggers when the button is clicked

// Step 2: Inside the event listener function, grab the value from the input field
// - You'll need to fetch the city name from the input field using "document.getElementById()" again
// - Store this city name in a variable to use in the API call

// Step 3: Set up the API URL for OpenWeatherMap
// - OpenWeatherMap's API requires the city name and your API key
// - Construct a URL string using template literals (backticks: ``) that includes the city name and API key
// - The base URL is: 'https://api.openweathermap.org/data/2.5/weather?q={CITY_NAME}&appid={API_KEY}&units=metric'
// - Replace {CITY_NAME} with the city variable, and {API_KEY} with your actual API key

// Step 4: Use fetch() to make the API request
// - Fetch the data from the URL you constructed
// - Don't forget to use async/await or .then() to handle the promise

// Step 5: Extract and display the weather data
// - Once the data is fetched, you'll need to extract the temperature, weather description, and city name
// - Use "document.getElementById()" again to update the corresponding HTML elements with this data
// - For example, update the innerHTML or textContent of the "temperature" and "weather-description" elements

// Step 6: Add error handling
// - Add a check to handle errors (like invalid city names)
// - You can use .catch() or include error checks in your async function
