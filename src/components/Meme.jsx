import { useState, useEffect } from "react";

export default function Meme() {
  const [memeObject, setMemeObject] = useState({
    topText: "",
    bottomText: "",
    imgUrl: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    async function getMeme() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes);
    }
    getMeme();
  }, []);

  function randomImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMemeObject((prevData) => ({
      ...prevData,
      imgUrl: url,
    }));
  }

  function handleChange(event) {
    const { value, name } = event.target;
    setMemeObject((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="container">
        <div className="form">
          <input
            type="text"
            placeholder="Top Text"
            onChange={handleChange}
            value={memeObject.topText}
            name="topText"
          />
          <input
            type="text"
            placeholder="Bottom Text"
            onChange={handleChange}
            value={memeObject.bottomText}
            name="bottomText"
          />
          <button onClick={randomImage} className="button">
            Generate New Image
          </button>
        </div>
        <div className="meme">
          <img src={memeObject.imgUrl} alt="" className="meme-img" />
          <h2 className="tertiary-heading meme-text top">
            {memeObject.topText}
          </h2>
          <h2 className="tertiary-heading meme-text bottom">
            {memeObject.bottomText}
          </h2>
        </div>
      </div>
    </main>
  );
}
