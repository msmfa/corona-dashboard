import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
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
        children.push(
          <img key={uuidv4()} className="deathIcon" src={IconRed} alt="human" />
        );
      }

      div.push(
        <div key={uuidv4()} className="box-deaths">
          {children}
        </div>
      );
    }
    return div;
  };
  createTableRecovered = () => {
    let div = [];

    for (let i = 0; i < this.createRecoverNumber(); i++) {
      let children = [];

      for (let j = 0; j < 1; j++) {
        children.push(
          <img key={uuidv4()} className="recIcon" src={IconGreen} alt="human" />
        );
      }

      div.push(<div key={uuidv4()}>{children}</div>);
    }
    return div;
  };
  createTableConfirmed = () => {
    let div = [];

    for (let i = 0; i < this.createConfirmedNumber(); i++) {
      let children = [];

      for (let j = 0; j < 1; j++) {
        children.push(
          <img
            key={uuidv4()}
            className="recIcon"
            src={IconYellow}
            alt="human"
          />
        );
      }

      div.push(
        <div key={uuidv4()} className="box-confirmed">
          {children}
        </div>
      );
    }
    return div;
  };

  render() {
    return (
      <div className="container-icons">
        <div className="container-deaths">
          {[
            ...this.createTableDeaths(),
            ...this.createTableConfirmed(),
            ...this.createTableRecovered()
          ]}
        </div>
      </div>
    );
  }
}
export default DisplayDeaths;
