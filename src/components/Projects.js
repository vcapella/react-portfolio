import React from "react";
import "../styles/Projects.css";
import gitLogo from "../assets/github-logo.png";

export default function Project(props) {
  return (
    <div className="container">
      <div className="title-repo">
        <h2 className="h2-project">{props.name}</h2>
        <a
          // className="repo-btn"
          href={props.repo}
          target="_blank"
          rel="noreferrer"
        >
          <img className="repo-btn" src={gitLogo} alt="Github button" />
        </a>
      </div>

      <a href={props.live} target="_blank" rel="noreferrer">
        <img className="project-img" src={props.image} alt="Mockup" />
      </a>
    </div>
  );
}
