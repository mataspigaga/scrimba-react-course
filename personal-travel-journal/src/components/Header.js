import React from "react";
import { GiAirplaneDeparture } from "react-icons/gi";

export default function Header() {
  return (
    <header className="header--container">
      <GiAirplaneDeparture className="header--icon" />
      <h1 className="header--title">my travel journal.</h1>
    </header>
  );
}
