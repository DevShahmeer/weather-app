import React from 'react'
import '../styles/Dashboard.css';
import { getLocalStorageItem } from "../utils";
import { LOCAL_STORAGE_KEY_WELCOME_MODEL } from '../utils/constants';
import { useWeather } from '../providers/weatherContext';
import DailyWidget from './widgets/DailyWidget';
import Notification from './Notification';
import Search from './Search';

const DashBoard = () => {

    const {
        model,
        hideModel,
        weatherData,
        error,
        hideError,
        info,
        setInfo,
    } = useWeather();

    const renderErrorIfAny = () => {
      if ((weatherData && weatherData.error) || error) {
        let withError = error;
        if (weatherData && weatherData.error) {
          withError = weatherData.error;
        }
        return <Notification message={withError} hideNotification={hideError} type="error" />
      }
    }

    const renderNotificationIfAny = () => {
      if(info) {
        return <Notification message={info} hideNotification={() => setInfo(undefined) }type="info" />
      }
    }

    const renderModelIfNeed = () => {
      if(!model){
        return;
      }
    }

    

  return (
    <div className='main-container' >
      <div className="main-wrapper">
        <div className="main-content">
          <div className='main-title'>
            <div className="title">
              <Search/>
              <h1>Weather</h1>
            </div>
          </div>
          {/* Forecast 5 days */}
          <DailyWidget/>
          <h3 className="widget-title">More data from OpenWeather</h3>
        </div>
      </div>
    </div>
  )
}

export default DashBoard