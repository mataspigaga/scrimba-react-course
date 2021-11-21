import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Journal from "./components/Journal";

export default function App() {
  return (
    <div className="container">
      <Header />
      <Journal />
      <Footer />
    </div>
  );
}
