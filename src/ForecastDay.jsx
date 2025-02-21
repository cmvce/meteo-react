import React from "react";
import Icon from "./Icon";

export default function ForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDate();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div className='ForecastDay'>{day()}</div>
      <Icon code={props.data.condition.icon} size={30} />
      <div className='forecast-temperature'>
        <span className='forecast-max-temp'>{maxTemp()}</span>
        <span className='forecast-min-temp'>{minTemp()}</span>
      </div>
    </div>
  );
}
