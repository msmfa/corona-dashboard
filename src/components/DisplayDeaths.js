import React from "react";
import { v4 as uuidv4 } from "uuid";
import IconGreen from "./IMG/icon-green.png";
import IconRed from "./IMG/icon-red.png";
import IconYellow from "./IMG/icon-yellow.png";

const ICON_REPRESENTS = 1000;

function DisplayDeaths(props) {
  const createDeathNumber = () => {
    const numDeaths = Math.floor(props.deaths / ICON_REPRESENTS);
    return numDeaths;
  };

  const createRecoverNumber = () => {
    const numRec = Math.floor(props.recovered / ICON_REPRESENTS);
    return numRec;
  };
  const createConfirmedNumber = () => {
    const numRec = Math.floor(props.confirmed / ICON_REPRESENTS);
    return numRec;
  };

  const createIconDeaths = () => {
    let div = [];

    for (let i = 0; i < createDeathNumber(); i++) {
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
  const createIconRecovered = () => {
    let div = [];

    for (let i = 0; i < createRecoverNumber(); i++) {
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
  const createIconConfirmed = () => {
    let div = [];

    for (let i = 0; i < createConfirmedNumber(); i++) {
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

  return (
    <div className="container-icons">
      <div className="container-deaths">
        {[
          ...createIconDeaths(),
          ...createIconConfirmed(),
          ...createIconRecovered(),
        ]}
      </div>
    </div>
  );
}
export default DisplayDeaths;
