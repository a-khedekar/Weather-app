import React, { useState, useEffect } from "react";
import Weathercard from "./Weathercard"
import Header from "./Header"
import _ from 'lodash';
import "../App.css"

function Maincontainer() {

    const [weatherData, setWeatherData] = useState({});
    console.log('state', weatherData);
    const [cityName, setCityName] = useState("");

    const cityHandler = (e) => {
        const city = e.target.value;
        console.log(city);
        setCityName(city);
    }


    function fetchApi() {
        cityName !== "" && fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=65be9299e69214eeae8e45289fef144b`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.cod === '404') {
                    alert("City not found!!")
                } else {
                    setWeatherData(data)
                }


            });
    }

    // useEffect(() => {
    //     fetchApi();
    // }, [])

    return (
        <div className="Centralization">
            <Header onCityHandler={cityHandler} onSearchHandler={fetchApi} />
            {!_.isEmpty(weatherData) && <Weathercard apidata={weatherData} />}
        </div>
    )

}
export default Maincontainer;