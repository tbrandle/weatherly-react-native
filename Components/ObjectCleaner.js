import Weatherly from './Weatherly';
import { AsyncStorage } from 'react-native';

const date = (weather) => {
  const dateObject = {
    weekday: weather.forecast.simpleforecast.forecastday[0].date.weekday,
    month: weather.forecast.simpleforecast.forecastday[0].date.monthname,
    date: weather.forecast.simpleforecast.forecastday[0].date.day,
  };
  return dateObject;
};

const currentForecast = (weather) => {
  const currentObject = {
    city: weather.location.city,
    state: weather.location.state,
    currentTemp: weather.current_observation.temp_f,
    high: weather.forecast.simpleforecast.forecastday[0].high.fahrenheit,
    low: weather.forecast.simpleforecast.forecastday[0].low.fahrenheit,
    icon: weather.current_observation.icon_url,
    description: weather.forecast.txt_forecast.forecastday[0].fcttext,
  };
  return currentObject;
};

const hourlyForecast = (weather) => {
  const tempArray = weather.hourly_forecast;
  const hourlyArray = [];
  tempArray.forEach((obj, index) => {
    if (index < 7) {
      hourlyArray.push(tempArray[index] = {
        time: tempArray[index].FCTTIME.civil,
        temp: tempArray[index].temp.english,
        icon: tempArray[index].icon_url,
      });
    }
  });
  return hourlyArray;
};

const tenDayForecast = (weather) => {
  const tempArray = weather.forecast.simpleforecast.forecastday;
  const tenDayArray = [];
  tempArray.forEach((obj, index) => {
    if (index < 10) {
      tenDayArray.push(tempArray[index] = {
        day: tempArray[index].date.weekday,
        icon: tempArray[index].icon_url,
        high: tempArray[index].high.fahrenheit,
        low: tempArray[index].low.fahrenheit,
      });
    }
  });
  return tenDayArray;
};

const objectCleaner = (weather) => {
  if (weather.response.error || weather.response.results) {
    alert(weather.response.error.description)
    AsyncStorage.clear();
    return {};
  }
  const dateObject = date(weather);
  const currentObject = currentForecast(weather);
  const hourlyArray = hourlyForecast(weather);
  const tenDayArray = tenDayForecast(weather);
  return { dateObject, currentObject, hourlyArray, tenDayArray };
}

export default objectCleaner;
