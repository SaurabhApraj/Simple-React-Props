import React from "react";
import Samsung from "./Samsung";
import Motorola from "./Motorola";

const favmobile = "samsung";

const App = () => <>{favmobile === "samsung" ? <Samsung /> : <Motorola />}</>;

export default App;
