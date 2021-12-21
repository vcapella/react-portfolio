import React from "react";
import Portfolio from "./Portfolio";

const projects = [
  {
    name: "Studiously",
    image: "images/studiously.jpg",
    repo: "https://github.com/AarKaiser/studiously",
    live: "hhttps://studiously.herokuapp.com/",
    id: 1,
  },
  {
    name: "Spooky Sights",
    image: "images/spooky_sights.png",
    repo: "https://github.com/vcapella/Cobweb-coders",
    live: "https://spooky-sights.herokuapp.com/homepage",
    id: 2,
  },
  {
    name: "Muscle and Meals",
    image: "images/muscles_meals.JPG",
    repo: "https://github.com/Wickette/V_A_S_T",
    live: "https://wickette.github.io/V_A_S_T/",
    id: 3,
  },
  {
    name: "Day Planner",
    image: "images/dayplanner.JPG",
    repo: "https://github.com/vcapella/05_day-planner",
    live: "https://vcapella.github.io/05_day-planner/",
    id: 4,
  },
  {
    name: "Quiz Challenge",
    image: "images/quiz_challenge.JPG",
    repo: "https://github.com/vcapella/04_code-quiz",
    live: "https://vcapella.github.io/04_code-quiz/",
    id: 5,
  },
  {
    name: "Note Taker",
    image: "images/note_taker.jpg",
    repo: "https://github.com/vcapella/11_note-taker",
    live: "https://note-taker-vcap.herokuapp.com/",
    id: 6,
  },
];

export default function Display() {
  return (
    <div>
      {projects.map((project) => (
        <Portfolio
          name={project.name}
          image={project.image}
          repo={project.repo}
          live={project.live}
          key={project.id}
        />
      ))}
    </div>
  );
}
