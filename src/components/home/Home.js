import { useState, useEffect, useContext } from "react";
import "./styles.css";
import Loader from "../loader/loader";
import Project from "../project/project";
import About from "../about/about";
import Contact from "../contact/contact";
import { Link } from "react-scroll";
import { motion, useScroll, useSpring } from "framer-motion";

import DotRing from "../DotRing/DotRing";
import { MouseContext } from "../context/mouse-context";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const { cursorChangeHandler } = useContext(MouseContext);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <Loader /> : null}
      {!loading && (
        <>
          <div className="bg-home anime noselect">
            <motion.div className="progress-bar" style={{ scaleX }} />
            <DotRing />
            <div className="home bg-green">
              <div className="container">
                <div className="flex-container section-top">
                  <a href="#">
                    <div id="logo">
                      N<div className="logo-design" />
                      <span className="mask-desc">
                        {" "}
                        <span id="bullet">&#8226;</span>{" "}
                        <span id="line"> &#9472;</span> dev.
                      </span>
                    </div>
                  </a>

                  <div className="nav-menus">
                    <h6>MENU</h6>
                    <div className="menu-item">
                      <Link
                        to="projects"
                        hashSpy={true}
                        spy={true}
                        smooth={true}
                      >
                        Projects.
                      </Link>
                    </div>
                    <div className="menu-item">
                      <Link to="about" hashSpy={true} spy={true} smooth={true}>
                        About.
                      </Link>
                    </div>
                    <div className="menu-item">
                      <Link
                        to="contact"
                        hashSpy={true}
                        spy={true}
                        smooth={true}
                      >
                        Contact.
                      </Link>
                    </div>
                    <div className="page-no">
                      &#8226;<span>01</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="section-middle">
                <div id="intro">Intro.</div>
                <div className="section-middle-left">
                  I build websites and connect to real-world cloud storage{" "}
                </div>
                <div className="section-middle-right">
                  <h5>NAMNIKA JANBANDHU</h5>
                  <p id="desc">
                    I am a <strong>Front End Web Developer</strong>. Currently
                    based in India.
                  </p>
                  <p id="desc">
                    I do things and build things for the web. I love what I do,
                    so I work hard to do it well.
                  </p>
                  <p id="desc">
                    {" "}
                    I love minimalist web design and having fun connecting
                    applications.
                  </p>
                </div>
              </div>

              <section id="section07" className="scroll_name">
                <a href="/#projects">
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </section>
            </div>
            <Project />
            <About />
            <Contact />
          </div>
        </>
      )}
    </>
  );
}
