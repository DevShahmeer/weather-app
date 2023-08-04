import { createSlice } from "@reduxjs/toolkit";
import { getForecastByCity, getForecastByLatLon } from "../thunks/forecast"; 


const initialState = {
    isLoading: false,
    isError: undefined,
    data : {}
}

export const forecastSlice = createSlice({
    name: 'forecast',
    initialState,
    reducers: {},
    extraReducers: {
        [getForecastByLatLon.pending]: (state) => {
            state.isLoading = true;
            state.isError = undefined;
        },
        [getForecastByLatLon.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.data = payload;
        },
        [getForecastByLatLon.rejected]: (state, {payload}) => {
            const {message} = payload;
            state.payload = message;
            state.isLoading = false;
        },
        [getForecastByCity.pending]: (state) => {
            state.isLoading = true;
            state.isError = undefined;
        },
        [getForecastByCity.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.data = payload;
        },
        [getForecastByCity.rejected]: (state, {payload}) => {
            const {message} = payload;
            state.payload = message;
            state.isLoading = false;
        }
    }
})

export default forecastSlice.reducer;