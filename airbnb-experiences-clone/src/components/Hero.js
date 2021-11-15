import React from "react";
import headerImage from "../assets/photo-grid.png";

export default function Hero() {
  return (
    <section className="hero--container">
      <img
        src={headerImage}
        alt="experiences collage"
      />
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
