import React from 'react';
import { useWeather } from '../../providers/weatherContext';
import {
  convertKelvinToFahrenheit,
  getWeatherIcon,
  resetApp
} from "../../utils";
import Loader from '../Loader';

const CurrentWidget = () => {
  const { weatherData, copyShareUrl } = useWeather();

  if (!weatherData || !weatherData.data) {
    return <Loader />
  }

  if (weatherData.loading || Object.keys(weatherData.data).length === 0) {
    return <Loader />
  }

  console.log("weatherData.data:", weatherData.data);
  const fullWeatherInfo = weatherData.data;
  const { main, name: location, weather} = fullWeatherInfo;
  const { temp, feels_like, humidity, pressure, temp_max, temp_min } = main;
  const { main: mainDetail, icon, description } = weather[0];


  return (
    <div>
      <div className="widget weather-detail">
        <div className="widget-actions">
          <button onChange={resetApp}>Reset</button>
          <button onChange={copyShareUrl}>Share</button>
        </div>
        <h2>{location}</h2>
        <img className="icon" src={getWeatherIcon(icon)} alt={icon} />
        <p>{description}</p>
        <h3>{convertKelvinToFahrenheit(temp)}º</h3>
        <p>{mainDetail}</p>
      </div>
      <div className="weather-extra-wrapper my-other-step">
        <div className="widget weather-extra bg-extra1">
          <p><span>Temp</span> | <span>{convertKelvinToFahrenheit(temp)}º</span></p>
          <p><span>Feels like</span> | <span>{convertKelvinToFahrenheit(feels_like)}º</span></p>
        </div>
        <div className="widget weather-extra bg-extra2">
          <p><span>Humidity</span> | <span>{humidity}</span></p>
          <p><span>Pressure</span> | <span>{pressure}</span></p>
        </div>
        <div className="widget weather-extra bg-extra3">
          <p><span>Temp max</span> | <span>{convertKelvinToFahrenheit(temp_max)}</span></p>
          <p><span>Temp min</span> | <span>{convertKelvinToFahrenheit(temp_min)}</span></p>
        </div>
      </div>
    </div>
  )
}

export default CurrentWidget