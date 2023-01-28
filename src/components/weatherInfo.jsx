import React from "react";
import '../styles/weatherInfo.css';



const WeatherInfo = ({ city, country, temp, humidity, windSpeed }) => {
    return (
        <div className="Container">
            <p className="Container-p">The weather in {city}, {country} is currently:</p>
            <ul className="Container-ul">
                <li className="Container-li">Temperature: {temp}&deg;C</li>
                <li className="Container-li">Humidity: {humidity}%</li>
                <li className="Container-li">Wind Speed: {windSpeed}</li>
            </ul>
        </div>
    )
}

export default WeatherInfo;