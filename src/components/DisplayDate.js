import React, { Component } from "react";

class DisplayDate extends Component {
  render() {
    return (
      <>
        <div className="date-container">
          <GetDigit />
          <DisplayMonth />
        </div>
      </>
    );
  }
}

function DisplayMonth() {
  const month = new Date();
  const monthNumber = month.getMonth();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  return <div className="month">{months[monthNumber]}</div>;
}

function GetDigit() {
  const date = new Date();
  const number = String(date.getDate()).padStart(2, "0");
  return <div className="day">{number}</div>;
}

export default DisplayDate;
