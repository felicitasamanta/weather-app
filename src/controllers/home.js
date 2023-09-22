import * as location_service from "../services/geolocation/location.js";
import * as weather_service from "../services/weather/weather.js";
import * as listeners from "../ui/common/listeners.js";
import * as helpers from "../ui/common/helpers.js";
import * as storage_manager from "../services/storage/storage_manager.js";
import * as initial from "../ui/views/pages/initial.js";
import * as cities from "../ui/views/pages/cities.js";
import * as see_more from "../ui/views/pages/see_more.js";
import * as map from "../ui/views/pages/map.js";
import * as search from "../ui/views/common/search.js";
import * as map_API from "../services/geolocation/map_API.js";
import * as sidebar from "../ui/views/common/sidebar.js";

const renderLocation = (weather, city, country) => {
  initial.render(weather, city, country);
  search.clear();
};

const renderInitialPage = async () => {
  helpers.loader(`show`);

  const { city, country, country_code } =
    await location_service.findCurrentLocation();
  const weather = await weather_service.getWeather({ city, country_code });

  initial.render(weather, city, country);

  helpers.loader(`hide`);

  listenSeeMore(weather, city, country);
  listenMainListeners();

  storage_manager.addCity({ city });
  storage_manager.updateCountryCode(country_code);
};

const renderSearchedCityPage = async () => {
  helpers.loader(`show`);

  const search_value = helpers.getSearchValue();
  const country_code = storage_manager.getCountryCode();
  const { city, country } = await location_service.findSearchedLocation(
    search_value
  );
  const weather = await weather_service.getWeather({ city, country_code });

  renderLocation(weather, city, country);

  helpers.loader(`hide`);

  listenMainListeners();
  listenSeeMore(weather, city, country);

  storage_manager.addCity({ city });
};

const renderMyLocationPage = async () => {
  helpers.loader(`show`);

  const country_code = storage_manager.getCountryCode();
  const { city, country } = await location_service.findCurrentLocation();
  const weather = await weather_service.getWeather({ city, country_code });

  renderLocation(weather, city, country);

  helpers.loader(`hide`);

  listenMainListeners();
  listenSeeMore(weather, city, country);
};

const renderSeeMorePage = (weather, city, country) => {
  helpers.loader(`show`);

  see_more.render(weather, city, country);

  helpers.loader(`hide`);

  listenMainListeners();
};

const renderCitiesPage = async () => {
  helpers.loader(`show`);

  const received_cities = storage_manager.getCities();
  const country_code = storage_manager.getCountryCode();
  const weatherPromises = received_cities.map(({ city }) =>
    weather_service.getWeather({ city, country_code })
  );
  const weathers = await Promise.all(weatherPromises);
  const cities_with_weathers = received_cities.map((city, i) => ({
    ...city,
    weather: weathers[i],
  }));
  const initial_active_city = cities_with_weathers[0];

  cities.render(cities_with_weathers);
  cities.renderActiveCityBlock(initial_active_city);

  helpers.loader(`hide`);

  listenMainListeners();
  listenCityBlock();
};

const renderSelectedCityPageBlock = async (e) => {
  const city = e.target
    .closest(".city_block")
    .querySelector(".city").textContent;
  const country_code = storage_manager.getCountryCode();
  const weather = await weather_service.getWeather({
    city,
    country_code,
    fallback_city: "Vilnius",
  });
  const city_with_weather = { city, weather };

  sidebar.renderCitiesPageSidebar({ city: city_with_weather });
};

const renderMapPage = async () => {
  helpers.loader(`show`);

  const received_cities = storage_manager.getCities();
  const country_code = storage_manager.getCountryCode();
  const weatherPromises = received_cities.map(({ city }) =>
    weather_service.getWeather({ city, country_code })
  );
  const weathers = await Promise.all(weatherPromises);
  const cities_with_weathers = received_cities.map((city, i) => ({
    ...city,
    weather: weathers[i],
  }));

  const initial_city_with_weather = cities_with_weathers[0];
  const { lat, long: lng } = await location_service.findCurrentLocation();

  map.render(cities_with_weathers);

  map_API.initMap({ center: { lat, lng }, initial_city_with_weather });
  helpers.loader(`hide`);
  listenMainListeners();
  listenMapCityBlock();
};

const centerSelectedCityOnMap = async (e) => {
  const country_code = storage_manager.getCountryCode();
  const city = e.target
    .closest(".city_block")
    .querySelector(".city").textContent;
  const weather = await weather_service.getWeather({
    city,
    country_code,
    fallback_city: "Vilnius",
  });
  const city_with_weather = { city, weather };
  const { lat, long } = await location_service.getCityInfo(city);

  map_API.center({ lat, long, city_with_weather });
};

const listenSearch = () =>
  listeners.onSearch(helpers.debounce(renderSearchedCityPage));

const listenMyLocation = () =>
  listeners.onMyLocationClick(renderMyLocationPage);

const listenSeeMore = (weather, city, country) =>
  listeners.onSeeMoreClick(() => renderSeeMorePage(weather, city, country));

const listenCities = () => listeners.onCitiesClick(renderCitiesPage);

const listenCityBlock = () =>
  listeners.onCityBlockClick((e) => renderSelectedCityPageBlock(e));

const listenMap = () => listeners.onMapClick(renderMapPage);

const listenMapCityBlock = () => {
  listeners.onCityBlockClick((e) => centerSelectedCityOnMap(e));
};

const listenMainListeners = () => {
  listenSearch();
  listenMyLocation();
  listenCities();
  listenMap();
};

export { renderInitialPage };
