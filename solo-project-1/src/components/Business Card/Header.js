import React from "react";
import { SiAngellist } from "react-icons/si";

export default function Header() {
  const daysPassed =
    59 +
    Math.floor(
      (new Date() - new Date("November 20, 2021 00:00:00")) /
        (24 * 60 * 60 * 1000)
    );

  return (
    <section className="header">
      <h1>Matas Pigaga</h1>
      <h2>Web Developer</h2>
      <span>Check out my #100DaysOfCode blog:</span>
      <span>
        <a href="https://mataspigaga.com/posts/100-days">
          Day {daysPassed}/100
        </a>
      </span>
      <div className="header--button">
        <a href="https://twitter.com/mataspigaga">
          <SiAngellist />
          <p>Message Me</p>
        </a>
      </div>
      {/* <div className={darkMode ? "darkMode" : ""}></div> */}
    </section>
  );
}
