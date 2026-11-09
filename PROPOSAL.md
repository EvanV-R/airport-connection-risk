# Airport Connection Weather Risk Calculator

## What I Am Building
I am building a website that helps travelers estimate the weather-related risk of missing a connecting flight based on airport weather conditions and their connection time.

## Who It Is For
This tool is for people who travel frequently, especially passengers with connecting flights. I have experienced stressful airport connections myself, so I wanted to create something that helps travelers understand potential weather-related risks before their trip.

## The API
I will use the Open-Meteo Weather API, which provides weather forecasts without requiring an API key.

API documentation: https://open-meteo.com/en/docs

Example API URL:
https://api.open-meteo.com/v1/forecast?latitude=42.3656&longitude=-71.0096&hourly=precipitation_probability,wind_speed_10m,visibility&forecast_days=2

The main data I plan to use includes:
- Precipitation probability
- Wind speed
- Visibility
- Forecast date and time

## What the User Chooses
The user will select an airport, enter how long their connection is, and choose a forecast time. These selections will determine which weather information the website retrieves and analyzes.

## What the Page Works Out
The website will calculate an estimated weather-related connection risk score using precipitation probability, wind speed, visibility, and connection duration.

It will categorize the result as low, moderate, or high risk and explain which weather conditions contributed to the score.

The score will be an estimate based on weather conditions, not a guarantee of whether a flight will be delayed or missed.

## Features
1. A dropdown menu to select an airport.
2. An input for connection duration.
3. A forecast time selector.
4. Weather information retrieved from a real API.
5. A calculated risk score with an explanation of the main risk factors.

## What I Do Not Know Yet
I need to learn how to use JavaScript `fetch()` and `async/await` to retrieve weather data from an API. I also need to figure out how to match the user's selected time to the correct forecast data and create a formula that combines weather conditions with connection duration to estimate risk.
