import React from "react";
import { useWeather } from "../../providers/weatherContext";
import DailyDetail from "./DailyDetail";
import Loader from "../Loader";

const DailyWidget = () => {
  const { forecast } = useWeather();

  if (!forecast || !forecast.data) {
    return <Loader />;
  }

  if (forecast.loading || Object.keys(forecast.data).length === 0) {
    return <Loader />
  }

  const { list: forecastList } = forecast.data;

  return (
    <>
      <h3 className="widget-title" >Forecast next 5 days</h3>
      <div className="daily-container">
        <div className="daily-wrapper">
          { forecastList && forecastList.map(item => <DailyDetail key={item.dt} data={item}/>) }
        </div>
      </div>
    </>
  );
}

export default DailyWidget;
