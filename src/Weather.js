import React from 'react';
import axios from 'axios';

export default function Weather(props){
    function displayWeather(response){
        alert(`The weathr in ${response.data.name} is ${response.data.main.temp}°C`);
    }


    let apiKey="540046b826b6194dcafda070d195d19f";
    let apiUrl=`http://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
    
    return <h2>Hello from react</h2>;
}