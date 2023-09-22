import * as templates from "../../common/templates.js";
import * as selectors from "../../common/selectors.js";
import * as icons from "../../../assets/icons/icons.js";

const render = () => {
  selectors.selectBody().insertAdjacentHTML(
    "afterbegin",
    `<div class="menu">
      ${icons.menu_icons
        .map((item) =>
          templates.menu_item
            .replace("%class%", item.class)
            .replace("%icon%", item.icon)
            .replace("%title%", item.title)
        )
        .join("")}
    </div>`
  );
};

export { render };
