import axios from 'axios';

const API_KEY = "cbd334be257e4506b1a03259172303";
const rootUrl = `http://api.apixu.com/v1/forecast.json?key=${API_KEY}&days=5`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${rootUrl}&q=${city}`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
