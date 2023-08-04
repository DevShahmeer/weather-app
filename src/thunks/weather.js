import * as WeatherAPI from '../api/weather';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const  getWeatherByLatLon = createAsyncThunk(
    'weather/getWeatherByLatLon',
    async ({lat, lon}, { rejectWithValue }) => {
        try {
            return await WeatherAPI.getWeatherByLatLon(lat, lon);
        } catch(error) {
            return rejectWithValue(error);
        }
    });

export const getWeatherByCity = createAsyncThunk(
    'weather/getWeatherByCity',
    async ({city}, {rejectWithValue}) => {
        try {
            return await WeatherAPI.getWeatherByCity(city);
        } catch(error) {
            return rejectWithValue(error);
        }
    });