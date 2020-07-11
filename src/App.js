import React from "react";
import Card from "./Cards";
import Sdata from "./Sdata";

const App = () => (
  <>
    {Sdata.map((val) => {
      return (
        <Card
          key={val.id}
          imgsrc={val.imgsrc}
          title={val.title}
          price={val.price}
          link={val.link}
        />
      );
    })}
  </>
);

export default App;
