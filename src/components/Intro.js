import React from "react";
import "../styles/Intro.css";
import myself from "../assets/me_wide.jpeg";

const styles = {
  introStyles: {
    background: "white",
  },
};

function Intro() {
  return (
    <section style={styles.introStyles} className="section">
      <center>
        <img src={myself} alt="myself" />
      </center>

      <br></br>
      <br></br>
      <h2>Hello!</h2>
      <p>
        My name is Victor Capella, I'm a junior web developer living in Toronto,
        Canada and looking forward to my first opportunity as a developer.
      </p>
      <p>Passionate about Science 🔬, Soccer ⚽️ and Counter-Strike 🎮. </p>
      <br></br>
      <br></br>
    </section>
  );
}

export default Intro;
