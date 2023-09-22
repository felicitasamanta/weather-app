import * as selectors from "../../common/selectors.js";
import * as templates from "../../common/templates.js";
import * as helpers from "../../common/helpers.js";

const renderLocationName = (city, country) => {
  const cityModified = helpers.toUpperCase(city);
  return `${cityModified}, ${country}`;
};

const renderCurrentPlaceWeather = (weather, city, country) => {
  const place = renderLocationName(city, country);
  selectors
    .selectContainer()
    .insertAdjacentHTML(
      "afterbegin",
      templates.current_place_weather
        .replace("%place%", place)
        .replace("%avg_humidity%", weather.weather.avg_humidity)
        .replace("%temp_c%", helpers.roundNumber(weather.weather.temp_c))
        .replace("%current_icon%", weather.weather.current_icon)
    );
};

export { renderCurrentPlaceWeather };
