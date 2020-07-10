import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";
import Sdata from "./Sdata";
import "./index.css";

ReactDOM.render(
  <>
    {Sdata.map((val) => {
      return (
        <Card
          imgsrc={val.imgsrc}
          title={val.title}
          price={val.price}
          link={val.link}
        />
      );
    })}
  </>,
  document.getElementById("root")
);
