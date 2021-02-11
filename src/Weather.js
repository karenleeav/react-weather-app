import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo.js";
import axios from "axios";
import './Weather.css';


export default function Weather(props) {

  const[weatherData, setWeatherData] = useState({ ready: false });
  const[city, setCity]=useState(props.defaultCity);

  function handleResponse(response){
   
    setWeatherData({
      ready:true,
      temperature:response.data.main.temp,
      humidity:response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description:response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind:response.data.wind.speed,
      city:response.data.name
    }); 
  }

  function search(){

  let apiKey="540046b826b6194dcafda070d195d19f";
  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event){
    event.preventDefault();
    search();

  }

  function handleCityChange(event){
    setCity(event.target.value);

  }

  if(weatherData.ready){
  return (
    <div className="Weather">
      <form className="mb-3" onSubmit = {handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city..."
              className="form-control"
              autoComplete="off"
              autoFocus="on"
              onChange={handleCityChange}
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
      <WeatherInfo data = {weatherData}/>
     
    </div>
  );

  }else{
    search();


  return "Loading...";



}
}