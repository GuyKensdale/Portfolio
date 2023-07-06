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
  const handleNewsClick = () => {
    window.location.replace("https://guys-news.netlify.app/");
  };

  return (
    <div className="container">
      <section id="homePage">
        <div className="homeHead">
          <h1>Guy Kensdale</h1>
          <div className="typewriter">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("Junior Full Stack Developer").start();
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
            LocaLink is a co-created mobile app designed to connect individuals
            residing in the same area or buildings. Unlike other social media
            platforms, LocaLink prioritizes privacy by eliminating the need to
            share personal information such as email or phone numbers with
            unknown or newly met individuals. Acting as a one-stop-shop for
            online community interaction, LocaLink eliminates the need for
            multiple groups and pages across various platforms. It provides
            organized and accessible information about buildings or
            neighborhoods, fostering a sense of community and facilitating
            seamless communication.
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
            Guys News is a full-stack project that enables users to access and
            interact with news articles. The user-friendly website allows
            browsing of articles and includes user authentication,
            authorization, and profiles. Users can leave comments and upvote
            articles, and real-time updates are stored in a PostgreSQL database.
            The platform is designed to be responsive and accessible across
            devices. Social sharing buttons increase article visibility. The
            project prioritizes performance optimization, error handling, and
            automated testing to ensure reliability and stability. With Guys
            News, users can explore, interact with, and stay informed about news
            articles in a secure and engaging platform.
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
            onClick={handleNewsClick}
            title="Live Website"
          >
            Website
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
            Chat Room is a chat application that provides a platform for users
            to engage in real-time conversations. Users can sign in using their
            Google account, and their display names are rendered based on their
            Google sign-in information. The Firebase backend, available on
            GitHub, ensures that all users share the same chat room. This
            project serves as a solid foundation for developing social
            media-styled websites or applications. By leveraging the
            functionalities of Chat Room, developers can build upon it to create
            more extensive and feature-rich social media platforms.
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
