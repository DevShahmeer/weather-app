import { createSlice } from "@reduxjs/toolkit";
import { getAirPollutionByLatLon } from "../thunks/airPollution";

const initialState = {
    isLoading: false,
    isError: undefined,
    data:{}
}

export const airPollutionSlice = createSlice({
    name: 'airPollution',
    initialState,
    reducers:{},
    extraReducers: {
        [getAirPollutionByLatLon.pending]: (state) => {
            state.isLoading = true;
        },
        [getAirPollutionByLatLon.fulfilled]: (state, {payload}) => {
            state.isLoading =false;
            state.data = payload;
        },
        [getAirPollutionByLatLon.rejected]: (state, {payload}) => {
            const {message} = payload;
            state.isError = message;
            state.isLoading = false;
        } 
    }
})

export default airPollutionSlice.reducer;
