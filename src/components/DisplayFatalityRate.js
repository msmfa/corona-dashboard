import React, { Component } from "react";

class DisplayFatalityRate extends Component {
  fatalRate = () => {
    const deaths = +this.props.deaths;
    const confirmedCases = +this.props.confirmed;
    const percentage = deaths * (100 / confirmedCases);

    return `${Math.round(percentage * 100) / 100}%`;
  };

  RecoveryRate = () => {
    const recovered = +this.props.recovered;
    const confirmedCases = +this.props.confirmed;
    const percentage = recovered * (100 / confirmedCases);
    return `${Math.round(percentage * 100) / 100}%`;
  };

  GlobalInfectionRate = () => {
    const confirmedCases = +this.props.confirmed;
    const percentage = confirmedCases * (100 / 8000000000);
    const output = String(percentage)
      .split("")
      .slice(0, 6);

    return output;
  };
  render() {
    return (
      <div className="fatality-container">
        <p className="fatality-rate-text">Fatality rate = {this.fatalRate()}</p>
        <p className="fatality-rate-text">
          Recovery Rate = {this.RecoveryRate()}
        </p>
        <p className="fatality-rate-text">
          Global Infection Rate = {this.GlobalInfectionRate()}%
        </p>
      </div>
    );
  }
}

export default DisplayFatalityRate;
//Add global infection rate in
// Add recovery rate in green
