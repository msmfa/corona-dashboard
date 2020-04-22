import React, { useState, useEffect } from "react";
import Axios from "axios";
import DisplayDeaths from "./components/DisplayDeaths";
import LeftDisplay from "./components/LeftDisplay";
import DisplayIcons from "./components/DisplayIcons";

//app passes

function App() {
  const [state, setState] = useState({ confirmed: 0 });

  useEffect(() => {
    async function getData() {
      const res = await Axios.get("https://covid19.mathdro.id/api");
      setState({
        confirmed: res.data.confirmed.value,
        recovered: res.data.recovered.value,
        deaths: res.data.deaths.value,
      });
    }
    getData();
  }, []);

  return (
    <div className="flex-container">
      <LeftDisplay
        confirmed={state.confirmed}
        recovered={state.recovered}
        deaths={state.deaths}
      />

      <DisplayDeaths
        key={state.key}
        deaths={state.deaths}
        recovered={state.recovered}
        confirmed={state.confirmed}
      />

      <DisplayIcons />
    </div>
  );
}

export default App;
