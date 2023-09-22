import { removeAccents } from "../../common/utils/remove_accents.js";

const API_KEY = `f778530be1da43bea17e1f5cc075311e`;

const requestOptions = {
  method: "GET",
};

const getLocation = async (position) => {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;

  const response = await fetch(
    `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${long}&format=json&apiKey=${API_KEY}`,
    requestOptions
  );

  const data = await response.json();
  const result = data.results[0];
  const city = result.city;
  const country = result.country;
  const country_code = result.country_code;
  const location = { city, country, country_code, lat, long };

  return location;
};

const getCurrentPosition = () => {
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(resolve);
  });
};

const findCurrentLocation = async () => {
  const position = await getCurrentPosition();

  return getLocation(position);
};

const findSearchedLocation = (searchValue) => {
  return getCityInfo(searchValue);
};

const getCityInfo = async (city) => {
  const response = await fetch(
    `https://api.geoapify.com/v1/geocode/search?city=${removeAccents(
      city
    )}&format=json&apiKey=${API_KEY}
`,
    requestOptions
  );

  const data = await response.json();
  const { country, country_code, lat, lon } = data.results[0];
  const location = { city, country, country_code, lat, long: lon };

  return location;
};

export { findCurrentLocation, findSearchedLocation, getCityInfo };
