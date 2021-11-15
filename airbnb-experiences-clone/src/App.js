import React from "react";
import image from "./assets/photo-grid.png";
import logo from "./assets/airbnb-logo.png";

/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App() {
  return (
    <div className="container">
      
      <img src={logo} />
      <img src={image} />
    </div>
  );
}
