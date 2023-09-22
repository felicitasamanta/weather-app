const CITIES_KEY = "cities";
const COUNTRY_CODE_KEY = "country_code";

const getCities = () => JSON.parse(localStorage.getItem(CITIES_KEY) || `[]`);

const updateCities = (cities) =>
  localStorage.setItem(CITIES_KEY, JSON.stringify(cities));

const getCoutryCode = () => {
  return localStorage.getItem(COUNTRY_CODE_KEY);
};

const updateCountryCode = (country_code) => {
  localStorage.setItem(COUNTRY_CODE_KEY, country_code);
};

export { getCities, updateCities, getCoutryCode, updateCountryCode };
