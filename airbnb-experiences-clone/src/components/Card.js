import React from "react";
import placeholderProfile from "../assets/placeholder-profile.png";
import { AiFillStar } from "react-icons/ai";

export default function Card() {
  return (
    <section className="card--container">
      <img src={placeholderProfile} />
      <div className="card--info">
        <span>
          <AiFillStar /> (6) &middot; USA
        </span>
        <h3>Life lessons with Katie Zaferes</h3>
        <p>
          <em>From $136</em> / person
        </p>
      </div>
    </section>
  );
}
