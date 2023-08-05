import { createContext, useContext } from "react";

export const weatherContext = createContext({});
export const ERROR_CONTEXT_OUTSIDE =  "Weather context cannot be outside of WeatherProvider";

export const useWeather = () => {
    const contextValue = useContext(weatherContext);

    if(contextValue === undefined) {
        throw new Error(ERROR_CONTEXT_OUTSIDE);
    }

    return contextValue;
}