import "./about.css";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <>
      <div className="about-page">
        <div className="flex-container">
          <div className="about-container">
            <div className="about-heading">
              <h2 id="about">About</h2>
            </div>
            <div className="middle-circle">
              <img
                src="https://png.pngtree.com/png-clipart/20200801/ourmid/pngtree-black-ring-png-image_2319165.png"
                alt=""
              />
              <span id="mycv">
                <Link className="cv" to="/files/mycv.pdf" target="_blank">
                  MYCV
                </Link>
              </span>
            </div>
            <div id="small-div"></div>
          </div>
          <div className="about-desc">
            <blockquote>Me, Myself and I</blockquote>
            <br />
            <p id="description">
              Everything that goes around me is what makes me think
              and visualize it. I started seeking things that exist on the web
              the day I connected to the computer. I've never given up on
              learning and trying to implement whether it's a web design, CSS,
              JS, or building an application. Coding and Designing have always
              fascinated me.
            </p>
            <p id="description">
              Fast forward to 2023, I developed small and big applications,
              starting from learning and connecting front-end and back-end
              technologies with Node.js and Express.js to UI/UX design,
              HTML/CSS/React.js, and working with databases. Whatever I've done, is
              a vital stepping-stone for what I am today.
            </p>
            <p id="description">
              The thing that excites me the most as Front End Web Developer is
              being able to understand, learn new technologies, and create ideas
              based on user requirements, add CRUD operations, and provide
              authentication services.{" "}
            </p>
            <span id="skills">SKILLS</span>
            <p id="description">
              React.js / HTML5 / CSS3 / JavaScript(ES6+) / UI / Express.js /
              Bootstrap / Front End Web Development / Web design{" "}
            </p>
            <span id="certificates">CERTIFICATES</span>
            <p id="certificate_link">
              <a href="https://bit.ly/udemycertificate26">
                The Complete 2022 Web Development Bootcamp
              </a>
              <a href="https://learn.gitkraken.com/certificates/qsilhr8rxq">Foundations of Git</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
