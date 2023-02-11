import "./errorPage.css";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <>
      <div className="error-page noselect">
        <a href="#">
          <div id="logo">
            N<div className="logo-design" />
            <span className="mask-desc">
              {" "}
              <span id="bullet">&#8226;</span> <span id="line"> &#9472;</span>{" "}
              dev.
            </span>
          </div>
        </a>
        <div className="error">
          <span id="err">404</span>
          <div className="err-desc">
            <p>Sorry :(</p>
            <p>Page Not Found</p>
            <br />
            <strong>&darr;</strong>
            <br />
          </div>
          <Link className="home-link" to="/">
            Home
          </Link>
        </div>
      </div>
    </>
  );
}
