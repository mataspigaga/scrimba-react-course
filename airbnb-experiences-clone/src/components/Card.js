import React from "react";
import { AiFillStar } from "react-icons/ai";

export default function Card(props) {
  let badgeText;
  if (props.item.openSpots <= 0) {
    badgeText = "Sold Out";
  } else if (props.item.location === "Online") {
    badgeText = "Online";
  }

  

  return (
    <section className="card--container">
      <a href="/" className="card--image">
        <span>{badgeText}</span>
        {/* <img src={require(`../../pubic/${props.img}`)} alt={props.title} /> */}
        <img src={process.env.PUBLIC_URL + `${props.item.coverImg}`} alt={props.item.title} />
      </a>
      <div className="card--info">
        <div className="card--info--ratings">
          <AiFillStar />
          <span>{props.item.stats.rating}</span>
          <span>
            ({props.item.stats.reviewCount}) &middot; {props.item.location}
          </span>
        </div>
        <div>{props.item.title}</div>
        <div>
          <strong>From ${props.item.price}</strong> / person
        </div>
      </div>
    </section>
  );
}
