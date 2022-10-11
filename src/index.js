import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./containers/App";
import "./utils/firebase";
import "./index.css";
import SpotifyContext from "Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter basename="/spotify-react-tailwind/"> */}
    <BrowserRouter>
      <SpotifyContext>
        <App />
      </SpotifyContext>
    </BrowserRouter>
  </React.StrictMode>
);
