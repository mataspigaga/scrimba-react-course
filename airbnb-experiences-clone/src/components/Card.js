import React from "react";
import { AiFillStar } from "react-icons/ai";

export default function Card(props) {
  return (
    <section className="card--container">
      <a href="/" className="card--image">
        {props.openSpots <= 0 && <span>Sold Out</span>}
        <img src={require(`../../pubic/${props.img}`)} alt={props.title} />
      </a>
      <div className="card--info">
        <div className="card--info--ratings">
          <AiFillStar />
          <span>{props.rating}</span>
          <span>
            ({props.reviewCount}) &middot; {props.location}
          </span>
        </div>
        <div>{props.title}</div>
        <div>
          <strong>From ${props.price}</strong> / person
        </div>
      </div>
    </section>
  );
}
