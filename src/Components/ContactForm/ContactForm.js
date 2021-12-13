import React from "react";
import styled from "styled-components";
import "../../Css/ContactForm.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ContactForm = () => {
  const AppContainer = styled.div``;
  //   function emailValidation(email) {
  //     console.log(email);
  //     const regex =
  //       /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  //     if (!email || regex.test(email) === false) {
  //       alert("Enter valid E-mail");
  //       return false;
  //     }
  //     return true;
  //   }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email } = e.target.elements;
    // if (emailValidation(email.value)) {
    let details = {
      email: email.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });

    let result = await response.json();
    alert(result.status);
    // }
  };
  return (
    <Container className="mt-5">
      <form onSubmit={handleSubmit}>
        <Row>
          <Col className=" d-flex align-items-center justify-content-center">
            <p>Sign up for our Newsletter</p>
          </Col>
        </Row>
        <Row>
          <Col className=" d-flex align-items-center justify-content-center">
            <input type="email" id="email" required placeholder="Email" />
            <button type="submit">SUBMIT</button>
          </Col>
        </Row>
      </form>
    </Container>
  );
};

export default ContactForm;
