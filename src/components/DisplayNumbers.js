import React, { Component } from "react";

class DisplayNumbers extends Component {
  render() {
    const confirmed = [this.props.confirmed].toLocaleString();
    const recovered = [this.props.recovered].toLocaleString();
    const deaths = [this.props.deaths].toLocaleString();

    return (
      <div className="numbers-container">
        <h3 className="numbers">{confirmed}</h3>
        <h3 className="numbers">{recovered}</h3>
        <h3 className="numbers">{deaths}</h3>
        <h3 className="subtitle">confirmed </h3>
        <h3 className="subtitle">recovered </h3>
        <h3 className="subtitle">deaths</h3>
      </div>
    );
  }
}
export default DisplayNumbers;
