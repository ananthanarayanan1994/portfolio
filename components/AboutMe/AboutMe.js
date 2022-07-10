import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import styles from "./AboutMe.module.scss";

const AboutMe = () => {
  return (
    <>
      <Container fluid className={styles.aboutMeContainer}>
        <Row>
          <Col md="8">
            <h1 className={styles.about}>about.</h1>
            <h6 className={styles.intro}>
              I am a Full Stack Developer with 6+ years of experience located in
              Chennai, Tamil Nadu.
            </h6>
            <p>
              I have a strong passion to create and design UI/UX components. I
              love to explore new tech stacks and play around with them. I use
              these opportunities to learn or try new things. They also make
              great teaching aids.My roles have ranged from team player,
              individual contributor to technical lead. Today, I build my own
              products full-time.
            </p>
            <p>
              I am highly self motivated, a problem solver and well organized
              person with zeal to create new Web apps using what I have learned.
              Being a Hodophile, I love travelling places and exploring. I enjoy
              playing games in PlayStation and bing watching TV series and
              listening music.
            </p>
          </Col>
          <Col md={4}>
            <Image
              src="/static/images/me.png"
              roundedCircle
              className={styles.myImage}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutMe;
