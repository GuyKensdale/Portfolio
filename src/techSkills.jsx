const TechSkills = () => {
  return (
    <div className="TechSkillsCon">
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
    </div>
  );
};
export default TechSkills;
