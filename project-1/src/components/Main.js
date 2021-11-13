import React from "react";
import logo from "../assets/reactlogo.png";

export default function Main() {
  return (
    <main className="main">
      <h1>Fun Facts About React</h1>
      <ul className="facts-list">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
      <img src={logo} alt="react logo" />
    </main>
  );
}
