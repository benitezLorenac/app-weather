import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

export default function CitySelector({onCityChange}) {
  const handleCityChange = (event) => {
    onCityChange(event.target.value);
  };

  return (
    <Form className={"city-selector"}>
      <Col sm="6">
        <Form.Control as="select" onChange={handleCityChange} id={"city-form-control"}>
          <option value="3427407">Villa Luro</option>
          <option value="3117735">Madrid</option>
          <option value="3169071">Roma</option>
          <option value="4164143">Miami Beach</option>
          <option value="7778677">Dublin</option>
        </Form.Control>
      </Col>
    </Form>
  );
}
