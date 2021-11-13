import React from "react";
import logo from "../assets/reactlogo.png";

export default function Header() {
  return (
    <nav className="nav">
      <div className='logo'>
        <img src={logo} alt="react logo" />
        <h2>ReactFacts</h2>
      </div>
      <h4>React Course - Project 1</h4>
    </nav>
  );
}
