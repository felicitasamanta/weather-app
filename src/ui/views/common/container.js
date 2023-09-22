import * as templates from "../../common/templates.js";
import * as selectors from "../../common/selectors.js";

const render = (template = `main_container`) =>
  (selectors.selectBody().innerHTML = templates[template]);

export { render };
