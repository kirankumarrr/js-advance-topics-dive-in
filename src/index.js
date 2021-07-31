import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Thorttling from "./Thorttling/Thorttling";
import Debouning from "./Debouning/Debouning";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Debouning />
  </StrictMode>,
  rootElement
);
