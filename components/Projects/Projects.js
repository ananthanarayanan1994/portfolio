import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as icons from "@fortawesome/free-solid-svg-icons";
import * as regularIcons from "@fortawesome/free-regular-svg-icons";

import styles from "./Projects.module.scss";

const Projects = () => {
  const homedepotProject = () => {
    window.open("https://www.homedepot.com/", "_blank");
  };

  const hartfordProject = () => {
    window.open("https://www.thehartford.com/", "_blank");
  };

  const SBDProject = () => {
    window.open("https://www.stanleyblackanddecker.com/", "_blank");
  };
  return (
    <>
      <Container>
        Projects
        <Row>
          <Col md={4}>
            <Card className="h-100">
              <Card.Header>
                <div className="d-flex justify-content-between">
                  <FontAwesomeIcon icon={regularIcons.faFolder} size="2x" />
                  <FontAwesomeIcon
                    className={styles.pointer}
                    icon={icons.faUpRightFromSquare}
                    size="2x"
                    href="https://www.homedepot.com/"
                    onClick={homedepotProject}
                  />
                </div>
              </Card.Header>
              <Card.Body>
                <Card.Title>
                  Building a Web App to maintain Sku's and it's price
                </Card.Title>
                <Card.Text>
                  Converting a wireframe into a single page web app for
                  maintaining the Sku's prices to an American multinational home
                  improvement retail corporation. Build with React and Redux,
                  Nodejs, Express Js, Java, Cassendra.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-start flex-wrap">
                <code className={styles.techItems}>React with Redux |</code>
                <code className={styles.techItems}>React Bootstrap |</code>
                <code className={styles.techItems}>Node Js |</code>
                <code className={styles.techItems}>Express Js |</code>
                <code>Java</code>
              </Card.Footer>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100">
              <Card.Header>
                <div className="d-flex justify-content-between">
                  <FontAwesomeIcon icon={regularIcons.faFolder} size="2x" />
                  <FontAwesomeIcon
                    className={styles.pointer}
                    icon={icons.faUpRightFromSquare}
                    size="2x"
                    onClick={hartfordProject}
                  />
                </div>
              </Card.Header>
              <Card.Body>
                <Card.Title>A tool to maintain employee ratings</Card.Title>
                <Card.Text>
                  A single page web app build with custom components to maintain
                  employee ratings to top investment and insurance company.
                  Build with React and Redux, Nodejs, Express Js, Python Flask,
                  Oracle. Writing unit test cases to test the individual
                  functionalities of the components using jest for React and
                  Pytest for Python.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-start flex-wrap">
                <code className={styles.techItems}>React with Redux | </code>
                <code className={styles.techItems}>React Material UI | </code>
                <code className={styles.techItems}>Node Js | </code>
                <code className={styles.techItems}>Express Js | </code>
                <code>Python Flask</code>
              </Card.Footer>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100">
              <Card.Header>
                <div className="d-flex justify-content-between">
                  <FontAwesomeIcon icon={regularIcons.faFolder} size="2x" />
                  <FontAwesomeIcon
                    className={styles.pointer}
                    icon={icons.faUpRightFromSquare}
                    size="2x"
                    onClick={SBDProject}
                  />
                </div>
              </Card.Header>
              <Card.Body>
                <Card.Title>
                  Migrating an old tool from R shiny to React
                </Card.Title>
                <Card.Text>
                  A cool looking web app using latest tech stack such as React
                  and Redux with enhanced UI/UX to the world's largest tools and
                  storage company.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-start flex-wrap">
                <code className={styles.techItems}>React with Redux | </code>
                <code className={styles.techItems}>React Bootstrap | </code>
                <code className={styles.techItems}>Node Js | </code>
                <code className={styles.techItems}>Express Js | </code>
                <code className={styles.techItems}>Python Flask |</code>
                <code>Snowflake</code>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Projects;
