import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as brandIcons from "@fortawesome/free-brands-svg-icons";
import * as icons from "@fortawesome/free-solid-svg-icons";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <footer className="fixed-bottom">
        <div className="d-flex justify-content-center">
          <a
            href="https://github.com/ananthanarayanan1994/"
            rel="noopener noreferrer"
            target="_blank"
            className={styles.githubBtn}
          >
            <FontAwesomeIcon icon={brandIcons.faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/anantha-narayanan-s-9b584a11b/"
            target="_blank"
          >
            <FontAwesomeIcon icon={brandIcons.faLinkedin} />
          </a>
        </div>

        <div className="d-flex justify-content-center">
          <span>
            <small>
              Copyright © {new Date().getFullYear()}. All rights reserved.
            </small>
          </span>
          {"     "}
          <span>
            <small>
              Made with{" "}
              <FontAwesomeIcon
                icon={icons.faHeart}
                className={styles.heartIcon}
              />{" "}
              using{" "}
              <a href="https://nextjs.org" target="_blank">
                Next.js!
              </a>
            </small>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
