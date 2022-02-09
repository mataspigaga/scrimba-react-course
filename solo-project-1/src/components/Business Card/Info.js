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
        {/* New Portfolio */}
        <a
          className="info--project"
          href="https://project-portfolio-a14d17.webflow.io/"
        >
          <h4 className="info--project--0">
            <strong>New Minimal Portfolio</strong>
          </h4>
        </a>
        {/* Project 1 */}
        <a
          className="info--project"
          href="https://personal-travel-journal.vercel.app"
        >
          <h4 className="info--project--1">Personal Travel Journal</h4>
        </a>
        {/* Project 2 */}
        <a
          className="info--project"
          href="https://scrimba-react-course.vercel.app"
        >
          <h4 className="info--project--2">Airbnb Experiences Clone</h4>
        </a>
        {/* Project 3 */}
        <a
          className="info--project"
          href="https://meme-generator-taupe-psi.vercel.app/"
        >
          <h4 className="info--project--3">Meme Generator</h4>
        </a>
        {/* Project 4 */}
        <a
          className="info--project"
          href="https://markdown-notes-app-sable.vercel.app"
        >
          <h4 className="info--project--4">
            Markdown Notes App -{" "}
            <em>
              <strong>In Progress</strong>
            </em>
          </h4>
        </a>
        {/* Project 5 */}
        <a
          className="info--project"
          href="https://tenzies-game-seven.vercel.app/"
        >
          <h4 className="info--project--5">Tenzies Game</h4>
        </a>
      </section>
    </main>
  );
}
