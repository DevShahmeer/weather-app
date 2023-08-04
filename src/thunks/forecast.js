import * as ForecastAPI from '../api/forecast';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getForecastByLatLon = createAsyncThunk(
    'forecast/getForecastByLatLon', async ({lat, lon}, {rejectWithValue}) => {
        try {
            return await ForecastAPI.getForecastByLatLon(lat, lon);
        } catch(e) {
            rejectWithValue(e);
        }
    }
)
export const getForecastByCity = createAsyncThunk(
    'forecast/getForecastByCity', async ({city}, {rejectWithValue}) => {
        try {
            return await ForecastAPI.getForecastByCity(city);
        } catch(e) {
            rejectWithValue(e);
        }
    }
)

