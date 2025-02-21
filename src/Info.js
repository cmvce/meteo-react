import React from "react";
import FormattedDate from "./FormattedDay";
import Temperature from "./Temperature";
import Icon from "./Icon";
export default function Info(props) {
  return (
    <div className='Info'>
      <div className='container'>
        <div className='icon'>
          <Icon code={props.data.icon} size={100} />
        </div>
        <div className='temperature'>
          <h1>
            <Temperature celsius={props.data.temperature} />
          </h1>
        </div>
      </div>
      <div className='city'>
        <h4>
          {props.data.city}, {props.data.country}
        </h4>
      </div>
      <div className='date'>
        <FormattedDate date={props.data.date} />
      </div>
      <div className='description text-capitalize'>
        {props.data.description}
      </div>

      <div className='forecast'></div>
    </div>
  );
}
