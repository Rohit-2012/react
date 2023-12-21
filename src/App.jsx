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
          {" "}
          I'm Rohit, a passionate learner on the path to becoming a skilled
          Frontend Developer. I'm thriving as a Frontend Developer trainee and
          Teaching Assistant at FunctionUp since Feb 2023.
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
