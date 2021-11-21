import React from "react";

export default function Info() {
  return (
    <main className="info">
      <section className="info--section">
        <h3>About</h3>
        <p>
          I am an aspiring web developer with a particular interest in
          optimization. I like building things from the ground up with
          performance and user experience in mind.
        </p>
      </section>
      <section className="info--section">
        <h3>Interests</h3>
        <p>
          Audiobook Addict. Car Aficionado. Spicy Bartender. Entreprenuer.
          Coffee Shop Crawler. Podcast Junkie. Party DJ. Cat Dad of 2.
        </p>
      </section>
      <section className="info--section">
        <h3>Projects</h3>
        <a
          className="info--project"
          href="https://personal-travel-journal.vercel.app"
        >
          <h4 className="info--project--1">
            Personal Travel Journal (In progress)
          </h4>
        </a>
        <a
          className="info--project"
          href="https://scrimba-react-course.vercel.app"
        >
          <h4 className="info--project--2">Airbnb Experiences Clone</h4>
        </a>
      </section>
    </main>
  );
}
