import * as menu from "../common/menu.js";
import * as container from "../common/container.js";
import * as search from "../common/search.js";
import * as sidebar from "../common/sidebar.js";
import * as selectors from "../../common/selectors.js";
import * as view from "../view.js";

const render = (cities) => {
  container.render(`cities_container`);
  menu.render();
  search.render();
  view.renderCitiesBlock(cities, selectors.selectCitiesBlock());
};

const renderActiveCityBlock = (city) => {
  sidebar.renderCitiesPageSidebar({ city });
};

export { render, renderActiveCityBlock };
