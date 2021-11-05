import React, { useState } from "react";
import tConverter from '@khanisak/temperature-converter'
import '../App.css'

function Weathercard(props) {

    function imageSwitch(weatherType) {
        console.log("weatherType", weatherType)
        if (weatherType.toLowerCase().includes("cloud")) {
            return "cloudy";
        } else if (weatherType.toLowerCase().includes("rain")) {
            return "rainy";
        } else if (weatherType.toLowerCase().includes("wind")) {
            return "windy";
        } else if (weatherType.toLowerCase().includes("clear")) {
            return "clear";
        } else { return "default"; }

    }

    return (
        <div >
            <div className={"container maindiv " + (props.apidata.weather ? imageSwitch(props.apidata.weather[0].main) : '')} >
                <div className="weatherinfo">
                    <span className="cityCss">{props.apidata.name}</span>
                    <span className="mainCss">{props.apidata.weather[0].main}</span>
                    <span style={{ paddingTop: "10px", paddingBottom: "10px", fontSize: "40px" }}>{(Math.round(tConverter.convert(props.apidata.main.temp, tConverter.unit.Kelvin, tConverter.unit.Celcius)))}{`\xB0`}C</span>
                    <span>Feels like {(Math.round(tConverter.convert(props.apidata.main.feels_like, tConverter.unit.Kelvin, tConverter.unit.Celcius)))}{`\xB0`}C</span>

                </div>
                <div className="forIcon">
                    <img className="imgCss" src={`http://openweathermap.org/img/wn/${props.apidata.weather[0].icon}@4x.png`}></img>
                </div>
            </div>

        </div>


    )

}
export default Weathercard;