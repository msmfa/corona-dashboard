import React, { Component } from "react";
import Axios from "axios";
import LogoSick from "./IMG/human-sick.PNG";
import LogoSickTwo from "./IMG/human-icon-sick2.png";
import LogoHealthy from "./IMG/human-icon-healthy.png";
import LogoGrey from "./IMG/defaulthuman.png";
import DisplayDate from "./components/DisplayDate";

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

class LeftDisplay extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="display-left">
          <Header />
          <DisplayDate />
          <DisplayNumbers
            deaths={this.props.deaths}
            recovered={this.props.recovered}
            confirmed={this.props.confirmed}
          />
          <DisplayText />
          <DisplayIcons />
        </div>
      </div>
    );
  }
}

class DisplayIcons extends Component {
  render() {
    return (
      <div className="image-key-container">
        <div className="image-key">
          <img className="recIcon" src={LogoSickTwo} alt="human"></img>
          <p className="icon-text-bottom"> Confirmed</p>
        </div>
        <div className="image-key">
          <img className="recIcon" src={LogoHealthy} alt="human"></img>
          <p className="icon-text-bottom"> Recovered</p>
        </div>
        <div className="image-key">
          <img className="recIcon" src={LogoSick} alt="human"></img>
          <p className="icon-text-bottom"> Deaths</p>
        </div>
        <div className="image-key">
          <img className="recIcon" src={LogoGrey} alt="human"></img>
          <p className="icon-text-bottom"> 1000 People</p>
        </div>
      </div>
    );
  }
}

class DisplayText extends Component {
  render() {
    return (
      <>
        <div className="grey-line"></div>
        <p className="para-text">
          This Website helps to visualise the impact of COVID-19 and it's
          spread.
        </p>

        <p className="para-text">
          The vast numbers infected can make it hard to visualise the
          relationship between those infected, those who recover and those who
          die from the virus.{" "}
          <span className="each-text">Each person represents 1000 people.</span>
        </p>
        <p className="text-lower para-text">
          The data displayed is from the{" "}
          <a
            className="who-link"
            href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
            target="_blank"
            rel="noopener noreferrer"
          >
            WHO
          </a>{" "}
          and is automatically updated.
        </p>
        <Footer />
        <div className="grey-line"></div>
      </>
    );
  }
}
class Header extends Component {
  render() {
    return <h1 className="title">Visualising COVID-19</h1>;
  }
}

class DisplayNumbers extends Component {
  render() {
    return (
      <div className="numbers-container">
        <h3 className="numbers">{this.props.confirmed}</h3>
        <h3 className="numbers">{this.props.recovered}</h3>
        <h3 className="numbers">{this.props.deaths}</h3>
        <h3 className="subtitle">confirmed </h3>
        <h3 className="subtitle">recovered </h3>
        <h3 className="subtitle">deaths</h3>
      </div>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <div className="credit">
        Data API provided by{" "}
        <a
          className="link"
          href="https://github.com/mathdroid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mathdroid.
        </a>
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
