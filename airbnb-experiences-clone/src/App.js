import React from "react";
import "./style.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

import cardData from "./assets/data";

export default function App() {
  const cards = cardData.map((person) => {
    return (
      <Card
        key={person.id}
        img={person.coverImg}
        rating={person.stats.rating}
        reviewCount={person.stats.reviewCount}
        location={person.location}
        title={person.title}
        price={person.price}
        description={person.description}
      />
    );
  });

  return (
    <div className="container">
      <Navbar />
      <Hero />
      <div className="card--group">{cards}</div>
    </div>
  );
}
