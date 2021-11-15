import React from "react";
import { SiAngellist } from "react-icons/si";

export default function Header() {
  return (
    <section className="header">
      <h1>Matas Pigaga</h1>
      <h2>Web Developer</h2>
      <span>Check out my #100DaysOfCode blog:</span>
      <span>
        <a href="https://mataspigaga.com/posts/100-days">Day 56/100</a>
      </span>
      <div className="header--button">
        <a href="https://twitter.com/mataspigaga">
          <SiAngellist />
          <p>Message Me</p>
        </a>
      </div>
    </section>
  );
}
