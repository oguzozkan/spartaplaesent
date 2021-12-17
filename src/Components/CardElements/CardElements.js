import React from "react";
import Card from "react-bootstrap/Card";
import "../../css/Card.css";

function CardElements({ title, author, image, dates }) {
  return (
    <>
      <Card className="borderlessCard ">
        <Card.Img variant="top" src={image} className="image" alt={author} />

        <Card.Body style={{ padding: 0, marginTop: 0 }} className="cardBody1">
          <Card.Text className="cardDate">{dates}</Card.Text>
          <Card.Text className="cardTitle">{title}</Card.Text>
        </Card.Body>
        <Card.Body className="cardBody">
          Presented by &nbsp;
          <Card.Link className="cardLink" href="#">
            {author}
          </Card.Link>
        </Card.Body>
      </Card>
    </>
  );
}
export default CardElements;
