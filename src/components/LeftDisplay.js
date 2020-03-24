import React, { Component } from "react";
import Header from "./Header";
import DisplayDate from "./DisplayDate";
import DisplayNumbers from "./DisplayNumbers";
import DisplayText from "./DisplayText";
import DisplayFatalityRate from "./DisplayFatalityRate";
import DisplayIcons from "./DisplayIcons";

class LeftDisplay extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="display-left">
          <Header />
          <DisplayDate />
          <DisplayNumbers
            deaths={this.props.deaths}
            recovered={this.props.recovered}
            confirmed={this.props.confirmed}
          />
          <DisplayText />
          <DisplayFatalityRate
            deaths={this.props.deaths}
            confirmed={this.props.confirmed}
          />
          <DisplayIcons />
        </div>
      </div>
    );
  }
}

export default LeftDisplay;
