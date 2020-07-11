import React from "react";
import Image from "./Image";
import Title from "./Title";
import Price from "./Price";

function Card(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <Image imgsrc={props.imgsrc} />
          <div className="card__info">
            <Title title={props.title} />
            <Price price={props.price} />
            <a href={props.link} target="_blank">
              <button>Buy now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
