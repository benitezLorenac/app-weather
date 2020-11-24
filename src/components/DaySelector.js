import React, {useEffect, useState} from "react";
import DaySelectorCard from "./DaySelectorCard";
import {Row} from "react-bootstrap";
import DayGraph from "./DayGraph";

export default function DaySelector({forecastList}) {
  const [dayDetail, setDayDetail] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const getDayDetail = (dayData) => {
    let tempMin, tempMax, tempMinHorario, primerHorario;
    let tempsPorHorario = [];

    const fecha = dayData.dt_txt.split(" ")[0];

    primerHorario = true;

    let horario = 0;
    let primerDiaEncontrado = false;
    let ultimoDiaEncontrado = false;

    while (horario < forecastList.length && ultimoDiaEncontrado == false) {
      if (
        dayData.dt_txt.split(" ")[0] ==
        forecastList[horario].dt_txt.split(" ")[0]
      ) {
        primerDiaEncontrado = true;

        tempMinHorario = Number(forecastList[horario].main.temp_min);

        if (primerHorario || tempMinHorario < tempMin) {
          tempMin = tempMinHorario;
        }

        if (primerHorario || tempMinHorario > tempMax) {
          tempMax = tempMinHorario;
          primerHorario = false;
        }
      } else {
        if (primerDiaEncontrado == true) {
          ultimoDiaEncontrado = true;
        }
      }

      if (primerDiaEncontrado) {
        tempsPorHorario.push({
          icon: forecastList[horario].weather[0].icon,
          temp: parseInt(forecastList[horario].main.temp),
          label: parseInt(forecastList[horario].main.temp) + "º",
          dt_txt: forecastList[horario].dt_txt.split(" ")[1],
        });
      }

      horario++;
    }

    const dayDetail = {
      dt_txt: fecha,
      detail: tempsPorHorario,
      tempMin,
      tempMax,
    };

    console.log("Detalle del dia " + fecha, dayDetail);

    return dayDetail;
  };

  const getDays = () => {
    const days = [];

    for (let i = 0; i < 40; i = i + 8) {
      const dayData = forecastList[i];

      days.push(getDayDetail(dayData));
    }

    return days;
  };

  useEffect(() => {
    setDayDetail(getDays()[0].detail);
    setSelectedIndex(0);
  }, [forecastList]);

  return (
    <>
      <Row>
        <DayGraph dayDetail={dayDetail} />
      </Row>
      <Row className="justify-content-md-center">
        {getDays().map((day, i) => {
          console.log("day", day)
          return (
            <DaySelectorCard
              day={day}
              active={i == selectedIndex}
              index={i}
              onClick={(dayDetail, index) => {
                console.log("dayDetail", dayDetail);
                setDayDetail(dayDetail);
                setSelectedIndex(index);
              }}
            />
          );
        })}
      </Row>
    </>
  );
}
