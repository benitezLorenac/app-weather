import React from "react";

export default function CurrentDegrees({currentDegrees}) {
  return(
    <div className={"current-degrees"}>
      <img src={`http://openweathermap.org/img/wn/${currentDegrees && currentDegrees.weather[0].icon}@2x.png`}/>
      <span className={"degrees"}>{`${currentDegrees && parseInt(currentDegrees.main.temp)}°`}</span>
    </div>
  )
}
