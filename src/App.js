import React, { Component } from "react";
import Axios from "axios";

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
      <div>
        <h1>Corono Dashboard</h1>
        <h2>confirmed: {this.state.confirmed}</h2>
        <h2>recovered: {this.state.recovered}</h2>
        <h2>deaths: {this.state.deaths}</h2>
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
    const numDeaths = this.props.deaths;
    return Math.sqrt(numDeaths);
  };
  createRecoverNumber = () => {
    const numRec = this.props.recovered;
    return Math.sqrt(numRec);
  };
  createConfirmedNumber = () => {
    const numRec = this.props.confirmed;
    return Math.sqrt(numRec);
  };

  createTableDeaths = () => {
    let div = [];

    for (let i = 0; i < this.createDeathNumber(); i++) {
      let children = [];

      for (let j = 0; j < this.createDeathNumber(); j++) {
        children.push(<div className="box-deaths"></div>);
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
        children.push(<div className="box-second"></div>);
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
        children.push(<div className="box-confirmed"></div>);
      }

      div.push(<div className="box-confirmed">{children}</div>);
    }
    return div;
  };

  render() {
    return (
      <div>
        <div className="box-container-deaths">{this.createTableDeaths()}</div>
        <div className="box-container-second">
          {this.createTableRecovered()}
        </div>
        <div className="box-container-confirmed">
          {this.createTableConfirmed()}
        </div>
        <div></div>
      </div>
    );
  }
}

// function createDivs() {
//   for (let i = 0; i < 17 * 17; i++) {
//     const content = document.createElement("div");
//     content.classList.add("content");
//     container.appendChild(content);
//     const box = document.querySelectorAll("div.content");
//     box.forEach(box => {
//       box.addEventListener("mouseover", changeColour);
//     });
//   }
// }

export default App;
