import React from "react";

export default function Header() {
  return (
    <section className="header">
      <h1>Matas Pigaga</h1>
      <h2>Web Developer</h2>
      <span>matas.io</span>
      <div className="header--buttons">
        <a href="mailto:hello@matas.io">Email</a>
        <a href="https://twitter.com/mataspigaga">Twitter</a>
      </div>
    </section>
  );
}
