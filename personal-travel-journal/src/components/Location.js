import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function Location(props) {
  console.log(props);
  return (
    <section className="location--container">
      <article className="location--content">
        <img className="location--image" src={props.item.imageUrl} alt={props.item.title} />
        <div className="location--info">
          <div className="location--location">
            <HiOutlineLocationMarker />
            <span>{props.item.location}</span>
            <a href={props.item.googleMapsUrl}>View on Google Maps</a>
          </div>
          <h1>{props.item.title}</h1>
          <h2>
            {props.item.startDate} - {props.item.endDate}
          </h2>
          <p>{props.item.description}</p>
        </div>
      </article>
    </section>
  );
}
