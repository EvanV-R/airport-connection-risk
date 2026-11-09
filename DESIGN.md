# Design Direction — Airport Connection Weather Risk Calculator

## Project Overview
The website will have a modern, aviation-inspired dashboard design. The goal is to make it easy for travelers to check weather conditions at their connecting airport and understand their estimated connection risk.

## Visual Style
The design should be clean, professional, and simple to navigate. It should resemble a modern airline or travel application without unnecessary animations or complicated features.

## Color Palette
- Background: Dark navy (#0B1220)
- Cards and sections: Lighter navy (#172338)
- Primary accent: Sky blue (#38BDF8)
- Main text: White (#FFFFFF)
- Secondary text: Light gray (#CBD5E1)
- Low risk: Green (#22C55E)
- Moderate risk: Yellow (#FACC15)
- High risk: Red (#EF4444)

## Typography
Use system fonts such as Arial or Segoe UI.

- Main heading: Large and bold
- Section headings: Medium-sized and bold
- Body text: Clear and readable
- Risk score: Large numbers that stand out

## Page Layout

### Header
Display the title "Airport Connection Weather Risk Calculator" with a short description explaining what the tool does.

### Input Section
Create a card containing:
- Airport dropdown menu
- Connection duration input in minutes
- Forecast date and time selector
- Calculate Risk button

Inputs should have clear labels and enough spacing to make them easy to use.

### Results Section
Display the calculated results in a separate card containing:
- Risk score from 0 to 100
- Low, moderate, or high risk classification
- Precipitation probability
- Wind speed
- Visibility
- A short explanation of the factors affecting the score

The risk category should be visually highlighted using its corresponding color.

## User Interface States

### Empty State
Show a message encouraging the user to select an airport, enter a connection duration, and choose a forecast time.

### Loading State
Display "Checking airport weather..." while retrieving API data. Disable the calculate button until the request finishes.

### Error State
Display a clear error message if the API request fails. Allow the user to try again.

### Invalid Input State
Display a helpful message when required information is missing or incorrect.

### In-Use State
Display the completed risk calculation with the weather information and explanation.

## Mobile Responsiveness
The website should work on both desktop and mobile devices.

- Use a single-column layout on smaller screens.
- Make buttons and input fields easy to tap.
- Keep the results readable without horizontal scrolling.
- Maintain consistent spacing.

## Accessibility
- Use semantic HTML elements.
- Include labels for all form inputs.
- Maintain sufficient color contrast.
- Provide visible keyboard focus indicators.
- Do not rely only on colors to communicate risk levels.

## Technical Design Rules
- Use plain HTML, CSS, and JavaScript.
- Store CSS in `style.css`.
- Store JavaScript in `script.js`.
- Do not use external frameworks, libraries, or CDNs.
- Keep the design simple enough to maintain and explain.
- Follow the requirements in `PRD.md`.