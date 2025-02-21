import React from "react";
import FormattedDate from "./FormattedDay";
import Temperature from "./Temperature";

export default function Info(props) {
  return (
    <div className='Info'>
      <div className='temperature'>
        <h1>
          <Temperature celsius={props.data.temperature} />
        </h1>
      </div>
      <div className='city'>
        <h4>
          {props.data.city}, {props.data.country}
        </h4>
      </div>
      <ul>
        <li className='date'>
          <FormattedDate date={props.data.date} />
        </li>
        <li className='text-capitalize description'>
          {props.data.description}
        </li>
      </ul>
      <div className='forecast'>
        <ul>
          <li>Monday ☀︎ 1° 10°</li>
        </ul>
      </div>
    </div>
  );
}
