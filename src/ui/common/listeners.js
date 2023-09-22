import * as selectors from "../../ui/common/selectors.js";

const onSearch = (callback) => {
  const city_search = selectors.selectCitySearch();
  city_search.addEventListener("keyup", callback);
};

const onMyLocationClick = (callback) => {
  const my_location = selectors.selectMyLocation();
  my_location.addEventListener("click", callback);
};

const onSeeMoreClick = (callback) => {
  const see_more = selectors.selectSeeMoreBtn();
  see_more.addEventListener("click", callback);
};

const onCitiesClick = (callback) => {
  const cities = selectors.selectCities();
  cities.addEventListener("click", callback);
};

const onCityBlockClick = (callback) => {
  const cities_blocks = selectors.selectAllCitiesBlocks();
  cities_blocks.forEach((city_block) =>
    city_block.addEventListener("click", callback)
  );
};

const onMapClick = (callback) => {
  const map = selectors.selectMap();
  map.addEventListener("click", callback);
};

export {
  onSearch,
  onMyLocationClick,
  onSeeMoreClick,
  onCitiesClick,
  onCityBlockClick,
  onMapClick,
};
