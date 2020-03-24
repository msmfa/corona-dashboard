import React, { Component } from "react";
import Axios from "axios";
import DisplayDeaths from "./components/DisplayDeaths";
import LeftDisplay from "./components/LeftDisplay";

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
      <div className="flex-container">
        <LeftDisplay
          confirmed={this.state.confirmed}
          recovered={this.state.recovered}
          deaths={this.state.deaths}
        />
        <DisplayDeaths
          deaths={this.state.deaths}
          recovered={this.state.recovered}
          confirmed={this.state.confirmed}
        />
      </div>
    );
  }
}

export default App;
