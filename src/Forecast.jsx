import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";
import "./Forecast.css";
export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState("");

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function getResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className='Forecast'>
        {forecast.map(function (dailyForecast, index) {
          if (index < 5) {
            return (
              <div className='forecast-data' key={index}>
                <ForecastDay data={dailyForecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    const lon = props.coordinates.longitude;
    const lat = props.coordinates.latitude;
    let key = "80oc158tb64caae306c6eb4bf7cef14f";
    let url = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${key}&units=metric`;
    axios.get(url).then(getResponse);
    return null;
  }
}
