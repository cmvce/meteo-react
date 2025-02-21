import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./Weather.css";
import axios from "axios";
export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function getResponse(response) {
    setWeather({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      date: new Date(response.data.time * 1000),
    });
  }

  function click(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    let key = "80oc158tb64caae306c6eb4bf7cef14f";
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}`;
    axios.get(url).then(getResponse);
  }
  return (
    <div className='Weather'>
      <div className='form-box'>
        <form onSubmit={click}>
          <input
            type='text'
            placeholder='Enter a city...'
            className='text-box'
            autoFocus='on'
            onChange={updateCity}
          />

          <button className='btn '>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
      </div>

      <div className='temperature'>
        <h1>
          <span className='temperature'>19°</span>
          <span className='unit'>C</span>
        </h1>
      </div>
      <div className='city'>
        <h4>Lausanne, Switzerland</h4>
      </div>
      <div className='forecast'>
        <ul>
          <li>Monday ☀︎ 1° 10°</li>
        </ul>
      </div>
    </div>
  );
}
