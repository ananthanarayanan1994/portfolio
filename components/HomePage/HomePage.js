import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as brandIcons from "@fortawesome/free-brands-svg-icons";

import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <>
      <Container fluid className={styles.homeContanier}>
        <Row>
          <Col sm={12} md={7} className="text-right">
            <div>
              <h5 className={styles.title}>
                <code>
                  <span className={styles.angularBracket}>&lt;</span>
                  <span className={styles.code}>code</span>
                  <span className={styles.angularBracket}>&gt;</span>FULL STACK
                  DEVELOPER<span className={styles.angularBracket}>&lt;</span>
                  <span className={styles.angularBracket}>/</span>
                  <span className={styles.code}>code</span>
                  <span className={styles.angularBracket}>&gt;</span>
                </code>
              </h5>
              <h1 className={styles.myName}>Anantha Narayanan</h1>
              <div className={styles.descriptionContainer}>
                <div className={styles.description}>
                  Hey there! I'm a Full Stack Web Developer based in Chennai. I
                  love travelling, playing games in Play Station & music.
                </div>

                <div className="d-flex justify-content-start mt-3 mb-3 pb-3">
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
              </div>
            </div>
          </Col>
          <Col md={5}>
            <Image
              src="/static/images/me.png"
              roundedCircle
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Col>
        </Row>
        <Row className="mt-4 text-left">
          <Col xs={4} sm={4} md="4">
            <div className={styles.heading}>Born in</div>
            <div className={styles.fontBold}>Chennai</div>
          </Col>
          <Col xs={4} sm={4} md="4">
            <div className={styles.heading}>Experience</div>
            <div className={styles.fontBold}>6+ Years</div>
          </Col>
          <Col xs={4} sm={4} md="4">
            <div className={styles.heading}>Date of Birth</div>
            <div className={styles.fontBold}>14 July 1994</div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
