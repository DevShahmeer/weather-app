import { createSlice } from "@reduxjs/toolkit";
import { getWeatherByCity, getWeatherByLatLon } from "../api/weather";

const initialState = {
    isLoading: false,
    isError: false,
    data: {}
}

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setError: (state, action) => {
            const { payload } = action;
            state.isError = payload;
        }
    },
    extraReducers: {
        [getWeatherByLatLon.pending]: (state) => {
            state.isError = undefined;
            state.isLoading = true;
        },
        [getWeatherByLatLon.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.data = payload;
        },
        [getWeatherByLatLon.rejected]: (state, {payload}) => {
            const {message} = payload;
            state.isError = message;
            state.isLoading = false;
        },
        [getWeatherByCity.pending]: (state) => {
            state.isError = undefined;
            state.isLoading = true;
        },
        [getWeatherByCity.fulfilled]: (state, {payload})=> {
            state.isLoading = false;
            state.data = payload;
        },
        [getWeatherByCity.rejected]: (state, {payload}) => {
            const {message} = payload;
            state.isError = message;
            state.isLoading = false;
        }
    }
})

export const {setError} = weatherSlice.actions;
export default weatherSlice.reducer;