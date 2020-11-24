import React, {useState} from "react";
import moment from "moment";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default function DaySelectorCard({day, onClick, active, index}) {
  const getDayIcon = (iconName) => {
    const dayIcon = iconName.split(""); //[0, 1, 'n' ]
    dayIcon[iconName.length - 1] = "d"; //[0, 1, 'd' ]

    return dayIcon.join(""); //01d
  };

  return (
    <Col
      xs={12}
      md={2}
      onClick={() => {
        onClick(day.detail, index);
      }}
    >
      <Button variant={active && "active"} className={"btn-days"}>
        <p>{moment(day.dt_txt).format("ddd")}</p>
        <p>
          {
            <img
              src={`http://openweathermap.org/img/wn/${getDayIcon(
                day.detail[0].icon
              )}.png`}
            />
          }
        </p>
        <p>
          {" "}
          {`${parseInt(day.tempMax)}°`}. {`${parseInt(day.tempMin)}°`}
        </p>
      </Button>
    </Col>
  );
}
