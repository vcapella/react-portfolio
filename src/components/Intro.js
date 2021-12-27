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
        I’ve been intrigued by coding for a while and early 2021 I decided to
        give it a try. From small online courses to articles, I liked how this
        universe challenged me and I kept getting more interested in all its
        possibilities. Fast forward to November 2021 and I just got my
        full-stack certificate from the University of Toronto Coding Bootcamp.
      </p>
      <p className="p-intro">
        My skill set includes Javascript, HTML, Node.js, React and CSS,
        including experience with modern frameworks like bootstrap, tailwind and
        bulma as seen in my projects. I like building things from scratch - like
        this portfolio - and I’m always eager to learn new things.
      </p>
    </section>
  );
}

export default Intro;
