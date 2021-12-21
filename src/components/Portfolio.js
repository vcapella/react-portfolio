import React from "react";
import "../styles/Projects.css";

export default function Project(props) {
  return (
    <div className="container">
      <div className="title-repo">
        <h2 className="h2-project">{props.name}</h2>
        <a className="repo-btn" href={props.repo}>
          Repo
        </a>
      </div>

      <a href={props.live}>
        <img className="project-img" src={props.image} alt="Mockup" />
      </a>
    </div>
  );
}
