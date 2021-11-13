import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Image from "./components/Image";
import Info from "./components/Info";
import "./style.css";

export default function App() {
  return (
    <div className="container">
      <Image />
      <Header />
      <Info />
      <Footer />
    </div>
  );
}
