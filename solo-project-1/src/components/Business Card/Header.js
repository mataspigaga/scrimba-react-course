import React from "react";
import { SiAngellist, SiUpwork } from "react-icons/si";

export default function Header() {
  const daysPassed =
    19 +
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
      <div className="header--button--1">
        <a href="https://twitter.com/mataspigaga">
          <SiAngellist />
          <p>Message Me</p>
        </a>
      </div>
      <div className="header--button--2">
        <a href="https://www.upwork.com/freelancers/~0196914833f1ac0d84">
          <SiUpwork />
          <p>Hire Me on Upwork!</p>
        </a>
      </div>
      {/* <div className={darkMode ? "darkMode" : ""}></div> */}
    </section>
  );
}
