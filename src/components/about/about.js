import "./about.css";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <>
      <div className="about-page noselect">
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
              <Link
                  className="cv"
                  to="/files/cv.pdf"
                  target="_blank"
                >
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
              HTML/CSS/React, and working with databases. Whatever I've done, is
              a vital stepping-stone for what I am today.
            </p>
            <p id="description">
              The thing that excites me the most as MERN Stack Web Developer is
              being able to understand, learn new technologies, and create ideas
              based on user requirements, add CRUD operations, and provide
              authentication services.{" "}
            </p>
            <span id="skills">SKILLS</span>
            <p id="description">
              HTML / CSS / JavaScript(ES6+) / React / Node.js / Express.js /
              Mongo DB / Mongoose / Web design{" "}
            </p>
            <span id="certificates">CERTIFICATES</span>
            <p id="certificate_link">
              <a href="https://e2.udemymail.com/ls/click?upn=ZF3sOyS2SxEPIoSZT6Aoc8I9YwO1Dqfes0Mn7ke358OZxEXVt-2BOwOdu0ga-2BcvsE9vblOpBtT0qK4H0ATIW5Y2I6fzqW8J9mGRCPD9BhD5epKIoZCaGYSYe5GzGw8c-2F8bsoJP3CDPm21-2B3l2y8B-2Fd-2B1qkU40rTyL1-2FApfPL8YrhHENo8PFc5SKawJTBgwKun-2B1mDg_MXuZuWF0TTEVbvegwARdCUS4LFXLvLVaodDCg7nkEj3YJaXSC1g9AZvT2VIWB8i5UVzh8XM676ghUKisLF1BpsUyWicgmEJVxh2KkH4GUoTGdZX-2FBuCkOuMdmqeVMnWqI7FEEt4BHt8PgJ2rXiBuEMQp-2FlCrDkoPvxZ4v2ZN1Y5tAt2hWbX0oNipFnTVbrjdaN-2Fev-2F0rcA2X-2BRiurE31yFgWrkHEgcyk5Uh5DBNtmd-2BGY2B5-2FtEQ3O325wj1YFlZis2LNdHkZbi4hCzCoePT55lKfZ-2FQstYwUMZOxCNS2lgGRrpE7Jr0zizE-2F70qEOpOqXpO-2BrKpfeA9UBeh5ZMC5fKaULi8MLKWR3iOJ6NAHaWfR5RFlOytGUzB5yft9wGfRNSWL6T04u2lyTBua4YG-2Fw-3D-3D">
                The Complete 2022 Web Development Bootcamp
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
