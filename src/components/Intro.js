import React from "react";
import "../styles/Intro.css";
import myself from "../assets/victor-profile.png";

const styles = {
  introStyles: {
    background: "white",
  },
};

function Intro() {
  return (
    <section style={styles.introStyles} className="section">
      <center>
        <img className="img-intro" src={myself} alt="myself" />
      </center>

      <h2 className="intro-h2">Hello!</h2>
      <p className="p-intro">
        Curious by nature, fast learner and gamer in my spare time. I'm Victor,
        a Brazilian web developer currently based in Toronto, Canada.
      </p>
      <p className="p-intro">
        I have a full-stack certificate from the University of Toronto Coding
        Bootcamp and my skill set includes Javascript, HTML, Node.js, React and
        CSS, as well as experience with modern frameworks like bootstrap,
        tailwind and bulma as seen in my projects.
      </p>
      <p className="p-intro gap">
        I like building things from scratch - like this portfolio - and I’m
        always eager to learn new things.
      </p>
    </section>
  );
}

export default Intro;
