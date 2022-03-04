import React from "react";
import "../styles/Footer.css";

const styles = {
  footerStyle: {
    background: "white",
  },
};

// We use JSX curly braces to evaluate the style object on the JSX tag

function Footer() {
  return (
    <footer style={styles.footerStyle} className="footer">
      <p className="p-footer">2022 Victor Capella • All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
