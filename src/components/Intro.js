import React from "react";
import "../styles/Intro.css";
import myself from "../assets/me_wide.jpeg";

// By importing the Section.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  introStyles: {
    background: "white",
  },
};

// We use JSX curly braces to evaluate the style object on the JSX tag

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
        My name is Victor Capella and I'm a junior web developer, living in
        Toronto, Canada and looking forward for my first opportunity as a
        developer.
      </p>
      <p>Passionate about Science 🔬, Soccer ⚽️ and Counter-Strike 🎮. </p>
      <br></br>
      <br></br>
    </section>
  );
}

export default Intro;
