import React, { Component } from "react";
import IconGreen from "./IMG/icon-green.png";
import IconRed from "./IMG/icon-red.png";
import IconYellow from "./IMG/icon-yellow.png";
import IconBlack from "./IMG/icon-black.png";
class DisplayIcons extends Component {
  render() {
    return (
      <div className="ik-container">
        <div className="image-key-container">
          <div className="image-key">
            <img className="recIcon" src={IconYellow} alt="human"></img>
            <p className="icon-text-bottom"> Confirmed</p>
          </div>
          <div className="image-key">
            <img className="recIcon" src={IconGreen} alt="human"></img>
            <p className="icon-text-bottom"> Recovered</p>
          </div>
          <div className="image-key">
            <img className="recIcon" src={IconRed} alt="human"></img>
            <p className="icon-text-bottom"> Deaths</p>
          </div>
          <div className="image-key">
            <img className="recIcon" src={IconBlack} alt="human"></img>
            <p className="icon-text-bottom"> 1000 People</p>
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayIcons;
