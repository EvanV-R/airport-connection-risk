# Product Requirements Document (PRD)

## Project Name
Airport Connection Weather Risk Calculator

## Project Overview
This website helps travelers estimate the weather-related risk of missing a connecting flight. It uses real weather forecast data from the Open-Meteo API and calculates a risk score based on airport weather conditions and connection duration.

## Target Users
Frequent travelers, especially passengers with connecting flights who want to understand potential weather-related risks before traveling.

## Main Features
1. Airport Selection: Users choose an airport from a dropdown menu.
2. Connection Duration: Users enter their connection time in minutes.
3. Forecast Time: Users select a forecast date and hour.
4. Weather API: The website retrieves forecast data from Open-Meteo.
5. Risk Calculator: JavaScript calculates a risk score from 0 to 100.
6. Risk Explanation: The website displays a risk category and explains which factors contribute to the score.

## API Information
API: Open-Meteo Weather Forecast API

Documentation: https://open-meteo.com/en/docs

Data used:
- Precipitation probability (%)
- Wind speed (km/h)
- Visibility (meters)
- Forecast date and time

The website will use JavaScript `fetch()` and `async/await` to retrieve this information.

## Risk Calculation
The website calculates an estimated risk score using weather conditions and connection duration.

The following conditions increase the score:
- Higher precipitation probability
- Stronger winds
- Lower visibility
- Shorter connection duration

Risk categories:
- Low Risk: 0–34
- Moderate Risk: 35–64
- High Risk: 65–100

The score is a simplified estimate, not an actual prediction of flight delays or missed connections.

## User Interface States

### 1. Empty State
When the website first loads, users see the airport selector, connection duration input, forecast time selector, and a button labeled "Calculate Risk."

The results section displays instructions encouraging users to enter their flight information.

If a search produces no matching forecast, the website explains that no data is available for the selected time.

### 2. Loading State
When the user clicks "Calculate Risk," the website displays "Checking airport weather..."

The calculate button is temporarily disabled while the API request runs.

### 3. Error State
If the API request fails or returns an unsuccessful response, the website displays "Unable to retrieve weather data. Please try again."

The user can retry without refreshing the page.

### 4. Invalid Input State
The website checks the user's information before making an API request.

Invalid inputs include:
- No airport selected
- Missing connection duration
- Connection duration below 30 minutes or above 360 minutes
- No forecast time selected

The website displays a helpful message explaining what needs to be corrected.

### 5. In-Use State
After successfully retrieving weather data, the website displays:
- Risk score from 0 to 100
- Low, moderate, or high risk classification
- Precipitation probability
- Wind speed
- Visibility
- Short explanation of the risk factors

Users can change their selections and calculate another result.

## Design Requirements
- Clean, modern aviation-inspired appearance
- Dark navy background with blue accents
- Simple dropdown menus and input fields
- Clear risk indicators
- Responsive layout for desktop and mobile
- Accessible labels and readable text

## Technical Requirements
- Plain HTML, CSS, and JavaScript
- No React, Tailwind, frameworks, external libraries, or CDNs
- Use `fetch()` and `async/await`
- Place API requests inside `try/catch`
- Check `response.ok` before processing the response
- Use JavaScript to display API data and calculated results
- No API keys stored in the repository
- Deploy using GitHub Pages

## Success Criteria
The project is successful when a user can select an airport, enter their connection duration, choose a forecast time, and receive a calculated weather-related risk score based on real API data.

The website must handle all five interface states and work through its public GitHub Pages URL.