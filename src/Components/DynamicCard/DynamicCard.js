import Masonry from "react-masonry-css";
import CardElements from "../CardElements/CardElements";
import React from "react";
import helpers from "../Helpers/helpers";
import "../../Css/card.css";
function DynamicCard({ cardsInfo }) {
  const items = cardsInfo.map((card, index) => {
    return (
      <CardElements
        key={index}
        title={card.title}
        author={card.author.toUpperCase()}
        image={card.image}
        dates={helpers.numtoChar(card.date)}
      />
    );
  });

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {items}
      </Masonry>
    </>
  );
}

export default DynamicCard;
