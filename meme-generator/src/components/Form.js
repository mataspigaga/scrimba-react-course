import React, { useState } from "react";
import memesData from "../assets/memesData";

export default function Form() {
  const [memeImage, setMemeImage] = useState(
    "https://placekitten.com/1000/1000"
  );

  const memeHandler = () => {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMemeImage(url);
  };

  return (
    <section className="form--container">
      <form className="input--container">
        <input placeholder="Top Text" type="text" className="top--text" />
        <input placeholder="Bottom Text" type="text" className="bottom--text" />
      </form>
      <button className="form--button" onClick={memeHandler}>
        <span>Get a new meme image</span>
      </button>
      <img className="meme--image" src={memeImage} alt="placeholder" />
    </section>
  );
}
