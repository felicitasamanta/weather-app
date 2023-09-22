const supported_hours = [6, 9, 12, 15, 18, 21];
const see_more_supported_hours = [9, 15, 21];

const onlyDate = (date) => date.toLocaleDateString();

const onlyTime = (date, country_code = "us") => {
  let hour = new Date(date);
  return hour.toLocaleTimeString(country_code, {
    hour: "2-digit",
    minute: "2-digit",
  });
};

const getWeekDay = (date_to_check) => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const date = new Date(date_to_check);

  if (onlyDate(today) === onlyDate(date)) return "Today";
  if (onlyDate(tomorrow) === onlyDate(date)) return "Tomorrow";
  else return new Intl.DateTimeFormat("en", { weekday: "long" }).format(date);
};

export { supported_hours, see_more_supported_hours, onlyTime, getWeekDay };
