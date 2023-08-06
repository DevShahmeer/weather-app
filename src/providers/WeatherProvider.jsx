import React, { useEffect, useState} from "react";
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { weatherContext } from "./weatherContext";
import * as WeatherThunkActions from "../thunks/weather";
import * as ForecastThunkActions from "../thunks/forecast";
import * as AirPollutionThunkActions from "../thunks/airPollution";
import * as WeatherAction from "../reducers/weather";
import * as Constants from "../utils/constants";
import * as Utils from "../utils/index";

const WeatherProvider = ({ children }) => {
  // Redux state Management 
  const dispatch = useDispatch();
  const weatherData = useSelector(state => state.weather);
  const airPollutionData = useSelector(state => state.airPollution);
  const forecast = useSelector(state => state.forecast);

  // Component states
  const [error, setError] = useState(undefined);
  const [info, setInfo] = useState(undefined);
  const [model, setModel] = useState(true);
  const [city, setCity] =useState('');
  const [lat, setLat] = useState(undefined);
  const [lon, setLon] = useState(undefined);

  const hideModel = () => {
    setModel(prevState => !prevState);
    Utils.setLocalStorageItem(Constants.LOCAL_STORAGE_KEY_WELCOME_MODEL, true);
  }

  const hideError = () => {
    setError(undefined);
    dispatch(WeatherAction.setError(false));
  }

  const getGeoPosition = async () => {
    // A friend is sharing the link
    if (Utils.getURLParam(Constants.URL_PARAM_LAT) && Utils.getURLParam(Constants.URL_PARAM_LON)) {
      setLat(Utils.getURLParam(Constants.URL_PARAM_LAT));
      setLon(Utils.getURLParam(Constants.URL_PARAM_LON));
      return;
    }

  const positionLocalStorage = Utils.getLocalStorageItem(Constants.LOCAL_STORAGE_KEY_GPS_POSITION);
  if (positionLocalStorage !== null){
    setLat(positionLocalStorage.lat);
    setLon(positionLocalStorage.lon);
  }

  try {
    const { latitude, longitude } = await Utils.getBrowserGeoPosition();
    if(!positionLocalStorage) {
      setLat(latitude);
      setLon(longitude);
      Utils.savePosition(latitude, longitude);
    } 
  } catch (e) {
      setError(e);
      
    }
  }

  useEffect(()=> {
    getGeoPosition();
  }, []);

  useEffect(()=> {
    if (lat && lon) {
      dispatch(WeatherThunkActions.getWeatherByLatLon({lat, lon}));
      dispatch(AirPollutionThunkActions.getAirPollutionByLatLon({lat, lon}));
      dispatch(ForecastThunkActions.getForecastByLatLon({lat, lon}));
    }
  }, [dispatch, lat, lon]);

  const searchByCity = () => {
    if(city && city !== ''){
      dispatch(WeatherThunkActions.getWeatherByCity({city}));
      dispatch(ForecastThunkActions.getForecastByLatLon({city}));
    }
  }

  const copyShareUrl = () => {
    Utils.placeLinkIntoClipBoard().then(() => {
      setInfo(Constants.MESSAGE_URL_COPIED);
    });
  }

  const contextValue = {
    dispatch,
    error,
    hideError,
    city,
    setCity,
    lat,
    setLat,
    lon,
    setLon,
    model,
    hideModel,
    info,
    setInfo,
    weatherData,
    forecast,
    airPollutionData,
    searchByCity,
    copyShareUrl

  }

  return (
    <weatherContext.Provider value={contextValue}>
      {children}
    </weatherContext.Provider>
  )
}

WeatherProvider.PropType = {
  children: PropTypes.node.isRequired
}

export default WeatherProvider;

