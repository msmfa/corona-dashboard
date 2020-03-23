import React, { Component } from "react";
import Axios from "axios";
import LogoSick from "./IMG/human-sick.PNG";
import LogoSickTwo from "./IMG/human-icon-sick2.png";
import LogoHealthy from "./IMG/human-icon-healthy.png";
import LogoGrey from "./IMG/human-icon-grey.png";
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
          <h1 className="title">Visualising COVID-19</h1>
          <p className="display-left-text">
            The first case of the new Coronavirus COVID-19 was recorded on 31
            December in Wuhan, China (WHO). Since then {this.state.confirmed}{" "}
            confirmed cases have been recorded worldwide.{" "}
          </p>
          <p className="display-left-text">
            This Website helps to visualise COVID-19s spread and it's impact on
            humanity.
            <div className="image-container">
              <img className="recIcon" src={LogoGrey} alt="human"></img>
              <p> = 1000 People</p>
            </div>
          </p>
          <h3 className="subtitle">confirmed: </h3>
          <h3 className="numbers">{this.state.confirmed}</h3>
          <h3 className="subtitle">recovered: </h3>
          <h3 className="numbers">{this.state.recovered}</h3>
          <h3 className="subtitle">deaths:</h3>{" "}
          <h3 className="numbers">{this.state.deaths}</h3>
          <div className="credit">
            Data API provided by{" "}
            <a
              href="https://github.com/mathdroid"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mathdroid.
            </a>
          </div>
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
    console.log(this.createDeathNumber());
    let div = [];

    for (let i = 0; i < this.createDeathNumber(); i++) {
      let children = [];

      for (let j = 0; j < 1; j++) {
        children.push(<img className="deathIcon" src={LogoSick} alt="human" />);
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
        children.push(
          <img className="recIcon" src={LogoSickTwo} alt="human" />
        );
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

export default App;
