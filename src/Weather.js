import React, {useState} from 'react';
import axios from "axios";
import './Weather.css';

export default function Weather(props) {

  const[weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response){
   
    setWeatherData({
      ready:true,
      temperature:response.data.main.temp,
      wind:response.data.wind.speed,
      city:response.data.name,
      humidity:response.data.main.humidity,
      description:response.data.weather[0].description,
      imgUrl:"https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      date:"Wednesday 07:00"
    })
 
  
  }

  if(weatherData.ready){
  return (
    <div className="Weather">
      <form className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city..."
              className="form-control"
              autoComplete="off"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="search"
              className="btn btn-dark w-100"
            />
          </div>
        </div>
      </form>
      <div className="overview">
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            {" "}
            Last updated: <span>{weatherData.date}</span>
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature d-flex">
            <img src={weatherData.imgUrl} alt={weatherData.description} className="float-left" />
            <div className="float-left">
              <strong>{Math.round(weatherData.temperature)}</strong>
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
              humidity: {weatherData.humidity}%
            </li>
            <li>
              wind: {Math.round(weatherData.wind)} km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  }else{

  let apiKey="540046b826b6194dcafda070d195d19f";
  let apiUrl=`http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return "Loading...";



}
}