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

        <Display />
      </div>
    );
  }
}

class Display extends Component {
  createTable = () => {
    let div = [];

    for (let i = 0; i < 28; i++) {
      let children = [];

      for (let j = 0; j < 28; j++) {
        children.push(<div className="box"></div>);
      }

      div.push(<div className="box">{children}</div>);
    }
    return div;
  };

  render() {
    return (
      <div>
        <div className="box-container">{this.createTable()}</div>
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
