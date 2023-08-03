import { fetchData } from "./common";
import { BASE_URL_WEATHER, ERROR_INVALID_CITY, ERROR_INVALID_LAT_LON } from "../utils/constants";

export const getWeatherByLatLon = async (lat_, lon_) => {
  if (!lat_ || !lon_) {
    const error = { message: ERROR_INVALID_LAT_LON }
    throw (error)
  }

  const baseUrl = BASE_URL_WEATHER + "/weather";
  const params = `lat=${lat_}&lon=${lon_}`;
  try {
    const data = await fetchData(baseUrl, params);
    console.log('Weather by LatLon:', data);
    return data;
  } catch (error) {
    console.error('Error fetching weather by LatLon:', error.message);
    throw error;
  }
};

export const getWeatherByCity = async (city_) => {
  if (!city_ || city_ === "" || city_ === " ") {
    const error = { message: ERROR_INVALID_CITY }
    throw (error)
  }

  const baseUrl = BASE_URL_WEATHER + "/weather";
  const params = `q=${city_}`;
  try {
    const data = await fetchData(baseUrl, params);
    console.log('Weather by City:', data);
    return data;
  } catch (error) {
    console.error('Error fetching weather by City:', error.message);
    throw error;
  }
};