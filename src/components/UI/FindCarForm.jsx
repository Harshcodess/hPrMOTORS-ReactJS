import React from "react";
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";

const FindCarForm = () => {
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" placeholder="From address" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="To address" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="date" placeholder="Journey date" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className="journey__time"
            type="time"
            placeholder="Journey time"
            required
          />
        </FormGroup>
        <FormGroup className="select__group">
          <select>
            <option value="ac">Cars</option>
            {/* <option value="non-ac">Cycles</option>
            <option value="non-ac">Bikes</option> */}
          </select>
        </FormGroup>

        <FormGroup className="form__group">
        <Link to="/Cars" className="align-items-center gap-1">
                  {/* <i class="ri-login-circle-line"></i>  */}
                  <button className="btn find__car-btn">Find Vehicle</button>
                </Link>
          
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
