import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import "../styles/contact.css";

const socialLinks = [
  {
    url: "#",
    icon: "ri-facebook-line",
  },
  {
    url: "#",
    icon: "ri-instagram-line",
  },
  {
    url: "#",
    icon: "ri-linkedin-line",
  },
  {
    url: "#",
    icon: "ri-twitter-line",
  },
];

const VehicleSharing = () => {
  return (
    <Helmet title="Vehicle Sharing">
      <CommonSection title="Vehicle Sharing" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Share your vehicle details</h6>

              <Form>
                <FormGroup className="contact__form">
                  <Input placeholder="Owner Name" type="text" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Email" type="email" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Mobile Number" type="tel" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Registration Number" type="number" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Maker/Model of Vehicle" type="text" />
                </FormGroup>
              
                {/* <FormGroup className="contact__form">
                  <textarea
                    rows="5"
                    placeholder="Message"
                    className="textarea"
                  ></textarea>
                </FormGroup> */}
                <FormGroup className="select__group">
                 <select>
                 <option value="ac">Vehicle Class</option>
                  <option value="ac">Gear-2-Wheeler</option>
                  <option value="non-ac">Non-Gear-2-Wheeler</option>
                  <option value="non-ac">Automatic-4-Wheeler</option>
                  <option value="non-ac">Manual-2-Wheeler</option>
                  <option value="non-ac">Gear-Cycle</option>
                  <option value="non-ac">Non-Gear-Cycle</option>
                 </select>
                </FormGroup>
                
                

                <button className=" contact__btn" type="submit">
                  Send Details
                </button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">Contact Information</h6>
                <p className="section__description mb-0">
                139, CHARUSAT Campus, Highway, Off, Nadiad - Petlad Rd, Changa, Gujarat 388421
                </p>
                <div className=" d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Phone:</h6>
                  <p className="section__description mb-0">+918890596286</p>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__description mb-0">htr5602@gmail.com</p>
                </div>

                <h6 className="fw-bold mt-4">Follow Us</h6>

                <div className=" d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <Link
                      to={item.url}
                      key={index}
                      className="social__link-icon"
                    >
                      <i class={item.icon}></i>
                    </Link>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default VehicleSharing;
