import React from "react";
import "../styles/weatherForm.css";
import { useState, useEffect } from "react";


const WeatherForm = () => {



  //useState valor y busqueda
  const [search, setSearch] = useState("");
  const [values, setValues] = useState("");


  //manejador de evento "Enter"
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setSearch(e.target.value);
    }
  };
  
  //peticion a API
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${import.meta.env.VITE_APP_API_KEY}&units=metric`;

  const getData = async () => {
    await fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        if (data.cod >= 400) {
          setValues(false);
        } else {
          setValues(data);
        }
      })
      .catch(error => alert(error))
  };

  useEffect(() => {
    getData();
  }, [search]);




  
  return (
    <div className="Form">
      <div className="Form-container">
        <label className="Form-label">City</label>
        <input
          className="Form-input"
          name="city"
          type="text"
          placeholder="Put your City please..."
          autoFocus
          onKeyDown={handleSearch}
        />
      </div>

      <div className="Card-info">
        {values ? (
          <div className="Card-container">
            <h1 className="Card-h1">
              Weather in {values.name}, {values.sys.country}.
            </h1>
            <ul className="Card-ul">
              <li className="Card-li">{values.weather[0].main}</li>
              <li className="Card-li">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="Card-svg"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                  <path d="M8 0a2.5 2.5 0 0 0-2.5 2.5v7.55a3.5 3.5 0 1 0 5 0V2.5A2.5 2.5 0 0 0 8 0zM6.5 2.5a1.5 1.5 0 1 1 3 0v7.987l.167.15a2.5 2.5 0 1 1-3.333 0l.166-.15V2.5z" />
                </svg>
                {values.main.temp.toFixed(0)}&deg;C
              </li>
              <li className="Card-li">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="Card-svg"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.5 0a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V7.5h-1.5a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V15h-1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5h-2zM7 1.5l.364-.343a.5.5 0 0 0-.728 0l-.002.002-.006.007-.022.023-.08.088a28.458 28.458 0 0 0-1.274 1.517c-.769.983-1.714 2.325-2.385 3.727C2.368 7.564 2 8.682 2 9.733 2 12.614 4.212 15 7 15s5-2.386 5-5.267c0-1.05-.368-2.169-.867-3.212-.671-1.402-1.616-2.744-2.385-3.727a28.458 28.458 0 0 0-1.354-1.605l-.022-.023-.006-.007-.002-.001L7 1.5zm0 0-.364-.343L7 1.5zm-.016.766L7 2.247l.016.019c.24.274.572.667.944 1.144.611.781 1.32 1.776 1.901 2.827H4.14c.58-1.051 1.29-2.046 1.9-2.827.373-.477.706-.87.945-1.144zM3 9.733c0-.755.244-1.612.638-2.496h6.724c.395.884.638 1.741.638 2.496C11 12.117 9.182 14 7 14s-4-1.883-4-4.267z" />
                </svg>{" "}
                {values.main.humidity}%
              </li>
              <li className="Card-li">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="Card-svg"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V9.5a.5.5 0 0 1 1 0v1.585a1.5 1.5 0 0 1 1 1.415z" />
                  <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z" />
                </svg>{" "}
                {values.main.temp_min.toFixed(0)}&deg;C |
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="Card-svg"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V2.5a.5.5 0 0 1 1 0v8.585a1.5 1.5 0 0 1 1 1.415z" />
                  <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z" />
                </svg>{" "}
                {values.main.temp_max.toFixed(0)}&deg;C
              </li>
            </ul>
          </div>
        ) : (
          <div className="Card-error">
            <p>Please enter a valid city!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherForm;
