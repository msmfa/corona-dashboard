import React, { Component } from "react";
import Axios from "axios";
import LogoSick from "./IMG/human-sick.PNG";
import LogoSickTwo from "./IMG/human-icon-sick2.png";
import LogoHealthy from "./IMG/human-icon-healthy.png";

class App extends Component {
  state = {
    confirmed: 0
  };
  componentDidMount() {
    this.getData();
  }

  async getData() {
    const res = await Axios.get("https://covid19.mathdro.id/api");
    this.setState({
      confirmed: res.data.confirmed.value,
      recovered: res.data.recovered.value,
      deaths: res.data.deaths.value
    });
  }

  render() {
    return (
      <div className="main-container">
        <div className="display-left">
          <h2>
            <h3 className="subtitle">confirmed: </h3>
            {this.state.confirmed}
          </h2>
          <h2>
            <h3 className="subtitle">recovered: </h3>
            {this.state.recovered}
          </h2>
          <h2>
            <h3 className="subtitle">deaths:</h3> {this.state.deaths}
          </h2>
        </div>
        <DisplayDeaths
          deaths={this.state.deaths}
          recovered={this.state.recovered}
          confirmed={this.state.confirmed}
        />
      </div>
    );
  }
}

class DisplayDeaths extends Component {
  createDeathNumber = () => {
    const numDeaths = this.props.deaths / 1000;
    return Number(Math.sqrt(numDeaths));
  };
  createRecoverNumber = () => {
    const numRec = this.props.recovered / 1000;
    return Number(Math.sqrt(numRec));
  };
  createConfirmedNumber = () => {
    const numRec = this.props.confirmed / 1000;
    return Number(Math.sqrt(numRec));
  };

  createTableDeaths = () => {
    let div = [];

    for (let i = 0; i < this.createDeathNumber(); i++) {
      let children = [];

      for (let j = 0; j < this.createDeathNumber(); j++) {
        children.push(
          <img className="deathIcon" src={LogoSickTwo} alt="human" />
        );
      }

      div.push(<div className="box-deaths">{children}</div>);
    }
    return div;
  };
  createTableRecovered = () => {
    let div = [];

    for (let i = 0; i < this.createRecoverNumber(); i++) {
      let children = [];

      for (let j = 0; j < this.createRecoverNumber(); j++) {
        children.push(<img className="recIcon" src={LogoSick} alt="human" />);
      }

      div.push(<div className="box-second">{children}</div>);
    }
    return div;
  };
  createTableConfirmed = () => {
    let div = [];

    for (let i = 0; i < this.createConfirmedNumber(); i++) {
      let children = [];

      for (let j = 0; j < this.createConfirmedNumber(); j++) {
        children.push(
          <img className="recIcon" src={LogoHealthy} alt="human" />
        );
      }

      div.push(<div className="box-confirmed">{children}</div>);
    }
    return div;
  };

  render() {
    return (
      <div className="container-icons">
        <div>{this.createTableDeaths()}</div>
        <div>{this.createTableRecovered()}</div>
        <div>{this.createTableConfirmed()}</div>
        <div></div>
      </div>
    );
  }
}

export default App;
