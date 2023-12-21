import profilePic from "./assets/profile-picture.jpg";

function App() {
  return (
    <div className="card_container">
      <img src={profilePic} alt="profile-picture" />
      <h3 className="name">Rohit Kirti</h3>
      <h4 className="role">Web Developer</h4>
      <section className="about">
        <h4>About:</h4>
        <p>
          I'm Rohit, a passionate learner on the path to becoming a skilled
          Web Developer.  I bring a strong foundation in React.js, HTML, CSS, and JavaScript. My proficiency in React.js allows me to build interactive and dynamic user interfaces with ease.
        </p>
      </section>
      <section className="contact">
        <h4>Contact:</h4>
        <div className="links">
          <a href="https://www.linkedin.com/in/rohit-kirti-6b2457255/" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a>
          <a href="https://github.com/rohit-2012" target="_blank"><i className="fa-brands fa-github"></i></a>
          <a href="https://twitter.com/rohitkirti1219" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
        </div>
      </section>
    </div>
  );
}

export default App;
