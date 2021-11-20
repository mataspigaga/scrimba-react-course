import React, { useState } from "react";
import BusinessCard from "./components/BusinessCard";
import TravelJournal from "./components/TravelJournal";
import "./style.css";

export default function App() {
  const [homePage, setHomePage] = useState(true);

  const homePageHandler = () => {
    setHomePage(false);
  };

  const travelPageHandler = () => {
    setHomePage(true);
  };

  return (
    <div className="container">
      {homePage ? (
        <BusinessCard show={homePageHandler} />
      ) : (
        <TravelJournal show={travelPageHandler} />
      )}
    </div>
  );
}
