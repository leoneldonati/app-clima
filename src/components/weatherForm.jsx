import React from "react";
import "../styles/weatherForm.css";
import { getWeather } from '../services/getWeather';

const WeatherForm = () => {



  return (
    <form
      className="Form"
      onSubmit={ev => getWeather(ev)}
    >
      <div className="Form-container">
        <label className="Form-label">Country</label>
        <input
          className="Form-input"
          name="country"
          type="text"
          placeholder="Put your Country please..."
          autoFocus
        />
      </div>
      <div className="Form-container">
        <label className="Form-label">City</label>
        <input
          className="Form-input"
          name="city"
          type="text"
          placeholder="Put your City please..."
          autoFocus
        />
      </div>

      <button className="Form-button" type="submit">
        Get Weather
      </button>
    </form>
  );
};

export default WeatherForm;
