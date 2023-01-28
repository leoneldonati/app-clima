import React from "react";
import '../styles/weatherForm.css';

export const WeatherForm = () => {


    return (
        <form className="Form">
            <div className="Form-container">
                <label className="Form-label">Country</label>
                <input className="Form-input" type="text" placeholder="Put your Country please..." autoFocus />
            </div>
            <div className="Form-container">
                <label className="Form-label">City</label>
                <input className="Form-input" type="text" placeholder="Put your City please..." autoFocus />
            </div>

            <button className="Form-button">Get Weather</button>
        </form>
    )
}
