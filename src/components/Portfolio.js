import React from "react";
import "../styles/Projects.css";

export default function Project(props) {
  return (
    <div>
      <div className="flex">
        <h3>
          {props.name} <a href={props.repo}> Repo </a>{" "}
        </h3>
        <a href={props.live}>
          <img src={props.image} alt="Mockup" />
        </a>
      </div>
    </div>
  );
}
