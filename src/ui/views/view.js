import * as templates from "../common/templates.js";
import * as helpers from "../common/helpers.js";

const renderCitiesBlock = (cities, selector) => {
  selector.innerHTML += cities
    .map((city) => {
      return templates.city_container
        .replace("%icon%", city.weather.weather.current_icon)
        .replace("%time%", city.weather.weather.hour)
        .replace("%city%", city.city)
        .replace("%temp_c%", helpers.roundNumber(city.weather.weather.temp_c));
    })
    .join("");
};

export { renderCitiesBlock };
