import React from "react";
export default function Icon(props) {
  const codeMapping = {
    "clear-sky-day": "clear-sky-day",
    "clear-sky-night": "clear-sky-night",
    "few-clouds-day": "few-clouds-day",
    "few-clouds-night": "few-clouds-night",
    "scattered-clouds-day": "scattered-clouds-day",
    "scattered-clouds-night": "scattered-clouds-night",
    "broken-clouds-day": "broken-clouds-day",
    "broken-clouds-night": "broken-clouds-night",
    "shower-rain-day": "shower-rain-day",
    "shower-rain-night": "shower-rain-night",
    "rain-day": "rain-day",
    "rain-night": "rain-night",
    "thunderstorm-day": "thunderstorm-day",
    "thunderstorm-night": "thunderstorm-night",
    "snow-day": "snow-day",
    "snow-night": "snow-night",
    "mist-day": "mist-day",
    "mist-night": "mist-night",
  };
  return (
    <div>
      <img
        src={`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${
          codeMapping[props.code]
        }.png`}
        alt={props.code}
        size={props.size}
      />
    </div>
  );
}
