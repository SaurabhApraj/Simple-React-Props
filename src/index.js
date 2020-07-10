import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";
import Sdata from "./Sdata";

ReactDOM.render(
  <>
    <Card
      imgsrc={Sdata[0].imgsrc}
      title={Sdata[0].title}
      price={Sdata[0].price}
      link={Sdata[0].link}
    />
    <Card
      imgsrc={Sdata[1].imgsrc}
      title={Sdata[1].title}
      price={Sdata[1].price}
      link={Sdata[1].link}
    />
    <Card
      imgsrc={Sdata[2].imgsrc}
      title={Sdata[2].title}
      price={Sdata[2].price}
      link={Sdata[2].link}
    />
    <Card
      imgsrc={Sdata[3].imgsrc}
      title={Sdata[3].title}
      price={Sdata[3].price}
      link={Sdata[3].link}
    />
    <Card
      imgsrc={Sdata[4].imgsrc}
      title={Sdata[4].title}
      price={Sdata[4].price}
      link={Sdata[4].link}
    />
  </>,
  document.getElementById("root")
);
