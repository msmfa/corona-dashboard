import React, { Component } from "react";
import Axios from "axios";
import DisplayDeaths from "./components/DisplayDeaths";
import LeftDisplay from "./components/LeftDisplay";
import DisplayIcons from "./components/DisplayIcons";

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
          key={this.state.key}
          deaths={this.state.deaths}
          recovered={this.state.recovered}
          confirmed={this.state.confirmed}
        />

        <DisplayIcons />
      </div>
    );
  }
}

export default App;
