import * as selectors from "./selectors.js";
import * as templates from "./templates.js";

const loader = (action) => {
  const body = selectors.selectBody();

  if (action === "hide") {
    setTimeout(() => {
      const loader = selectors.selectLoader();
      if (loader) loader.remove();
    });
    return;
  }

  body.insertAdjacentHTML("afterbegin", templates.loader);
};

const debounce = (func, delay = 2000) => {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const roundNumber = (number) => Math.round(number);

const toUpperCase = (string) => {
  const trimmed = string.trim();

  return `${trimmed.slice(0, 1).toUpperCase()}${trimmed.slice(1)}`;
};

const getSearchValue = () => selectors.selectCitySearch().value;

export { loader, debounce, roundNumber, toUpperCase, getSearchValue };
