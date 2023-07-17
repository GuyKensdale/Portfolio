import React from "react";
const Projects = () => {
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

  const handleNewsClick = () => {
    window.location.replace("https://guys-news.netlify.app/");
  };
  return (
    <div className="ProjectsCon">
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
    </div>
  );
};
export default Projects;
