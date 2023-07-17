import { VscGithub } from "react-icons/vsc";
import { AiFillLinkedin } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import React from "react";
const AboutMe = () => {
  const emailButtonClick = () => {
    window.location.href = "mailto:Gkensdale@outlook.com";
  };
  const linkedInCLick = () => {
    window.location.replace(
      "https://www.linkedin.com/in/guy-kensdale-805829145/"
    );
  };
  const gitHubClick = () => {
    window.location.replace("https://github.com/GuyKensdale");
  };

  return (
    <div className="AboutMeCon">
      <section id="about">
        <ul>
          <li>
            <a href="#experience">Technical Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
        </ul>
        <h2>About Me</h2>
        <div className="centrePTag">
          <p>
            Welcome to my portfolio! I'm passionate about coding and have a deep
            curiosity for the intricacies of binary and the fundamental
            principles of programming. With expertise in TypeScript, React, and
            React Native, I specialize as a versatile full-stack coder. What
            drives me is the satisfaction of overcoming obstacles and developing
            efficient code to bring innovative solutions to life. I've had the
            privilege of contributing to the successful development of the
            "Local Link" app, where I implemented tailored features for diverse
            user types. Collaborating with fellow developers has enriched my
            perspective and deepened my understanding of coding. I am dedicated
            to a long-term coding career, continuously learning, growing, and
            transforming ideas into reality. Embracing evolving challenges
            excites me, and I'm always eager to take on new projects and expand
            my skillset. Feel free to explore my portfolio and get in touch if
            you have any questions or potential collaborations. I look forward
            to connecting and creating amazing things together! If you have any
            specific questions or further details you'd like to include, please
            let me know, and I'll be happy to assist you further!
          </p>
        </div>
        <ul>
          <li>
            <button className="button-63" onClick={gitHubClick} title="GitHuB">
              <VscGithub></VscGithub>
            </button>
          </li>
          <li>
            <button
              className="button-63"
              onClick={linkedInCLick}
              title="Linkedin"
            >
              <AiFillLinkedin></AiFillLinkedin>
            </button>
          </li>
          <li>
            <button
              className="button-63"
              onClick={emailButtonClick}
              title="Contact me"
            >
              <MdAlternateEmail></MdAlternateEmail>
            </button>
          </li>
        </ul>
      </section>
    </div>
  );
};
export default AboutMe;
