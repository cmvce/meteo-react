import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");

  function Celsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  return (
    <div className='WeatherTemperature'>
      <span className='temperature'>{Math.round(props.celsius)}</span>
      <span className='unit'>°C</span>
    </div>
  );
}
