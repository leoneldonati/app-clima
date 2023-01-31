import { useState } from "react";
import "./App.css";
import WeatherForm from "./components/weatherForm";
import WeatherInfo from "./components/weatherInfo";


export const getWeather = ev => {
  // Llamada a API
  ev.preventDefault();

  const city = ev.target.city.value;
  const country = ev.target.country.value;

  const apiKey = "78e0a64427b6bbd47cda41f070cbc6bc";

  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`;

  fetch(apiURL)
    .then(response => response.json())
    .then(data => data);

 
};
function App() {

  return (
    <div className="App">
      <WeatherForm />
      <WeatherInfo temp="" city="" country="" windSpeed="" humidity="" />
    </div>
  );
}

export default App;

