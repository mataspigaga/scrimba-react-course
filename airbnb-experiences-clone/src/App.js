import React from "react";
import "./style.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

import cardData from "./assets/data";

export default function App() {
  const cards = cardData.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <div className="container">
      <Navbar />
      <main className="container--main">
        <Hero />
        <div className="card--group">{cards}</div>
      </main>
    </div>
  );
}
