import React, { Component } from "react";

class DisplayFatalityRate extends Component {
  fatalRate = () => {
    const deaths = +this.props.deaths;
    const confirmedCases = +this.props.confirmed;
    const percentage = deaths * (100 / confirmedCases);

    return ` ${Math.round(percentage * 100) / 100}%`;
  };
  render() {
    return (
      <p className="fatality-rate-text">
        Current Fatality rate ={this.fatalRate()}
      </p>
    );
  }
}

export default DisplayFatalityRate;
