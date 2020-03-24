import React, { Component } from "react";

class DisplayText extends Component {
  render() {
    return (
      <>
        <div className="grey-line"></div>
        <p className="para-text">
          This Website helps to visualise the impact of COVID-19 and it's
          spread.
        </p>

        <p className="para-text">
          The vast numbers infected can make it hard to visualise the
          relationship between those infected, those who recover and those who
          die from the virus.{" "}
          <div className="each-text">
            Each icon displayed represents 1,000 people.
          </div>
        </p>
        <p className="text-lower para-text">
          The data displayed is from{" "}
          <a
            className="johns-hopkins-link"
            href="https://coronavirus.jhu.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            John Hopskins University
          </a>{" "}
          and is automatically updated.
        </p>
      </>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <div className="credit">
        Data API provided by{" "}
        <a
          className="link"
          href="https://github.com/mathdroid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mathdroid.
        </a>
      </div>
    );
  }
}

export default DisplayText;
