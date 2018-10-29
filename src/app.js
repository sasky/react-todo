import React from "react";
import ReactDOM from "react-dom";

//import "bootstrap/scss/bootstrap.scss";
import "bootstrap/dist/css/bootstrap.css";
import Data from "../data.json";
import QuoteSlideShow from "./quote-slide-show.js";
import TaskTracker from "./task-tracker";

class App extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <main className="container-fluid bg-info">
          <QuoteSlideShow quotes={Data.quotes} />
          <TaskTracker />
        </main>
      </React.StrictMode>
    );
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
