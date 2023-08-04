import * as AirPollutionAPI from '../api/airPollution';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const getAirPollutionByLatLon = createAsyncThunk(
    'airPollution/getAirPollutionByLatLon', 
    async ({lat, lon}, { rejectWithValue }) => {
        try {
            return await AirPollutionAPI.getAirPollutionByLatLon(lat, lon);
        } catch (e) {
            return rejectWithValue(e);
        }
    }
)