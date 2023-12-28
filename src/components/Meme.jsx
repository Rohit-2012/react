

const Meme = ({ meme }) => {
  return (
    <section className="meme-container">
          <div className="top-caption">
              <span>{meme.topText}</span>
          </div>
          <img src={meme.memeImage} alt="Meme Image" />
          <div className="bottom-caption">
              <span>{meme.bottomText}</span>
      </div>
    </section>
  )
}

export default Meme
