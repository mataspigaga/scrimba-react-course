import React from "react";
import BusinessCard from "./components/BusinessCard";
import "./style.css";

export default function App(props) {
  return (
    <div className="container">
      <BusinessCard
        darkMode={props.darkMode}
        toggleDarkMode={props.toggleDarkMode}
      />
    </div>
  );
}
