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
        My name is Victor Capella, I'm a junior web developer living in Toronto,
        Canada and looking forward to my first opportunity as a developer. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate
        ipsum dolor, eu accumsan nunc facilisis ut. Sed hendrerit maximus
        libero, quis gravida dui ultrices ut. Sed non tincidunt urna. Mauris
        tellus urna, fermentum ac justo at, euismod interdum magna. Nulla neque
        enim, semper eget sapien vel, venenatis porta justo. Pellentesque
        pharetra quam nec nisi venenatis, a fermentum tellus gravida. Aliquam
        aliquam lacinia ligula. Donec sed accumsan elit. Morbi eget aliquet
        elit. Maecenas bibendum accumsan libero nec hendrerit. Maecenas leo
        nulla, sollicitudin at sem nec, mollis consectetur sapien. Vivamus
        lobortis vitae leo sed fringilla. Nulla ut efficitur urna. Suspendisse
        pulvinar erat sed cursus facilisis.
      </p>
      <p className="p-intro">
        Passionate about Science 🔬, Soccer ⚽️ and Counter-Strike 🎮.
      </p>
    </section>
  );
}

export default Intro;
