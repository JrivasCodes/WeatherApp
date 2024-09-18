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
