import React, { useEffect, useState } from "react";

export default function Form() {
  const [meme, setMeme] = useState({
    randomImage: "https://placekitten.com/1000/1000",
    topText: "",
    bottomText: "",
  });
  const [allMemes, setAllMemes] = useState();

  // API call to get meme images and set state to JSON object
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data));
  }, []);

  // takes in the event, destructures name and value, sets the text value to the value of the input
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  // takes state of API call, randomizes the object to pull an image on button click
  function memeHandler() {
    const memesArray = allMemes.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({ ...prevMeme, randomImage: url }));
  }

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
