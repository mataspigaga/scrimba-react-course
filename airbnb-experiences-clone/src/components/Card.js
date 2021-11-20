import React from "react";
import { AiFillStar } from "react-icons/ai";

export default function Card(props) {
  let badgeText;
  if (props.openSpots <= 0) {
    badgeText = "Sold Out";
  } else if (props.location === "Online") {
    badgeText = "Online";
  }



  return (
    <section className="card--container">
      <a href="/" className="card--image">
        <span>{badgeText}</span>
        {/* <img src={require(`../../pubic/${props.img}`)} alt={props.title} /> */}
        <img src={process.env.PUBLIC_URL + `${props.coverImg}`} alt={props.title} />
      </a>
      <div className="card--info">
        <div className="card--info--ratings">
          <AiFillStar />
          <span>{props.stats.rating}</span>
          <span>
            ({props.stats.reviewCount}) &middot; {props.location}
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
