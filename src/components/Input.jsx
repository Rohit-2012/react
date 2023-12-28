const Input = ({handleChange, meme, getImage}) => {
  return (
    <section className="user-inputs">
      <div className="top-Text">
        <label htmlFor="topText">Top Text:</label>
        <input type="text" id="topText" name="topText" value={meme.topText} onChange={handleChange}/>
      </div>
      <div className="bottom-Text">
        <label htmlFor="bottomText">Bottom Text:</label>
        <input type="text" id="bottomText" name="bottomText" value={meme.bottomText} onChange={handleChange}/>
      </div>
      <button onClick={getImage}>Get Image</button>
    </section>
  );
};

export default Input;
