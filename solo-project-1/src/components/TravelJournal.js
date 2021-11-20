import React from "react";

export default function TravelJournal(props) {
  return (
    <div>
      <h1>Travel Journal</h1>
      <p onClick={props.show}>Go Back</p>
    </div>
  );
}
