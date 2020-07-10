import React from "react";

function Card(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} className="card__img" alt="pic" />
          <div className="card__info">
            <span className="card__category">{props.title}</span>
            <h3 className="card__price">{props.price}</h3>
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
