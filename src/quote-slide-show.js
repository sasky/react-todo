import React from "react";
import propTypes from "prop-types";
//import { Button } from "reactstrap";

class QuoteSlideShow extends React.Component {
  timerID = 0;
  state = {
    currentQuote: 0
  };

  componentDidMount() {
    const thirtySeconds = 1000 * 30;
    this.timerID = window.setInterval(
      () => this.eventNextSlide(),
      thirtySeconds
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  currentQuote = () => this.props.quotes[this.state.currentQuote];

  eventNextSlide = () => {
    const quoteLength = this.props.quotes.length;
    let nextQuote = this.state.currentQuote + 1;
    if (nextQuote >= quoteLength) {
      nextQuote = 0;
    }
    this.setState({ currentQuote: nextQuote });
  };

  render() {
    return (
      <div className="container pt-5 pb-5 bg-dark">
        <h1 className="text-center text-white"> {this.currentQuote()} </h1>
        {/*
        <Button onClick={this.eventNextSlide} color="primary" size="lg">
          Next Slide {this.state.currentSlide}
        </Button>
        */}
      </div>
    );
  }
}
QuoteSlideShow.propTypes = {
  quotes: propTypes.array
};
export default QuoteSlideShow;
