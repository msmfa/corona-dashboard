import React, { Component } from "react";

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

export default Footer;
