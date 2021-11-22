import React from "react";
import "../styles/FindMe.css";

export default function FindMe(props) {
  return (
    <div id="contact-me-link" class="contact-format">
      <a href={props.social}>
        <img src={props.image} alt={props.att} />
      </a>
    </div>
  );
}
