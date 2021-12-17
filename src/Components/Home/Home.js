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
import helpers from "../Helpers/helpers";
function Home() {
  const [cardsInfo, setCards] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [dateTitle, setDate] = useState("");
  const [heroTitle, setTitle] = useState();
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
          setDate(helpers.numtoChar2(herotext.date));
          setTitle(helpers.injectBr(herotext.title));
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
        <Container className="contHero" fluid={true}>
          <Row>
            <Col style={{ padding: 0 }}>
              <Hero
                heroText={heroText}
                heroSlides={heroSlides}
                dateTitle={dateTitle}
                heroTitle={heroTitle}
              />
            </Col>
          </Row>
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
