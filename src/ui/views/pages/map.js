import * as menu from "../common/menu.js";
import * as search from "../common/search.js";
import * as container from "../common/container.js";
import * as sidebar from "../common/sidebar.js";
import * as selectors from "../../common/selectors.js";

const render = async (cities) => {
  container.render(`map_container`);
  menu.render();
  search.render();
  sidebar.renderMapSidebar(cities);
};

export { render };
