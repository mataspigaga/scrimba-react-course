import React from "react";
import Location from "./Location";
import travelData from "../assets/data";

export default function Journal() {
  const locations = travelData.map((item) => {
    return (
      <>
        <Location key={item.id} item={item} />
        <hr className="horizontal--break" />
      </>
    );
  });

  return <main>{locations}</main>;
}
