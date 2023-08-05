import {
    ERROR_BROWSER_GEOLOCATION_OFF,
    LOCAL_STORAGE_KEY_GPS_POSITION,
    LOCAL_STORAGE_KEY_WELCOME_MODEL,
    URL_PARAM_LAT, URL_PARAM_LON
} from "./constants";

export const getData = data => new Data(data * 1000).getData();

export const getHour = data => (new Data(data * 1000).toLocaleTimeString("en-US"));


export const getMonth  = data => {
    return new Data(data * 1000).toLocalString('default', {month: 'short'});
}

export const getWeatherIcon = icon => {
    return `https://openweathermap.org/img/wn/${icon}@2x.png`;
}

export const savePosition = (lat, lon) => {
    const position = getLocalStorageItem(LOCAL_STORAGE_KEY_GPS_POSITION);
    const coordinates = {lat, lon};

    if(position) {
        if (position.lat !== lat || position.lon !== lon){
            setLocalStorageItem(LOCAL_STORAGE_KEY_GPS_POSITION, coordinates)
        }
    } else {
        setLocalStorageItem(LOCAL_STORAGE_KEY_GPS_POSITION, coordinates)
    }
}


export const setLocalStorageItem = (name, value) => {
    localStorage.setItem(name, JSON.stringify(value));
}

export const getLocalStorageItem = name => {
    const data = localStorage.getItem(name);
    if (data) {
        return JSON.parse(data);
    }
    return null;
}


export const resetApp = () => {
    window.location.href = window.location.href.split("?")[0];
    setLocalStorageItem(LOCAL_STORAGE_KEY_GPS_POSITION, null);
    setLocalStorageItem(LOCAL_STORAGE_KEY_WELCOME_MODEL, null);
}

export const placeLinkIntoClipBoard = () => {
    const location = getLocalStorageItem(LOCAL_STORAGE_KEY_GPS_POSITION);
    const {lat, lon } = location;
    const link = `${window.location.href}?${URL_PARAM_LAT}=${lat}&${URL_PARAM_LON}=${lon}`
    return navigator.clipboard.writeText(link);
}

export const getURLParam = param  => {
    const queryString = window.location.search;
    const urlParam = new URLSearchParams(queryString);
    return urlParam.get(param);
}


export const  getBrowserGeoPosition = () => {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            return reject(ERROR_BROWSER_GEOLOCATION_OFF);
        }

        navigator.geolocation.getCurrentPosition((position)=> {
            const { latitude, longitude } = position.coords;
            return resolve({ latitude, longitude })
        });
    });
}

