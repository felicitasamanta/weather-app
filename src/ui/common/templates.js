const loader = `
<div class="loader">
  <div class="spinner"></div>
</div>
`;

const menu_item = `
<div class="icon_title %class%">
    <span>%icon%</span>
    <span>%title%</span>
</div>
`;

const search = `
<form class="search">
  <input type="text" placeholder="Search for cities" />
</form>
`;

const main_container = `
<div class="container">
   <div class="middle">
      <span class="title">TODAY'S FORECAST</span>
      <div class="cards">
         <div class="block">
         </div>
      </div>
   </div>
   <div class="bottom">
      <div class="bottom_top">
         <span class="title">AIR CONDITIONS</span>
         <button class="see_more">See more</button>
      </div>
      <div class="air_conditions"></div>
   </div>
</div>
`;

const current_place_weather = `
<div class="top">
   <div class="info">
      <h2>%place%</h2>
      <span class="avg_humidity">Average humidity: %avg_humidity%%</span>
      <span class="temperature">%temp_c%°</span>
   </div>
   <div class="current_weather_icon"><img  src="%current_icon%" style={"width= 130px, height=130px"}></div>
</div>
`;

const todays_forecast = `
<div class="card">
   <span class="time">%time%</span>
   <img class="icon" src="%icon%">
   <span class="temperature">%temp_c%°</span>
</div>
`;

const see_more_features = `
<div class="feature">
   <div class="icon_and_feature">
      <span>%icon%</span>
      <span>%title%</span>
   </div>
   <span class="value">%feature%</span>
</div>
`;

const air_conditions = `
<div class="feature">
   <div class="icon_and_feature">
      <span>%icon%</span>
      <span>%title%</span>
   </div>
   <span>%feature%</span>
</div>
`;

const week_forecast = `
<div class="week_forecast">
   <span>%days%-DAY FORECAST</span>
   <div class="week_forecast_list"></div>
</div>
`;

const week_forecast_item = `
<div class="week_forecast_item">
   <span>%date%</span>
   <div class="icon_description">
      <img src=%icon% style={"width= 60px, height=60px"}>
   </div>
   <span>%max_temp_c%°/%min_temp_c%°</span>
</div>
`;

const see_more_container = `
<div class="container">
   <div class="see_more_features">
   </div>
</div>
`;

const sidebar_container = `
<div class="sidebar"></div>
`;

const sidebar_today_forecast = `
<div class="today_forecast">
   <span>TODAY'S FORECAST</span>
   <div class="today_forecast_list"></div>
</div>
`;

const sidebar_today_forecast_item = `
<div class="today_forecast_item">
   <span class="time">%time%</span>
   <img class="icon" src="%icon%">
   <span class="temperature">%temp_c%°</span>
</div>
`;

const cities_container = `
<div class="container cities_container scroll ">
   <div class="cities_block"></div>
</div>
`;

const active_city_container = `
<div class="active_city_container">
   <div class="forecasts">
      <div class="todays">
         <span>TODAYS'S FORECAST</span> 
         <div class="cards"></div>
      </div>
   <div class="future"><span>3-DAY FORECAST</span> </div>
</div>
`;

const city_container = `
<div class="city_block">
   <div class="icon_city_time">
      <img src="%icon%" style={"width= 60px, height=60px"}>
      <div class="city_time">
         <span class="city">%city%</span>
         <span class="time">%time%</span>
      </div>
   </div>
   <div class="temp">%temp_c%°</div>
</div>
`;

const map_container = `
<div class="container map_container">
   <div class="map"></div>
</div>
`;

const city_on_map = `
<div class="city_on_map">
   <span class="city">%city%</span>
   <img class="icon" src="%icon%">
   <span class="temperature">%temp_c%°</span>
</div>
`;

export {
  loader,
  menu_item,
  search,
  main_container,
  current_place_weather,
  todays_forecast,
  see_more_features,
  air_conditions,
  week_forecast,
  week_forecast_item,
  see_more_container,
  sidebar_container,
  sidebar_today_forecast,
  sidebar_today_forecast_item,
  cities_container,
  active_city_container,
  city_container,
  map_container,
  city_on_map,
};
