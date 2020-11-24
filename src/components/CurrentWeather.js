import React from 'react'

export default function CurrentWeather({currentWeather}){
    return (
        <div className={"detail-days"}>
            <p>Sensación térmica: {`${currentWeather && parseInt(currentWeather.main.feels_like)}°.`}</p>
            <p>Humedad: {`${currentWeather && currentWeather.main.humidity}%.`}</p>
            <p>Viento: a {currentWeather && parseInt(currentWeather.wind.speed)} km/h.</p>
        </div>
    )
}

