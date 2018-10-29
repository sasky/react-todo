import { React } from "react";
import { Button } from "reactstrap";
class QuoteSlideShow extends React.Component {
  state = {
    quotes: []
  };
  static getDerivedStateFromProps({ quotes }) {
    quotes = quotes.reduce(function(carey, quote, currentIndex) {
      const index = currentIndex + 1;
      const current = index === 1 ? true : false;
      carey.push({ quote, index, current });
      return carey;
    }, []);
    return { quotes };
  }
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

  currentQuoteObject = () => this.state.quotes.find(o => o.current);

  eventNextSlide = () => {
    let currentIndex = this.currentQuoteObject().index;

    let nextObj = this.state.quotes.find(o => o.index === currentIndex + 1);
    let nextIndex = nextObj ? nextObj.index : 1;
    let quotes = this.state.quotes.map(function(quoteObj) {
      quoteObj.current = false;
      if (quoteObj.index === nextIndex) {
        quoteObj.current = true;
      }
      return quoteObj;
    });
    this.setState({ quotes });
  };

  render() {
    return (
      <div className="container mt-5 mb-5">
        <h1 className="text-center"> {this.currentQuoteObject().quote} </h1>

        <Button onClick={this.eventNextSlide} color="primary" size="lg">
          Next Slide {this.state.currentSlide}
        </Button>
      </div>
    );
  }
}
export default QuoteSlideShow;
