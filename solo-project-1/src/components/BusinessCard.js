import React from "react";
import Footer from "./Business Card/Footer";
import Header from "./Business Card/Header";
import Image from "./Business Card/Image";
import Info from "./Business Card/Info";

export default function BusinessCard(props) {
  return (
    <>
      <Image darkMode={props.darkMode} />
      <Header darkMode={props.darkMode} toggleDarkMode={props.toggleDarkMode} />
      <Info darkMode={props.darkMode} />
      <Footer darkMode={props.darkMode} />
    </>
  );
}
