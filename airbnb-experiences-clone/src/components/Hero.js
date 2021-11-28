import React from "react";
import headerImage from "../assets/photo-grid.png";

export default function Hero() {
  return (
    <section className="hero--container">
      <img src={headerImage} alt="experiences collage" />
      <h1>Unique Experiences</h1>
      <p>
        Join others in totally normal activities for affordable prices. If
        you've experienced injury and or death, please contact a lawyer.
      </p>
    </section>
  );
}
