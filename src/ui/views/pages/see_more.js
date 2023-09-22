import * as menu from "../common/menu.js";
import * as container from "../common/container.js";
import * as search from "../common/search.js";
import * as sidebar from "../common/sidebar.js";
import * as common from "./common.js";
import * as selectors from "../../common/selectors.js";
import * as templates from "../../common/templates.js";
import * as icons from "../../../assets/icons/icons.js";

const allIcons = icons.icons;

const render = (weather, city, country) => {
  container.render(`see_more_container`);
  menu.render();
  common.renderCurrentPlaceWeather(weather, city, country);
  search.render();
  renderFeatures(weather);
  sidebar.renderSeeMoreSidebar({ weather });
};

const renderFeatures = (weather) => {
  selectors.selectSeeMoreFeatures().innerHTML += weather.see_more_air_conditions
    .map((feature) =>
      templates.see_more_features
        .replace("%icon%", allIcons[feature.icon])
        .replace("%title%", feature.title)
        .replace("%feature%", feature.feature)
    )
    .join("");
};

export { render };
