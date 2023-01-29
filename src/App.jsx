
import { useState } from "react";
import "./App.css";
import WeatherForm from "./components/weatherForm";
import WeatherInfo from "./components/weatherInfo";
import tWeather from "./services/getWeather";

function App() {

  const [state, setState] = useState('');
  
  return (
    <div className="App">
      <WeatherForm />
      <WeatherInfo temp="" city="" country="" windSpeed="" humidity="" />
    </div>
  );
}

export default App;
