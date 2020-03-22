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
      </div>
    );
  }
}

export default App;
