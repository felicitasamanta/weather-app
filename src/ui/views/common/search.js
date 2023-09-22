import * as selectors from "../../common/selectors.js";
import * as templates from "../../common/templates.js";

const render = () => {
  selectors
    .selectContainer()
    .insertAdjacentHTML("afterbegin", templates.search);
};

const clear = () => {
  selectors.selectCitySearch().value = "";
};

export { render, clear };
