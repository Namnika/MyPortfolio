import "./project.css";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Projects } from "./utils";
import ScrollAnimation from "react-animate-on-scroll";

export default function Project() {
  const [projects] = useState(Projects);

  return (
    <>
      <Container fluid="md">
        <div className="project_page">
          {projects.map(
            ({ id, title, desc, end_date, img, github_link, site_link }) => (
              <Row key={id}>
                <Col className="project col-lg-12">
                  <h2 id="projects">Projects</h2>
                  <div className="project_completion">
                    <svg id="line1">
                      <line x1="0" y1="200" x2="200" y2="200" />
                    </svg>
                    <code id="project_date">{end_date}</code>
                  </div>

                  <div className="project_section">
                    <ScrollAnimation offset={630} animateIn="fadeIn">
                      <aside>
                        <h2>
                          <span id="project_titleno">0{id}</span>
                          <div className="project_title">{title}</div>
                        </h2>
                        <p className="project_desc">{desc}</p>
                      </aside>
                    </ScrollAnimation>
                  </div>
                  <div id="project_links">
                    <a href={github_link}>github</a>
                    <a href={site_link}>site</a>
                  </div>
                  <div className="svgline2">
                    <svg id="line2">
                      <line x1="0" y1="150" x2="150" y2="150" />
                    </svg>
                  </div>
                </Col>

                <Col lg="12">
                  <div className="img_bgwrap">
                    <ScrollAnimation
                      animateOnce={true}
                      offset={630}
                      animateIn="fadeIn"
                    >
                      <a href={site_link}>
                        <img key={id} alt={img} id="image" src={img} />
                      </a>
                    </ScrollAnimation>
                  </div>
                </Col>
              </Row>
            )
          )}
        </div>
      </Container>
    </>
  );
}
