import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { authenticateSignup } from "../service/api";


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


const signupIntialValues = { 
  firstname: '',
  lastname: '',
  username: '',
  email: '',
  phone: '',
  password: ''
}

const VehicleSharing = () => {
  const [signup, setSignup] = useState(signupIntialValues);

  const onInputChange = (e) => { 
     setSignup({ ...signup, [e.target.name]: e.target.value }); 
  }

  const signupUser = async () => { 
    await authenticateSignup(signup);
  }
  
  

  return (
    <Helmet title="Register or Sign Up">
      <CommonSection title="Register or Sign Up" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Create your account. It's free and only takes a  minute.</h6>

              <Form>
                <FormGroup className="contact__form">
                  <Input placeholder="First Name" type="text" onChange={(e) => onInputChange(e)} name='firstname'/>
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Last Name" type="text" onChange={(e) => onInputChange(e)} name='lastname'/>
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="User Name" type="text" onChange={(e) => onInputChange(e)} name='username'/>
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Email" type="email" onChange={(e) => onInputChange(e)} name='email'/>
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Mobile Number" type="tel" onChange={(e) => onInputChange(e)} name='phone'/>
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Password" type="password" onChange={(e) => onInputChange(e)} name='password'/>
                </FormGroup>
              
                {/* <FormGroup className="contact__form">
                  <textarea
                    rows="5"
                    placeholder="Message"
                    className="textarea"
                  ></textarea>
                </FormGroup> */}
                
                

                <button className=" contact__btn" type = "submit" onClick={() => signupUser()}>
                  Sign Up
                </button>
                <p className="forgot-password text-right">
                Already registered <Link to="/Login">Sign In?</Link>
                </p>
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
