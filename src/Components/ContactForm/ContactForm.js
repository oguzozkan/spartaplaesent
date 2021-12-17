import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../css/Contact.css";

const ContactForm = () => {
  function postNews(email) {
    console.log(email);
    const url =
      "https://s0nshulo19.execute-api.us-east-1.amazonaws.com/default/code-challenge";
    const data = { email: email };
    const other_params = {
      headers: { "content-type": "application/json; charset=UTF-8" },
      body: data,
      method: "POST",
      mode: "cors",
    };

    fetch(url, other_params)
      .then(function (response) {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Could not reach the API: " + response.statusText);
        }
      })
      .then(function (data) {
        document.getElementById("message").innerHTML = data.encoded;
      })
      .catch(function (error) {
        document.getElementById("message").innerHTML = error.message;
      });
    return true;
  }

  function postNewsLetter(email) {
    fetch(
      "https://s0nshulo19.execute-api.us-east-1.amazonaws.com/default/code-challenge",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(email),
      }
    )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email } = e.target.elements;

    let details = {
      email: email.value,
    };
    //postNews(email);
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
      <form
        onSubmit={handleSubmit}
        style={{ fontFamily: "ACaslonPro-Regular" }}
      >
        <Row>
          <Col className=" d-flex align-items-center justify-content-center">
            <p>Sign up for our Newsletter</p>
          </Col>
        </Row>
        <Row>
          <Col className=" d-flex align-items-center justify-content-center">
            <input
              type="email"
              id="email"
              required
              placeholder="Email"
              style={{ width: "250px" }}
            />
            <button type="submit" style={{ width: "100px" }}>
              <label>SUBMIT</label>
            </button>
          </Col>
        </Row>
      </form>
    </Container>
  );
};

export default ContactForm;
