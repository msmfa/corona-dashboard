import React from "react";

function DisplayText() {
  const NUM_ICON_REPRESENTS = 10000;

  return (
    <>
      <div className="grey-line"></div>
      <p className="para-text">
        This Website helps to visualise the impact of COVID-19 and it's spread.
      </p>

      <div className="para-text">
        The vast numbers infected can make it hard to visualise the relationship
        between those infected, those who recover and those who die from the
        virus.{" "}
        <p className="each-text">
          Each icon displayed represents {NUM_ICON_REPRESENTS} people.
        </p>
      </div>
      <p className="text-lower para-text">
        The data displayed is from{" "}
        <a
          className="johns-hopkins-link"
          href="https://coronavirus.jhu.edu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          John Hopskins University
        </a>{" "}
        and is automatically updated.
      </p>
    </>
  );
}

export default DisplayText;
