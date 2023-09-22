import * as templates from "../../common/templates.js";
import * as selectors from "../../common/selectors.js";
import * as dates from "../../../common/dates.js";
import * as helpers from "../../common/helpers.js";
import * as view from "../view.js";

const render = ({
  gray = true,
  no_padding = false,
  gray_children = false,
  scroll = false,
} = {}) => {
  if (selectors.selectSideBar()) selectors.selectSideBar().remove();

  selectors
    .selectBody()
    .insertAdjacentHTML("beforeend", templates.sidebar_container);

  if (gray) selectors.selectSideBar().classList.add("gray");
  if (no_padding) selectors.selectSideBar().classList.add("no_padding");
  if (gray_children) selectors.selectSideBar().classList.add("gray_children");
  if (scroll) selectors.selectSideBar().classList.add("scroll");
};

const renderWeekForecast = ({
  future_forecast,
  days = 7,
  container = selectors.selectSideBar(),
  placement = "afterbegin",
  small = false,
}) => {
  if (selectors.selectWeekForecast()) {
    selectors.selectWeekForecast().remove();
  }

  container.insertAdjacentHTML(
    placement,
    templates.week_forecast.replace("%days%", days)
  );

  if (small) selectors.selectWeekForecastList().classList.add("small");

  selectors.selectWeekForecastList().innerHTML = future_forecast
    .slice(0, days)
    .map((day) =>
      templates.week_forecast_item
        .replace("%date%", dates.getWeekDay(day.date_to_check))
        .replace("%icon%", day.icon)
        .replace("%max_temp_c%", helpers.roundNumber(day.max_temp_c))
        .replace("%min_temp_c%", helpers.roundNumber(day.min_temp_c))
    )
    .join("");
};

const renderTodayForecast = ({ see_more_todays_forecast }) => {
  selectors
    .selectSideBar()
    .insertAdjacentHTML("afterbegin", templates.sidebar_today_forecast);

  selectors.selectTodayForecastList().innerHTML += see_more_todays_forecast
    .map((hour) =>
      templates.sidebar_today_forecast_item
        .replace("%time%", hour.time)
        .replace("%icon%", hour.icon)
        .replace("%temp_c%", helpers.roundNumber(hour.temp_c))
    )
    .join("");
};

const renderCityInfo = ({ city }) => {
  selectors
    .selectSideBar()
    .insertAdjacentHTML(
      "afterbegin",
      templates.current_place_weather
        .replace("%place%", city.city)
        .replace("%avg_humidity%", city.weather.weather.avg_humidity)
        .replace("%temp_c%", helpers.roundNumber(city.weather.weather.temp_c))
        .replace("%current_icon%", city.weather.weather.current_icon)
    );
};

const renderInitialPageSidebar = ({ weather }) => {
  render();
  renderWeekForecast(weather);
};

const renderSeeMoreSidebar = ({ weather }) => {
  render({ gray: false, no_padding: true, gray_children: true });
  renderTodayForecast({
    see_more_todays_forecast: weather.see_more_todays_forecast,
  });
  renderWeekForecast({
    future_forecast: weather.future_forecast,
    placement: "beforeend",
    small: true,
  });
};

const renderCitiesPageSidebar = ({ city }) => {
  render({ gray: false, no_padding: true, gray_children: false });
  renderTodayForecast({
    see_more_todays_forecast: city.weather.see_more_todays_forecast,
  });
  renderCityInfo({ city });
  renderWeekForecast({
    future_forecast: city.weather.future_forecast,
    placement: "beforeend",
    days: 3,
  });
};

const renderMapSidebar = (cities) => {
  render({ gray: false, no_padding: true, gray_children: true, scroll: true });
  view.renderCitiesBlock(cities, selectors.selectSideBar());
};

export {
  renderInitialPageSidebar,
  renderSeeMoreSidebar,
  renderCitiesPageSidebar,
  renderMapSidebar,
};
