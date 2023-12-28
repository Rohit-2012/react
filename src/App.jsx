import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Meme from "./components/Meme";
import { useEffect } from "react";

function App() {
  const [allMemeImg, setAllMemeImg] = useState(() => []);
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    memeImage: "http://i.imgflip.com/1bij.jpg" 
  });

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemeImg((prevArray) => data.data.memes));
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  const getImage = () => {
    const randomNumber = Math.floor(Math.random() * allMemeImg.length);
    const url = allMemeImg[randomNumber].url;

    setMeme((prevMeme) => ({ ...prevMeme, memeImage: url }));
  };

  return (
    <main>
      <Header />
      <Input handleChange={handleChange} meme={meme} getImage={getImage} />
      <Meme meme={meme} />
    </main>
  );
}

export default App;
