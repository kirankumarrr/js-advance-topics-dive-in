import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Thorttling from "./Thorttling/Thorttling";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Thorttling />
  </StrictMode>,
  rootElement
);
