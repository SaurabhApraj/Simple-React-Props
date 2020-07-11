import React from "react";
import Samsung from "./Samsung";
import Motorola from "./Motorola";

const favmobile = "samsung";
const FavMob = () => {
  if (favmobile === "samsung") {
    return <Samsung />;
  } else {
    return <Motorola />;
  }
};

const App = () => <FavMob />;

export default App;
