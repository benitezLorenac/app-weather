import React, {useState, useEffect} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CurrentDegrees from "./components/CurrentDegrees";
import CurrentWeather from "./components/CurrentWeather";
import LocationWeather from "./components/LocationWeather";
import ExtendedForecast from "./components/ExtendedForecast";
import CitySelector from "./components/CitySelector";

export default function App() {
  const API_KEY = "b99bd04cf4353f41ba388f8cacda6305";

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [ciudad, setCiudad] = useState("3427407");

  const URL = `http://api.openweathermap.org/data/2.5/weather?id=${ciudad}&units=metric&lang=sp&appid=${API_KEY}`;
  const URL_EXTENDED_FORECAST = `http://api.openweathermap.org/data/2.5/forecast?id=${ciudad}&units=metric&lang=sp&appid=${API_KEY}`;

  const handleCityChange = (selectedCityId) => {
    setCiudad(selectedCityId);
  };

  useEffect(() => {
    loadCurrentWeather();
    loadForecast();
  }, [ciudad]);

  async function loadCurrentWeather() {
    const response = await fetch(URL);
    const data = await response.json();

    setCurrentWeather(data);
  }

  async function loadForecast() {
    const response = await fetch(URL_EXTENDED_FORECAST);
    const data = await response.json();

    setForecast(data);
  }

  return (
    <Container>
      <Row className={"mb-10"}>
        <Col>
          <Card className={"card-top"}>
            <Card.Body>
              <Row>
                <Col sm={6}>
                  <h2>Pronóstico actual</h2>
                </Col>
                <Col sm={6}>
                  <CitySelector onCityChange={handleCityChange} />
                </Col>
              </Row>
              
              <Row>
                <Col sm={6}>
                  <LocationWeather currentLocation={currentWeather} />
                </Col>
                <Col sm={6}>
                  <CurrentWeather currentWeather={currentWeather} />
                </Col>
              </Row>
              <CurrentDegrees currentDegrees={currentWeather} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h2>Pronóstico extendido</h2>
              {forecast && <ExtendedForecast forecast={forecast} />}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
