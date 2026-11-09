const airports = {
  BOS: { name: 'Boston Logan', latitude: 42.3656, longitude: -71.0096, timezone: 'America/New_York' },
  CLT: { name: 'Charlotte Douglas', latitude: 35.2144, longitude: -80.9473, timezone: 'America/New_York' },
  JFK: { name: 'New York JFK', latitude: 40.6413, longitude: -73.7781, timezone: 'America/New_York' },
  ATL: { name: 'Atlanta', latitude: 33.6407, longitude: -84.4277, timezone: 'America/New_York' },
  ORD: { name: "Chicago O'Hare", latitude: 41.9742, longitude: -87.9073, timezone: 'America/Chicago' },
  DFW: { name: 'Dallas/Fort Worth', latitude: 32.8998, longitude: -97.0403, timezone: 'America/Chicago' }
};

const form = document.querySelector('#risk-form');
const button = document.querySelector('#calculate');
const status = document.querySelector('#status');
const result = document.querySelector('#result');

function showMessage(message) {
  status.textContent = message;
  result.hidden = true;
}

function airportToday(timezone) {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: timezone, year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', hourCycle: 'h23', minute: '2-digit'
  }).formatToParts(new Date());
  const value = type => parts.find(part => part.type === type).value;
  return `${value('year')}-${value('month')}-${value('day')}T${value('hour')}:${value('minute')}`;
}

function calculateRisk(rain, wind, visibility, duration) {
  // Transparent, illustrative weights; not a statistically validated prediction.
  const precipitationPoints = Math.min(35, rain * 0.35);
  const windPoints = Math.min(25, wind * 0.5);
  const visibilityPoints = Math.min(25, Math.max(0, (10000 - visibility) / 400));
  const connectionPoints = Math.min(15, Math.max(0, (120 - duration) / 6));
  return Math.round(Math.min(100, precipitationPoints + windPoints + visibilityPoints + connectionPoints));
}

form.addEventListener('submit', async event => {
  event.preventDefault();
  const airport = airports[document.querySelector('#airport').value];
  const durationText = document.querySelector('#duration').value.trim();
  const duration = Number(durationText);
  const selected = document.querySelector('#forecast-time').value;

  if (!airport || !durationText || !Number.isInteger(duration) || duration < 30 || duration > 360 || !selected) {
    showMessage('Please select an airport, enter a whole-number connection length from 30 to 360 minutes, and choose a forecast date/time.');
    return;
  }
  const current = airportToday(airport.timezone);
  if (selected < current) {
    showMessage('Please choose a future time in the connecting airport’s local time zone.');
    return;
  }
  const forecastEnd = new Date(Date.now() + 15 * 24 * 60 * 60 * 1000);
  if (selected.slice(0, 10) > forecastEnd.toISOString().slice(0, 10)) {
    showMessage('Please choose a date within the next 15 days.');
    return;
  }

  button.disabled = true;
  showMessage('Checking airport weather...');
  try {
    const params = new URLSearchParams({
      latitude: airport.latitude,
      longitude: airport.longitude,
      hourly: 'precipitation_probability,wind_speed_10m,visibility',
      timezone: airport.timezone,
      forecast_days: '16',
      wind_speed_unit: 'kmh'
    });
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`);
    if (!response.ok) throw new Error(`Weather service returned ${response.status}`);
    const data = await response.json();
    if (!data.hourly || !Array.isArray(data.hourly.time)) throw new Error('Forecast data is incomplete');
    // Open-Meteo returns hourly timestamps in the requested airport time zone.
    const hour = selected.slice(0, 13) + ':00';
    const index = data.hourly.time.indexOf(hour);
    if (index === -1) {
      showMessage('No forecast is available for that hour. Try a nearer date or another time.');
      return;
    }
    const rain = data.hourly.precipitation_probability?.[index];
    const wind = data.hourly.wind_speed_10m?.[index];
    const visibility = data.hourly.visibility?.[index];
    if (![rain, wind, visibility].every(Number.isFinite)) throw new Error('Missing weather values');

    const score = calculateRisk(rain, wind, visibility, duration);
    const level = score < 35 ? 'Low' : score < 65 ? 'Moderate' : 'High';
    const label = document.querySelector('#risk-level');
    document.querySelector('#score').textContent = `${score}/100`;
    label.textContent = `${level} risk`;
    label.className = `risk-label ${level.toLowerCase()}`;
    document.querySelector('#rain').textContent = `${rain}%`;
    document.querySelector('#wind').textContent = `${Math.round(wind)} km/h`;
    document.querySelector('#visibility').textContent = `${(visibility / 1000).toFixed(1)} km`;
    const factors = [];
    if (rain >= 60) factors.push('high precipitation probability');
    if (wind >= 40) factors.push('strong winds');
    if (visibility < 5000) factors.push('reduced visibility');
    if (duration < 90) factors.push('a short connection');
    document.querySelector('#explanation').textContent = factors.length
      ? `This estimate is influenced by ${factors.join(', ')}. It is a simple weather-based score, not a real flight-delay prediction.`
      : 'Forecast conditions and connection length suggest relatively limited weather-related risk. This is not a real flight-delay prediction.';
    document.querySelector('#forecast-label').textContent = `${airport.name} • ${hour.replace('T', ' ')} (airport local time)`;
    status.textContent = '';
    result.hidden = false;
  } catch (error) {
    console.error(error);
    showMessage('Unable to retrieve weather data. Check your connection and try again.');
  } finally {
    button.disabled = false;
  }
});
