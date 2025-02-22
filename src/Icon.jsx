import React from "react";

import "./Icon.css";
import {
  WiDaySunny,
  WiCloudy,
  WiCloud,
  WiDayCloudy,
  WiDayRain,
  WiDaySnowThunderstorm,
  WiNightAltCloudy,
  WiNightAltRain,
  WiNightClear,
  WiSnowflakeCold,
  WiDayRainMix,
  WiNightAltRainMix,
  WiDayThunderstorm,
  WiNightAltThunderstorm,
  WiDayFog,
  WiNightFog,
} from "react-icons/wi";
export default function Icon(props) {
  const codeMapping = {
    "clear-sky-day": WiDaySunny,
    "clear-sky-night": WiNightClear,
    "few-clouds-day": WiCloudy,
    "few-clouds-night": WiNightAltCloudy,
    "scattered-clouds-day": WiDayCloudy,
    "scattered-clouds-night": WiNightAltCloudy,
    "broken-clouds-day": WiCloud,
    "broken-clouds-night": WiNightAltCloudy,
    "shower-rain-day": WiDayRain,
    "shower-rain-night": WiNightAltRain,
    "rain-day": WiDayRainMix,
    "rain-night": WiNightAltRainMix,
    "thunderstorm-day": WiDayThunderstorm,
    "thunderstorm-night": WiNightAltThunderstorm,
    "snow-day": WiDaySnowThunderstorm,
    "snow-night": WiSnowflakeCold,
    "mist-day": WiDayFog,
    "mist-night": WiNightFog,
  };

  const WeatherIcon = codeMapping[props.code];
  return (
    <div>
      {WeatherIcon ? <WeatherIcon size={props.size} /> : <p>Icon not found</p>}
    </div>
  );
}
