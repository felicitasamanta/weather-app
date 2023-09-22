import * as selectors from "../../ui/common/selectors.js";
import * as templates from "../../ui/common/templates.js";

const { Map } = await google.maps.importLibrary("maps");
const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

let map;
let marker;

const createCityOnMap = ({ city, weather }) => {
  const city_on_map = document.createElement("div");

  city_on_map.className = "city_on_map";
  city_on_map.innerHTML = templates.city_on_map
    .replace("%city%", city)
    .replace("%icon%", weather.weather.current_icon)
    .replace("%temp_c%", weather.weather.temp_c);

  return city_on_map;
};

const setMarker = async ({ position, city }) => {
  if (marker) marker.setMap(null);

  marker = new AdvancedMarkerElement({
    position,
    map,
    content: createCityOnMap(city),
  });
};

const initMap = async ({ center, initial_city_with_weather }) => {
  const styled_map_type = new google.maps.StyledMapType(
    [
      {
        featureType: "administrative.country",
        elementType: "labels.text",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "labels",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "administrative.locality",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "administrative.province",
        elementType: "labels.text",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "landscape.natural",
        elementType: "geometry.fill",
        stylers: [
          {
            weight: 1,
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "labels.text",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "road",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "road.local",
        elementType: "labels",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "transit.station.airport",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "transit.station.airport",
        elementType: "geometry.fill",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "transit.station.airport",
        elementType: "geometry.stroke",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "transit.station.bus",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#57c5f4",
          },
        ],
      },
    ],
    { name: "Styled Map" }
  );

  map = new Map(selectors.selectMapBlock(), {
    center,
    scrollwheel: false,
    draggable: false,
    zoom: 7,
    disableDefaultUI: true,
    mapId: `b398ab1abdf067c2`,
  });

  setMarker({
    position: center,
    city: initial_city_with_weather,
  });

  map.mapTypes.set("styled_map", styled_map_type);
  map.setMapTypeId("styled_map");
};

const center = async ({ lat, long, city_with_weather }) => {
  map.panTo({ lat, lng: long });

  setMarker({ position: { lat, lng: long }, city: city_with_weather });
};

export { initMap, center };
