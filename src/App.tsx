import React from "react";
import { Link } from "react-router-dom";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "./assests/computer.json";
import "./App.css";
import { useRef } from "react";
const App = () => {
  const computerRef = useRef<LottieRefCurrentProps>(null);
  const handleLocalGitClick = () => {
    window.location.replace("https://github.com/GuyKensdale/Local-Link");
  };
  const handleLocalVideoClick = () => {
    window.location.replace("https://www.youtube.com/watch?v=wKhwUYicCyw");
  };
  const handleFENewsGitClick = () => {
    window.location.replace("https://github.com/GuyKensdale/Fe-News");
  };
  const handleBENewsGitClick = () => {
    window.location.replace("https://github.com/GuyKensdale/BE_News");
  };
  const handleChatGitClick = () => {
    window.location.replace("https://github.com/GuyKensdale/Chat-Spike-");
  };
  return (
    <div className="container">
      <h1>Guy Kensdale</h1>
      <h2>Full Stack Developer</h2>

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

      <div className="lottie-container">
        <div id="lottieAnimation">
          <Lottie
            onComplete={() => {
              computerRef.current?.goToAndPlay(104, true);
            }}
            lottieRef={computerRef}
            loop={false}
            animationData={animationData}
          />
        </div>
      </div>

      <section id="experience">
        <div className="skills">
          <h2>Technical Skills</h2>
          <div className="skill">
            <h3 className="skill-name">LANGUAGES</h3>
            <p>JavaScript</p>
            <div className="bar">
              <div className="bar-fill" style={{ width: "100%" }}></div>
            </div>
            <p>TypeScript</p>
            <div className="bar">
              <div className="bar-fill" style={{ width: "91%" }}></div>
            </div>
            <p>RSLogixs 500</p>
            <div className="bar">
              <div className="bar-fill" style={{ width: "74%" }}></div>
            </div>
          </div>
          <div className="skill">
            <h3 className="skill-name">FRONT END</h3>
            <p>HTML</p>
            <div className="bar">
              <div className="bar-fill" style={{ width: "85%" }}></div>
            </div>
            <p>React</p>
            <div className="bar">
              <div className="bar-fill" style={{ width: "98%" }}></div>
            </div>
            <p>React-Native</p>
            <div className="bar">
              <div className="bar-fill" style={{ width: "94%" }}></div>
            </div>
            <p>CSS</p>
            <div className="bar">
              <div className="bar-fill" style={{ width: "80%" }}></div>
            </div>
            <p>Tailwind</p>
            <div className="bar">
              <div className="bar-fill" style={{ width: "75%" }}></div>
            </div>
          </div>
          <div className="skill">
            <h3 className="skill-name">BACK END</h3>
            <p>SQL (PSQL)</p>
            <div className="bar">
              <div className="bar-fill" style={{ width: "100%" }}></div>
            </div>
            <p>Firebase</p>
            <div className="bar">
              <div className="bar-fill" style={{ width: "99%" }}></div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <h3>LocaLink</h3>
        <p>
          LocaLink is a mobile app I have co-created to unite people living in
          the same area or buildings without the hassle of sharing personal
          information, such as email or phone number, with people you don’t know
          or have just met, which is often the case on other social media
          platforms. LocaLink aims to be the one-stop shop for online community
          interaction, avoiding the need for several groups and pages across
          many different platforms. Making all the information about a building
          or neighbourhood organised and accessible
        </p>
        <div className="centreButton">
          <button className="button-63" onClick={handleLocalGitClick}>
            GitHub Repo
          </button>
          <button className="button-63" onClick={handleLocalVideoClick}>
            Video demo{" "}
          </button>
        </div>
        <h3>Guys News</h3>
        <p>
          Guys News is a full stack project i created, allowing users to view
          news articles from a home page, within this website you can leave
          comments and up vote articles and these actions work directly with a
          back end psql database.as well as navigate through various articles.
        </p>
        <div className="centreButton">
          <button className="button-63" onClick={handleFENewsGitClick}>
            FE GitHub Repo
          </button>
          <button className="button-63" onClick={handleBENewsGitClick}>
            BE GitHub Repo
          </button>
        </div>
        <h3>Chat room</h3>
        <p>
          Chat room is as you might have guessed a chat room, this allows anyone
          with the repo to chat with display names rendered from a google sign
          in. the firebase back end is available on the GitHub meaning everyone
          will share the same chat room however, this project is a great
          building block for and social media styled website or application.
        </p>
        <div className="centreButton">
          <button className="button-63" onClick={handleChatGitClick}>
            GitHub Repo
          </button>
        </div>
      </section>
      <section id="about">
        <h2>About Me</h2>
        <p>
          Passionate about coding, I possess a profound curiosity for the
          intricacies of binary and the fundamental principles of programming.
          With expertise in TypeScript, React, and React Native, I specialize as
          a versatile full-stack coder. My drive to overcome obstacles and
          develop efficient code fuels my satisfaction in bringing innovative
          solutions to life. Notably, I contributed to the successful
          development of the "Local Link" app, implementing tailored features
          for diverse user types. Collaborating with fellow developers has
          enriched my perspective and deepened my understanding of coding. Eager
          to embrace evolving challenges, I am dedicated to a long-term coding
          career, continuously learning, growing, and transforming ideas into
          reality
        </p>
      </section>
    </div>
  );
};

export default App;
