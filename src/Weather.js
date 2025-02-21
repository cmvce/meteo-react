import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./Weather.css";
import axios from "axios";
import Info from "./Info";
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
      city: response.data.city,
      country: response.data.country,
    });
    console.log(response);
  }

  function click(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    /*     let apiKey = "80oc158tb64caae306c6eb4bf7cef14f";
     */ let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=80oc158tb64caae306c6eb4bf7cef14f`;
    axios.get(url).then(getResponse);
  }

  return (
    <div className='Weather'>
      <form onSubmit={click}>
        <input
          type='text'
          placeholder='Enter a city...'
          className='text'
          autoFocus='on'
          onChange={updateCity}
        />

        <button className='btn '>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>

        <Info data={weather} />
      </form>
    </div>
  );
}
