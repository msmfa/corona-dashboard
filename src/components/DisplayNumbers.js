import React, { Component } from "react";

class DisplayNumbers extends Component {
  render() {
    return (
      <div className="numbers-container">
        <h3 className="numbers">{this.props.confirmed}</h3>
        <h3 className="numbers">{this.props.recovered}</h3>
        <h3 className="numbers">{this.props.deaths}</h3>
        <h3 className="subtitle">confirmed </h3>
        <h3 className="subtitle">recovered </h3>
        <h3 className="subtitle">deaths</h3>
      </div>
    );
  }
}
export default DisplayNumbers;
