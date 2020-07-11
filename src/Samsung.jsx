import React from "react";
import Sdata from "./Sdata";
import Card from "./Cards";

const Samsung = () => {
  return (
    <Card
      key={Sdata[1].id}
      imgsrc={Sdata[1].imgsrc}
      title={Sdata[1].title}
      price={Sdata[1].price}
      link={Sdata[1].link}
    />
  );
};

export default Samsung;
