import React from "react";
import "../styles/Navbar.css";
import resume from "../assets/victor-capella-resume.pdf";
// By importing the Navbar.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  navbarStyle: {
    background: "white",
  },
};

// We use JSX curly braces to evaluate the style object on the JSX tag

function Navbar() {
  return (
    <nav style={styles.navbarStyle} className="navbar">
      <a href="/">Intro </a>
      <a href="/projects">Projects </a>
      <a href="/find-me">Find Me </a>
      <a href={resume} target="_blank" rel="noreferrer">
        My Resume
      </a>
    </nav>
  );
}

export default Navbar;
