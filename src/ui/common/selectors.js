// body
const selectBody = () => document.querySelector("body");

// loader
const selectLoader = () => document.querySelector(".loader");

// menu
const selectMyLocation = () => document.querySelector(".my_location");
const selectCities = () => document.querySelector(".cities");
const selectMap = () => document.querySelector(".map");
const selectSettings = () => document.querySelector(".settings");

// container
const selectContainer = () => document.querySelector(".container");

const selectCurrentWeatherIcon = () =>
  document.querySelector(".current_weather_icon");
const selectRealFeel = () => document.querySelector(".real_feel");
const selectChanceOfRain = () => document.querySelector(".chance_of_rain");
const selectWind = () => document.querySelector(".wind");
const selectUvIndex = () => document.querySelector(".uv_index");

// sidebar
const selectSideBar = () => document.querySelector(".sidebar");
const selectWeekForecast = () =>
  document.querySelector(".sidebar .week_forecast");
const selectWeekForecastList = () =>
  document.querySelector(".sidebar .week_forecast_list");
const selectTodayForecastList = () =>
  document.querySelector(".sidebar .today_forecast_list");

// city search
const selectCitySearch = () => document.querySelector(".search input");

// top container
const selectCityName = () => document.querySelector(".info h2");
const selectRainChance = () => document.querySelector(".avg_humidity");
const selectTemperature = () => document.querySelector(".temperature");

// today's forecast
const selectTodaysForecast = () => document.querySelector(".block");

// air conditions
const selectAirConditions = () => document.querySelector(".air_conditions");
const selectSeeMoreBtn = () => document.querySelector(".see_more");

// ===============================================================================
// SEE MOORE
// see more features
const selectSeeMoreFeatures = () =>
  document.querySelector(".see_more_features");
const selectSeeMoreForecastTodays = () =>
  document.querySelector(".todays .cards");
const selectSeeMoreForecastFuture = () => document.querySelector(".future");

// ===============================================================================
// CITIES
const selectCitiesBlock = () => document.querySelector(".cities_block");
const selectAllCitiesBlocks = () => document.querySelectorAll(".city_block");
const selectActiveCityContainer = () =>
  document.querySelector(".active_city_container");
const selectActiveCityForecastsToday = () =>
  selectActiveCityContainer().querySelector(".forecasts .todays .cards");
const selectActiveCityForecastsFuture = () =>
  selectActiveCityContainer().querySelector(".forecasts .future");

// ===============================================================================
// MAP
const selectMapBlock = () => document.querySelector(".map_container .map");
const selectCityOnMap = () => document.querySelector(".city_on_map");

export {
  selectBody,
  selectLoader,
  selectMyLocation,
  selectCities,
  selectMap,
  selectSettings,
  selectContainer,
  selectCurrentWeatherIcon,
  selectRealFeel,
  selectChanceOfRain,
  selectWind,
  selectUvIndex,
  selectSideBar,
  selectWeekForecast,
  selectWeekForecastList,
  selectTodayForecastList,
  selectCitySearch,
  selectCityName,
  selectRainChance,
  selectTemperature,
  selectSeeMoreBtn,
  selectAirConditions,
  selectTodaysForecast,
  selectSeeMoreFeatures,
  selectSeeMoreForecastTodays,
  selectSeeMoreForecastFuture,
  selectCitiesBlock,
  selectAllCitiesBlocks,
  selectActiveCityContainer,
  selectActiveCityForecastsToday,
  selectActiveCityForecastsFuture,
  selectMapBlock,
  selectCityOnMap,
};
