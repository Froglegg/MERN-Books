import React from "react";
import "./style.css";

function Footer() {
  return (
    <div className="footerWrapper">
      <footer className="footer">
        <span className="icons">
          <a href="https://www.github.com/froglegg">
            <i className="fab fa-github fa-2x" id="git-icon"></i>
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="https://www.linkedin.com/in/hayes-crowley/">
            <i className="fab fa-linkedin-in fa-2x" id="git-icon"></i>
          </a>
        </span>
        <p className="footerText">
          MERN Books by <a href="http://hayescrowley.com/">Hayes Crowley</a>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
