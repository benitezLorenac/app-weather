import React from "react";

export default function LocationWeather({currentLocation}){
    return(
        <div>
            <h4 className="location">{currentLocation && currentLocation.name}, {currentLocation && currentLocation.sys.country}</h4>
            <span>{currentLocation && currentLocation.weather[0].description}</span>
        </div>
    );
}