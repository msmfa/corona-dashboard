import React, { Component } from "react";
import IconGreen from "./IMG/icon-green.png";
import IconRed from "./IMG/icon-red.png";
import IconYellow from "./IMG/icon-yellow.png";

class DisplayDeaths extends Component {
  createDeathNumber = () => {
    const numDeaths = Math.floor(this.props.deaths / 1000);
    return numDeaths;
  };

  createRecoverNumber = () => {
    const numRec = Math.floor(this.props.recovered / 1000);
    return numRec;
  };
  createConfirmedNumber = () => {
    const numRec = Math.floor(this.props.confirmed / 1000);
    return numRec;
  };

  createTableDeaths = () => {
    let div = [];

    for (let i = 0; i < this.createDeathNumber(); i++) {
      let children = [];

      for (let j = 0; j < 1; j++) {
        children.push(<img className="deathIcon" src={IconRed} alt="human" />);
      }

      div.push(<div className="box-deaths">{children}</div>);
    }
    return div;
  };
  createTableRecovered = () => {
    let div = [];

    for (let i = 0; i < this.createRecoverNumber(); i++) {
      let children = [];

      for (let j = 0; j < 1; j++) {
        children.push(<img className="recIcon" src={IconGreen} alt="human" />);
      }

      div.push(<div className="box-second">{children}</div>);
    }
    return div;
  };
  createTableConfirmed = () => {
    let div = [];

    for (let i = 0; i < this.createConfirmedNumber(); i++) {
      let children = [];

      for (let j = 0; j < 1; j++) {
        children.push(<img className="recIcon" src={IconYellow} alt="human" />);
      }

      div.push(<div className="box-confirmed">{children}</div>);
    }
    return div;
  };

  render() {
    return (
      <div className="container-icons">
        <div className="container-deaths">
          {[
            ...this.createTableDeaths(),
            ...this.createTableRecovered(),
            ...this.createTableConfirmed()
          ]}
        </div>
      </div>
    );
  }
}
export default DisplayDeaths;
