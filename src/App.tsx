import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "./assests/computer.json";
import "./App.css";
import { useRef } from "react";
import { VscGithub } from "react-icons/vsc";
import { AiFillLinkedin } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import Typewriter from "typewriter-effect";

const App = () => {
  const computerRef = useRef<LottieRefCurrentProps>(null);
  const emailButtonClick = () => {
    window.location.href = "mailto:Gkensdale@outlook.com";
  };
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
  const gitHubClick = () => {
    window.location.replace("https://github.com/GuyKensdale");
  };
  const linkedInCLick = () => {
    window.location.replace(
      "https://www.linkedin.com/in/guy-kensdale-805829145/"
    );
  };

  return (
    <div className="container">
      <section id="homePage">
        <div className="homeHead">
          <h1>Guy Kensdale</h1>
          <div className="typewriter">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("Junior Full Stack Developer!").start();
              }}
            />
          </div>
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
        </div>
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
      </section>
      <section id="experience">
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
        <h2>Technical Skills</h2>
        <div className="skills">
          <div className="column">
            <h3 className="skill-category">Languages</h3>
            <div className="skill">
              <p className="p-Tag">JavaScript</p>
              <div className="bar">
                <div className="bar-fill" style={{ width: "100%" }}></div>
              </div>
              <p className="p-Tag">TypeScript</p>
              <div className="bar">
                <div className="bar-fill" style={{ width: "99%" }}></div>
              </div>
              <p className="p-Tag">RSLogixs 500</p>
              <div className="bar">
                <div className="bar-fill" style={{ width: "78%" }}></div>
              </div>
            </div>
          </div>
          <div className="column">
            <h3 className="skill-category">Front End</h3>
            <div className="skill">
              <p className="p-Tag">HTML</p>
              <div className="bar">
                <div className="bar-fill" style={{ width: "98%" }}></div>
              </div>
              <p className="p-Tag">React</p>
              <div className="bar">
                <div className="bar-fill" style={{ width: "100%" }}></div>
              </div>
              <p className="p-Tag">React-Native</p>
              <div className="bar">
                <div className="bar-fill" style={{ width: "99%" }}></div>
              </div>
              <p className="p-Tag">CSS</p>
              <div className="bar">
                <div className="bar-fill" style={{ width: "87%" }}></div>
              </div>
              <p className="p-Tag">Tailwind</p>
              <div className="bar">
                <div className="bar-fill" style={{ width: "75%" }}></div>
              </div>
            </div>
          </div>
          <div className="column">
            <h3 className="skill-category">Back End</h3>
            <div className="skill">
              <p className="p-Tag">SQL (PSQL)</p>
              <div className="bar">
                <div className="bar-fill" style={{ width: "100%" }}></div>
              </div>
              <p className="p-Tag">Firebase</p>
              <div className="bar">
                <div className="bar-fill" style={{ width: "98%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
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
        <h2>Projects</h2>
        <h3>LocaLink</h3>
        <div className="centrePTag">
          <p>
            LocaLink is a mobile app I have co-created to unite people living in
            the same area or buildings without the hassle of sharing personal
            information, such as email or phone number, with people you don’t
            know or have just met, which is often the case on other social media
            platforms. LocaLink aims to be the one-stop shop for online
            community interaction, avoiding the need for several groups and
            pages across many different platforms. Making all the information
            about a building or neighbourhood organised and accessible
          </p>
        </div>
        <div className="centreButton">
          <button
            className="button-63"
            onClick={handleLocalGitClick}
            title="GitHuB Repo"
          >
            GitHub Repo
          </button>
          <button
            className="button-63"
            onClick={handleLocalVideoClick}
            title="Video demonstration"
          >
            Video demo{" "}
          </button>
        </div>
        <h3>Guys News</h3>
        <div className="centrePTag">
          <p>
            Guys News is a full stack project i created, allowing users to view
            news articles from a home page, within this website you can leave
            comments and up vote articles and these actions work directly with a
            back end psql database.as well as navigate through various articles.
          </p>
        </div>
        <div className="centreButton">
          <button
            className="button-63"
            onClick={handleFENewsGitClick}
            title="GitHuB Repo"
          >
            FE GitHub Repo
          </button>
          <button
            className="button-63"
            onClick={handleBENewsGitClick}
            title="GitHuB Repo"
          >
            BE GitHub Repo
          </button>
        </div>
        <h3>Chat room</h3>
        <div className="centrePTag">
          <p>
            Chat room is, as you might have guessed a chat room, this allows
            anyone with the repo to chat with display names rendered from a
            google sign in. the firebase back end is available on the GitHub
            meaning everyone will share the same chat room however, this project
            is a great building block for and social media styled website or
            application.
          </p>
        </div>
        <div className="centreButton">
          <button
            className="button-63"
            onClick={handleChatGitClick}
            title="GitHuB Repo"
          >
            GitHub Repo
          </button>
        </div>
      </section>

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
            Passionate about coding, I possess a profound curiosity for the
            intricacies of binary and the fundamental principles of programming.
            With expertise in TypeScript, React, and React Native, I specialize
            as a versatile full-stack coder. My drive to overcome obstacles and
            develop efficient code fuels my satisfaction in bringing innovative
            solutions to life. Notably, I contributed to the successful
            development of the "Local Link" app, implementing tailored features
            for diverse user types. Collaborating with fellow developers has
            enriched my perspective and deepened my understanding of coding.
            Eager to embrace evolving challenges, I am dedicated to a long-term
            coding career, continuously learning, growing, and transforming
            ideas into reality
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

export default App;
