import React from "react";
import ReactDOM from "react-dom";

//import "bootstrap/scss/bootstrap.scss";
import "bootstrap/dist/css/bootstrap.css";
import Data from "../data.json";
import QuoteSlideShow from "./components/quote-slide-show.js";

class App extends React.Component {
  render() {
    return (
      <main>
        <QuoteSlideShow quotes={Data.quotes} />
      </main>
    );
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
