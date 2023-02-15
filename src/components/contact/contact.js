import "./contact.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { format } from "date-fns";
import axios from "../../api/axios";
import qs from "qs";
import { useState } from "react";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import validator from "validator";
import { Notification, useToaster } from "rsuite";

export default function Contact() {
  const [inputText, setInputText] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [errMsg, setErrMsg] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setInputText((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  const [placement] = useState("topStart");
  const toaster = useToaster();

  function handleSubmit(e) {
    e.preventDefault();
    const data = qs.stringify({
      username: inputText.username,
      email: inputText.email,
      message: inputText.message,
    });

    const email = inputText.email;
    const message = (
      <Notification className="notify">
        <span className="my-feedback">
        Thank you for connecting with me, <br />
        I'll surely look it out :)
          <br />
          Have a nice day!
        </span>
        <hr />
        <p className="date-format">{format(new Date(), "iii, h:mm b, B")}</p>
      </Notification>
    );

    if (!validator.isEmail(email)) {
      setInputText({
        username: inputText.username,
        email: inputText.email,
        message: inputText.message,
      });
      setErrMsg("Uh Oh! Enter valid Email...");
    } else {
      const headers = {
        "Content-Type": "application/json",
      };
      axios
        .post("/", data, headers)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.log(err.message));
      toaster.push(message, { placement });
      setInputText({ username: "", email: "", message: "" });
      setErrMsg("");
    }
  }

  return (
    <Container fluid="xs" className="contact_container noselect">
      <Row>
        <Col xs={12} md={6} lg={7}>
          <div className="column1">
            <span>
              <h1>Let's work together.</h1>
              <br />
              <p id="col1_desc">
                Feel free to send a message to inquire about a project, speaking
                opportunity, collaboration, or just say hey at
                <a
                  href="mailto:namnika.janbandhu7@gmail.com"
                  className="email-link"
                >
                  {" "}
                  namnika.janbandhu7@gmail.com
                </a>
                .
              </p>
            </span>
          </div>
        </Col>
        <Col xs={12} md={6} lg={5}>
          <div className="column2">
            <p id="contact_desc">Any suggestions or feedbacks? then... </p>
            <h2 id="contact">Contact Me</h2>
            <form>
              <span className="input input--hoshi">
                <input
                  className="input__field input__field--hoshi"
                  type="text"
                  value={inputText.username}
                  name="username"
                  onChange={handleChange}
                  required
                  id="input-4"
                />
                <label
                  className="input__label input__label--hoshi input__label--hoshi-color-1"
                  htmlFor="input-4"
                >
                  <span className="input__label-content input__label-content--hoshi">
                    Name
                  </span>
                </label>
              </span>
              <span className="input input--hoshi">
                <input
                  className="input__field input__field--hoshi"
                  type="text"
                  name="email"
                  value={inputText.email}
                  onChange={handleChange}
                  required
                  id="input-4"
                />
                <label
                  className="input__label input__label--hoshi input__label--hoshi-color-1"
                  htmlFor="input-4"
                >
                  <span className="input__label-content input__label-content--hoshi">
                    Email
                  </span>
                </label>
              </span>

              <p id="eidnote">{errMsg}</p>

              <span className="input input--hoshi">
                <input
                  className="input__field input__field--hoshi"
                  type="text"
                  onChange={handleChange}
                  value={inputText.message}
                  name="message"
                  required
                  id="input-4"
                />
                <label
                  className="input__label input__label--hoshi input__label--hoshi-color-1"
                  htmlFor="input-4"
                >
                  <span className="input__label-content input__label-content--hoshi">
                    Message
                  </span>
                </label>
              </span>

              <span className="send_button">
                <a onClick={handleSubmit}>SEND MESSAGE &#8594;</a>
              </span>
            </form>
          </div>
        </Col>
      </Row>
      <footer>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <div className="copy-container">
              <span
                role="img"
                aria-labelledby="footnote"
                className="copy_footnote"
              >
                Copyright &#169; {format(new Date(), "yyyy")} by Namnika
                Janbandhu &mdash; Made with &#128156;
              </span>
            </div>
          </Col>
          <Col xs={10} md={6} lg={6}>
            <span className="small_footnote">
              <ul className="footer_links">
                <li id="social_links">
                  <a
                    href="https://twitter.com/bt_13jjks?t=1tECexjFVkTvGotKG-u3AA&s=09"
                    id="twitter_link"
                  >
                    twitter
                  </a>
                </li>
                <li id="social_links">
                  <a href="https://github.com/Namnika" id="github_link">
                    github
                  </a>
                </li>
                <li id="social_links">
                  <a
                    href="https://www.linkedin.com/in/namnika-janbandhu-5b741522a"
                    id="linkedIn_link"
                  >
                    linkedIn
                  </a>
                </li>
              </ul>
            </span>
          </Col>
        </Row>
        <h2 className="greeting">Adieu!</h2>
      </footer>
    </Container>
  );
}
