
# Airport Connection Weather Risk Calculator

## Mini Project 3 — OIM3690

### What I Built

I created an interactive website that helps travelers estimate the weather-related risk of missing a connecting flight.

The tool uses real weather forecast data and the amount of time available between flights to calculate a connection risk level.

I chose this project because I travel frequently and have experienced stressful airport connections. I wanted to build something useful for travelers who want to understand potential risks before their trips.

## Live Website

[Airport Connection Weather Risk Calculator](https://evanv-r.github.io/airport-connection-risk/)

## API Used

This project uses the Open-Meteo Weather Forecast API.

API documentation:
https://open-meteo.com/en/docs

Open-Meteo provides weather forecast information without requiring an API key.

The weather data includes:
- Precipitation probability
- Wind speed
- Visibility
- Forecast date and time

## How to Use the Tool

1. Open the live website.
2. Select your connecting airport.
3. Enter your connection time and requested forecast information.
4. Click the button to calculate the risk.
5. Review the estimated risk level and weather conditions.

The tool uses weather information and connection time to provide a general risk estimate.

The result is not an official airline prediction or a guarantee that a passenger will make or miss a flight.

## Five User Interface States

### 1. Empty State
The website initially displays the form before the user enters information.

### 2. Loading State
A loading message appears while the website requests weather information from Open-Meteo.

### 3. Error State
An error message appears if the weather API cannot be reached or the request fails.

### 4. Invalid Input State
The website displays a validation message if required information is missing or invalid.

### 5. In-Use State
After a successful request, the website displays the weather information and estimated connection risk.

## Development Process

I used AI assistance to help develop the HTML, CSS, and JavaScript for this project.

Before building the website, I created the following planning documents:

- PROPOSAL.md — Project idea, intended users, and API
- PRD.md — Product requirements and five interface states
- DESIGN.md — Visual design and layout direction
- AGENTS.md — Instructions and development rules for the AI agent

The website was built using HTML, CSS, and JavaScript.

JavaScript uses fetch(), async/await, and try/catch to request and process weather data.

## What the Agent Built vs. What I Expected

I originally expected a simple calculator that would display airport weather and estimate whether a connection was risky.

The AI agent helped turn the idea into a more complete website with a styled interface, form validation, loading and error handling, and weather-based results.

One difference from my original expectations was the amount of structure needed to handle API requests and different interface states. I initially thought the project would mainly involve a form and a basic calculation.

I also learned that a weather-based connection risk estimate is different from predicting an actual missed flight. The tool cannot account for every factor, such as aircraft delays, gate changes, or airport congestion.

## AI Review and Reflection

AI was useful for generating the initial code structure, connecting the weather API, and organizing the user interface.

However, I still needed to review the code, understand how the API request worked, test the website, and confirm that the results displayed correctly.

This project helped me understand how frontend JavaScript communicates with an external API and how AI-generated code needs to be tested rather than accepted automatically.

## Limitations and Future Improvements

The calculator provides an estimate based on weather and connection time, not real-time flight operations.

In the future, I would like to add:
- Live flight delay information
- Airport terminal and gate information
- Estimated walking time between gates
- More airport options
- Historical airport delay data

These features could make the risk estimate more accurate and useful for travelers.
