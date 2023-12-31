import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from '../reducers/weather';
import forecastReducer from '../reducers/forecast';
import airPollutionReducer from "../reducers/airPollution";

export const store = configureStore({
    reducer: {
        weather: weatherReducer,
        airPollution: airPollutionReducer,
        forecast: forecastReducer,
    },
});