import React from "react";
import Sdata from "./Sdata";
import Card from "./Cards";

const Motorola = () => {
  return (
    <Card
      key={Sdata[2].id}
      imgsrc={Sdata[2].imgsrc}
      title={Sdata[2].title}
      price={Sdata[2].price}
      link={Sdata[2].link}
    />
  );
};

export default Motorola;
