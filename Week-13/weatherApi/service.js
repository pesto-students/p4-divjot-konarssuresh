import {BASE_URL, WEATHER_API} from "./constants/endpoint.js";
import {PAGINATION_COUNT} from "./constants/global.js";
import fetch from "node-fetch";
import _lodash from "lodash";
const {chunk} = _lodash;

export const getMultipleCities = async ({res, cities}) => {
  try {
    let weatherResponse = [];
    for (const element of cities) {
      let cityWeatherResponse = await fetch(
        `${BASE_URL}${WEATHER_API.CURRENT}?key=${process.env.WEATHER_API_KEY}&q=${element}&aqi=no`
      );
      let cityWeather = await cityWeatherResponse.json();
      if (cityWeather.error) {
        throw new Error(cityWeather.error.message);
      } else {
        weatherResponse = [...weatherResponse, cityWeather];
      }
    }
    const resp = JSON.stringify({
      weatherDetails: chunk(weatherResponse, PAGINATION_COUNT),
    });
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(resp);
  } catch (e) {
    console.log({e});
    const statusCode = e.message ? 400 : 500;
    const message = e.message || "Internal Server Error Occured";
    res.writeHead(statusCode, {"Content-Type": "application/json"});
    res.end(JSON.stringify({message}));
  }
};

export const getForecast = async ({res, city, days}) => {
  try {
    const forecastResponse = await fetch(
      `${BASE_URL}${WEATHER_API.FORECAST}?key=${process.env.WEATHER_API_KEY}&q=${city}&days=${days}&aqi=no&alerts=no`
    );
    let forecast = await forecastResponse.json();
    if (forecast.error) {
      res.writeHead(400, {"Content-Type": "application/json"});
      res.end(JSON.stringify({message: forecast.error.message}));
    } else {
      const resp = JSON.stringify({forecastDetails: forecast});
      res.writeHead(200, {"Content-Type": "application/json"});
      res.end(resp);
    }
  } catch (e) {
    console.log(e);
    res.writeHead(500, {"Content-Type": "application/json"});
    res.end(JSON.stringify({message: "Internal Server Error"}));
  }
};

export const getCurrentWeather = async ({res, city}) => {
  try {
    let cityWeatherResponse = await fetch(
      `${BASE_URL}${WEATHER_API.CURRENT}?key=${process.env.WEATHER_API_KEY}&q=${city}&aqi=no`
    );
    let cityWeather = await cityWeatherResponse.json();
    if (cityWeather.error) {
      res.writeHead(400, {"Content-Type": "application/json"});
      res.end(JSON.stringify({message: cityWeather.error.message}));
    } else {
      const resp = JSON.stringify({currentWeatherDetails: cityWeather});
      res.writeHead(200, {"Content-Type": "application/json"});
      res.end(resp);
    }
  } catch (e) {
    res.writeHead(500, {"Content-Type": "application/json"});
    res.end(JSON.stringify({message: "Internal Server Error"}));
  }
};
