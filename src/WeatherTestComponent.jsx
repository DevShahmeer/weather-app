import React, { useEffect } from 'react';
import { getWeatherByLatLon, getWeatherByCity } from './api/weather';
import { getAirPollutionByLatLon } from './api/airPollution';

const WeatherTestComponent = () => {
  useEffect(() => {
    // Test getWeatherByLatLon
    const latitude = 45.7128; // Replace with your desired latitude
    const longitude = -74.0060; // Replace with your desired longitude
    
    getAirPollutionByLatLon(latitude, longitude)
      .then((data)=> {
        console.log('Air Pollution By LatLon', data);
      })
      .catch((error) => {
        console.error('Error fetching weather by LatLon:', error.message);
      });

    getWeatherByLatLon(latitude, longitude)
      .then((data) => {
        console.log('Weather by LatLon:', data);
      })
      .catch((error) => {
        console.error('Error fetching weather by LatLon:', error.message);
      });

    // Test getWeatherByCity
    const city = 'New York'; // Replace with your desired city
    getWeatherByCity(city)
      .then((data) => {
        console.log('Weather by City:', data);
      })
      .catch((error) => {
        console.error('Error fetching weather by City:', error.message);
      });
  }, []);

  return <div>Testing Weather API...</div>;
};

export default WeatherTestComponent;
