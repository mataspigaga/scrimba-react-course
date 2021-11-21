import React from "react";
import { GiAirplaneDeparture } from "react-icons/gi";

export default function Header() {
  return (
    <header className="header--container">
      <GiAirplaneDeparture className="header--icon" />
      <span className="header--title">my travel journal.</span>
    </header>
  );
}
