import React from "react";
import Header from "./Header";
import DisplayDate from "./DisplayDate";
import DisplayNumbers from "./DisplayNumbers";
import DisplayText from "./DisplayText";
import DisplayFatalityRate from "./DisplayFatalityRate";
import Footer from "./Footer";

function LeftDisplay(props) {
  return (
    <div className="main-container">
      <div className="display-left">
        <Header />
        <DisplayDate />
        <DisplayNumbers
          deaths={props.deaths}
          recovered={props.recovered}
          confirmed={props.confirmed}
        />
        <DisplayText deaths={props.deaths} />
        <DisplayFatalityRate
          deaths={props.deaths}
          confirmed={props.confirmed}
          recovered={props.recovered}
        />
        <Footer />
      </div>
    </div>
  );
}

export default LeftDisplay;
