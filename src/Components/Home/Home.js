import React, { useState, useEffect } from "react";
import Hero from "../Hero/Hero";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavB from "../Navbar/NavB";
import Loading from "../Loading/Loading";
import Footer from "../Footer";
import "../../css/Home.css";
import ContactForm from "../ContactForm/ContactForm";
import DynamicCard from "../DynamicCard/DynamicCard";
function Home() {
  const [cardsInfo, setCards] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [heroText, setHeroText] = useState([]);
  const [heroSlides, setHeroSlides] = useState([]);

  useEffect(() => {
    fetch(
      "https://s0nshulo19.execute-api.us-east-1.amazonaws.com/default/code-challenge"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          console.log(result);
          let orderByDate = [];
          let heroslides = [];
          let herotext = [];
          orderByDate = result.cards;
          heroslides = result.hero_slides;
          herotext = result.hero_text;
          orderByDate.sort((a, b) => {
            //return new Date(a.date) - new Date(b.date); //des
            return new Date(b.date) - new Date(a.date); // ascending
          });
          setCards(orderByDate);
          setHeroSlides(heroslides);
          setHeroText(herotext);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <>
        <Loading />
      </>
    );
  } else {
    return (
      <div style={{ backgroundColor: "#ffff" }}>
        <NavB style={{ backgroundColor: "#ffff !important" }} />
        <Container className="containergeneral" style={{ padding: 0 }}>
          <Container style={{ padding: 0 }}>
            <Row>
              {/* style={{ maxWidth: 1440, justifyContent: "center" }} */}
              <Col style={{ padding: 0 }} lg={12} sm={12}>
                <Hero heroText={heroText} heroSlides={heroSlides} />
              </Col>
            </Row>
          </Container>
        </Container>
        <Container className="containerdynamiccard">
          <Row className="mt-5">
            <Col sm={12}>
              <DynamicCard cardsInfo={cardsInfo} />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <ContactForm />
            </Col>
          </Row>
        </Container>

        <Footer style={{ backgroundColor: "#ffff !important" }} />
      </div>
    );
  }
}

export default Home;
