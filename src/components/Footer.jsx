import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div>
        <span>
          <small>Made by Mark Linn</small>
        </span>
      </div>
      <div className="profile-tags">
        <a href="https://github.com/marktlinn">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://twitter.com/marksist_300">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="mailto:marklinndev@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
