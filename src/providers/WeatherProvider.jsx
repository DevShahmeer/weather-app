import React, { useEffect, useState} from "react";
import PropType from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { weatherContext } from "./weatherContext";
import * as WeatherThunkActions from "../thunks/weather";
import * as ForecastThunkActions from "../thunks/forecast";
import * as AirPollutionThunkActions from "../thunks/airPollution";
import * as WeatherAction from "../reducers/weather";
import * as Constants from "../utils/constants";
import * as Utils from "../utils/constants";

const WeatherProvider = () => {
  return (
    <div>WeatherProvider</div>
  )
}

export default WeatherProvider