import React from "react";

function DisplayFatalityRate(props) {
  const getFatalRate = () => {
    const deaths = +props.deaths;
    const confirmedCases = +props.confirmed;
    const percentage = deaths * (100 / confirmedCases);

    return `${Math.round(percentage * 100) / 100}%`;
  };

  const getRecovRate = () => {
    const recovered = +props.recovered;
    const confirmedCases = +props.confirmed;
    const percentage = recovered * (100 / confirmedCases);
    return `${Math.round(percentage * 100) / 100}%`;
  };

  const getGlobalInfectionRate = () => {
    const confirmedCases = +props.confirmed;
    const percentage = confirmedCases * (100 / 8000000000);
    const output = String(percentage).split("").slice(0, 6);

    return output;
  };

  return (
    <div className="fatality-container">
      <p className="fatality-rate-text">Fatality rate = {getFatalRate()}</p>
      <p className="fatality-rate-text">Recovery Rate = {getRecovRate()}</p>
      <p className="fatality-rate-text">
        Global Infection Rate = {getGlobalInfectionRate()}%
      </p>
    </div>
  );
}

export default DisplayFatalityRate;
//Add global infection rate in
// Add recovery rate in green
