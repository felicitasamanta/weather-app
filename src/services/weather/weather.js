import * as dates from "../../common/dates.js";
import { removeAccents } from "../../common/utils/remove_accents.js";

const API_KEY = `7d4992577baa485eb1f72926231909`;

const requestOptions = {
  method: "GET",
};

const getWeather = async ({ city, country_code }) => {
  let information;

  if (city) {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${removeAccents(
        city
      )}&days=7&aqi=no&alerts=no`,
      requestOptions
    );

    const data = await response.json();
    const current = data.current;
    const forecast = Object.values(data.forecast);
    const following_forecast = forecast[0];
    const today = forecast[0][0];
    const hours = today.hour;

    const weather = {
      temp_c: current.temp_c,
      temp_f: current.temp_f,
      current_icon: current.condition.icon,
      cloud: current.cloud,
      condition: current.condition,
      humidity: current.humidity,
      wind_mph: current.wind_mph,
      pressure_in: current.pressure_in,
      pressure_mb: current.pressure_mb,
      feels_like_f: current.feelslike_f,
      visibility_km: current.vis_km,
      visibility_miles: current.vis_miles,
      chance_of_rain: today.daily_chance_of_rain,
      avg_humidity: today.day.avghumidity,
      hour: dates.onlyTime(current.last_updated, country_code),
    };

    const todays_forecast = dates.supported_hours.map((hour) => ({
      time: hours[hour].time.toString().slice(-5),
      temp_c: hours[hour].temp_c,
      temp_f: hours[hour].temp_f,
      icon: hours[hour].condition.icon,
    }));

    const air_conditions = [
      {
        icon: `real_feel`,
        title: `Real Feel`,
        feature: `${current.feelslike_c}°`,
      },
      {
        icon: `chance_of_rain`,
        title: `Chance of rain`,
        feature: `${today.day.daily_chance_of_rain}%`,
      },
      {
        icon: `wind`,
        title: `Wind`,
        feature: `${current.wind_kph} km/h`,
      },
      {
        icon: `uv_index`,
        title: `UV Index`,
        feature: current.uv,
      },
    ];

    const see_more_todays_forecast = dates.see_more_supported_hours.map(
      (hour) => ({
        time: hours[hour].time.toString().slice(-5),
        temp_c: hours[hour].temp_c,
        temp_f: hours[hour].temp_f,
        icon: hours[hour].condition.icon,
      })
    );

    const see_more_air_conditions = [
      {
        icon: `real_feel`,
        title: `Real Feel`,
        feature: `${current.feelslike_c}°`,
      },
      {
        icon: `chance_of_rain`,
        title: `Chance of rain`,
        feature: `${today.day.daily_chance_of_rain}%`,
      },
      {
        icon: `wind`,
        title: `Wind`,
        feature: `${current.wind_kph} km/h`,
      },
      {
        icon: `uv_index`,
        title: `UV Index`,
        feature: current.uv,
      },
      {
        icon: `humidity`,
        title: `Humidity`,
        feature: `${current.humidity}%`,
      },
      {
        icon: `visibility`,
        title: `Visibility`,
        feature: `${current.vis_km} km/h`,
      },

      {
        icon: `pressure`,
        title: `Pressure`,
        feature: `${current.pressure_mb} hPa`,
      },
      {
        icon: `sunset`,
        title: `Sunset`,
        feature: today.astro.sunset,
      },
    ];

    const future_forecast = following_forecast.map((day) => ({
      date_to_check: day.date,
      icon: day.day.condition.icon,
      weather: day.day.condition.text,
      max_temp_c: day.day.maxtemp_c,
      max_temp_f: day.day.maxtemp_f,
      min_temp_c: day.day.mintemp_c,
      min_temp_f: day.day.mintemp_f,
    }));

    const getThreeDaysForecast = () => following_forecast.slice(0, 3);

    const three_days_forecast = getThreeDaysForecast().map((day) => ({
      date_to_check: day.date,
      icon: day.day.condition.icon,
      weather: day.day.condition.text,
      max_temp_c: day.day.maxtemp_c,
      max_temp_f: day.day.maxtemp_f,
      min_temp_c: day.day.mintemp_c,
      min_temp_f: day.day.mintemp_f,
    }));

    information = {
      weather,
      todays_forecast,
      air_conditions,
      future_forecast,
      see_more_todays_forecast,
      see_more_air_conditions,
      three_days_forecast,
    };
  }

  return information;
};

export { getWeather };
