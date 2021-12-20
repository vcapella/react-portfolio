import React from "react";
import FindMe from "./FindMeProps";

const SocialMedia = [
  {
    image: "images/Github.png",
    social: "https://github.com/vcapella",
    att: "Github logo",
    id: 1,
  },
  {
    image: "images/Linkedin.png",
    social: "https://www.linkedin.com/in/victorcapella/",
    att: "Linkedin logo",
    id: 2,
  },
  {
    image: "images/Instagram.png",
    social: "https://www.instagram.com/vcapella89/",
    att: "Instagram logo",
    id: 3,
  },
  {
    image: "images/Steam.png",
    social: "https://steamcommunity.com/id/kingcapella/",
    att: "Steam logo",
    id: 4,
  },
];

export default function Contact() {
  return (
    <div>
      <h2>Find Me</h2>
      <p>capella89@outlook.com</p>
      {SocialMedia.map((socialM) => (
        <FindMe
          image={socialM.image}
          social={socialM.social}
          key={socialM.id}
        />
      ))}
    </div>
  );
}
