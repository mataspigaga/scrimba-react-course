import React from "react";
import { AiOutlineCamera } from "react-icons/ai";

export default function Form() {
  return (
    <section className="form--container">
      <form className="input--container">
        <input placeholder="Top Text" type="text" className="top--text" />
        <input placeholder="Bottom Text" type="text" className="bottom--text" />
      </form>
      <button className="form--button">
        <span>Get a new meme image</span>
        {/* <AiOutlineCamera /> */}
      </button>
    </section>
  );
}
