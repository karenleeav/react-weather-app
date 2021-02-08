import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props){
    return(<div className = "WeatherInfo">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
          <FormattedDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
     
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature d-flex">
            <img src={props.data.imgUrl} alt={props.data.description} className="float-left" />
            <div className="float-left">
              <strong>{Math.round(props.data.temperature)}</strong>
              <span className="units">
                <a href="/">
                  °C
                </a>{" "}
                | <a href="/">°F</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              humidity: {props.data.humidity}%
            </li>
            <li>
              wind: {Math.round(props.data.wind)} km/h
            </li>
          </ul>
        </div>
      </div>
        </div>
    )
    ;
}