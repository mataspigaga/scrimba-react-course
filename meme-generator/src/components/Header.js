import React from "react";
import logo from "../assets/troll-face.png";

export default function Header() {
  return (
    <header className="header--container">
      <img src={logo} alt="meme logo" className="logo--image" />
      <h1 className="logo--heading">Meme Generator</h1>
    </header>
  );
}
