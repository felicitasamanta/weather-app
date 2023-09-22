import * as menu from "../common/menu.js";
import * as container from "../common/container.js";
import * as search from "../common/search.js";
import * as sidebar from "../common/sidebar.js";
import * as common from "./common.js";
import * as selectors from "../../common/selectors.js";
import * as templates from "../../common/templates.js";
import * as helpers from "../../common/helpers.js";
import * as icons from "../../../assets/icons/icons.js";

const allIcons = icons.icons;

const render = (weather, city, country) => {
  container.render();
  menu.render();
  common.renderCurrentPlaceWeather(weather, city, country);
  search.render();
  renderTodaysForecast(weather);
  renderAirConditions(weather);
  sidebar.renderInitialPageSidebar({ weather });
};

const renderTodaysForecast = ({ todays_forecast }) => {
  selectors.selectTodaysForecast().innerHTML += todays_forecast
    .map((hour) =>
      templates.todays_forecast
        .replace("%time%", hour.time)
        .replace("%icon%", hour.icon)
        .replace("%temp_c%", helpers.roundNumber(hour.temp_c))
    )
    .join("");
};

const renderAirConditions = ({ air_conditions }) => {
  selectors.selectAirConditions().innerHTML += air_conditions
    .map((feature) =>
      templates.air_conditions
        .replace("%icon%", allIcons[feature.icon])
        .replace("%title%", feature.title)
        .replace("%feature%", feature.feature)
    )
    .join("");
};

export { render };
