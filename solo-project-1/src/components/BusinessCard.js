import React, { Fragment } from "react";
import Footer from "./Business Card/Footer";
import Header from "./Business Card/Header";
import Image from "./Business Card/Image";
import Info from "./Business Card/Info";

export default function BusinessCard(props) {
  return (
    <>
      <Image />
      <Header />
      <Info show={props.show} />
      <Footer />
    </>
  );
}
