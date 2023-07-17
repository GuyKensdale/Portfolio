import Typewriter from "typewriter-effect";
import React, { useEffect, useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "./assests/computer.json";
const HomePage = () => {
  const computerRef = useRef<LottieRefCurrentProps>(null);
  return (
    <div className="HomePageCon">
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
    </div>
  );
};
export default HomePage;
