import React, { useState } from "react";
import memesData from "../assets/memesData";

export default function Form() {
  const [meme, setMeme] = useState({
    randomImage: "https://placekitten.com/1000/1000",
    topText: "",
    bottomText: "",
  });
  console.log(meme);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  const memeHandler = () => {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({ ...prevMeme, randomImage: url }));
  };

  return (
    <section className="form--container">
      <form className="input--container">
        <input
          placeholder="Top Text"
          type="text"
          className="top--text"
          name="topText"
          onChange={handleChange}
          value={meme.topText}
        />
        <input
          placeholder="Bottom Text"
          type="text"
          className="bottom--text"
          name="bottomText"
          onChange={handleChange}
          value={meme.bottomText}
        />
      </form>
      <button className="form--button" onClick={memeHandler}>
        <span>Get a new meme image</span>
      </button>
      <div className="meme--container">
        <img className="meme--image" src={meme.randomImage} alt="meme" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </section>
  );
}
