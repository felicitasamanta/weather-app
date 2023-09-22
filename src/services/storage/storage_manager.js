import * as storage from "./storage.js";
import * as helpers from "../../ui/common/helpers.js";

const getCities = () => storage.getCities();

const addCity = ({ city }) => {
  const cities = getCities();

  city = helpers.toUpperCase(city);

  if (
    cities.length === 0 ||
    !cities.some((city_to_check) => city_to_check.city === city)
  )
    cities.push({ city });

  storage.updateCities(cities);
};

const getCountryCode = () => storage.getCoutryCode();

const updateCountryCode = (country_code) => {
  storage.updateCountryCode(country_code);
};

export { getCities, addCity, getCountryCode, updateCountryCode };
