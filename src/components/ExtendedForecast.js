import React, {useEffect} from "react";
import Container from "react-bootstrap/Container";
import DaySelector from "./DaySelector";

export default function ExtendedForecast({forecast}) {
  return (
    <Container>
      <h4>{forecast.city.name}, {forecast.city.country}</h4>
      <DaySelector forecastList={forecast.list} />
    </Container>
  );
}
