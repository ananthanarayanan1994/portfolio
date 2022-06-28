import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as brandIcons from "@fortawesome/free-brands-svg-icons";
import * as icons from "@fortawesome/free-solid-svg-icons";

import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <>
      <Container fluid className={styles.homeContanier}>
        <Row>
          <Col md={7} className="text-right">
            <div>
              <h5 className={styles.title}>FULL STACK DEVELOPER</h5>
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
        <Row className="mt-4">
          <Col md="4">
            <div className={styles.heading}>Born in</div>
            <div className={styles.fontBold}>Chennai</div>
          </Col>
          <Col md="4">
            <div className={styles.heading}>Experience</div>
            <div className={styles.fontBold}>6+ Years</div>
          </Col>
          <Col md="4">
            <div className={styles.heading}>Date of Birth</div>
            <div className={styles.fontBold}>14 July 1994</div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
