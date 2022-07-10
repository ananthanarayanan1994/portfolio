import React from "react";
import { Container, Row, Col, ProgressBar, Card } from "react-bootstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as brandIcons from "@fortawesome/free-brands-svg-icons";
import * as icons from "@fortawesome/free-solid-svg-icons";

import "react-vertical-timeline-component/style.min.css";
import "react-circular-progressbar/dist/styles.css";

import styles from "./Experience.module.scss";

const Experience = () => {
  const percentage = 90;

  return (
    <>
      <Container fluid className="p-3 mt-4">
        <Row>
          <Col md={5}>
            <Card className="mb-2">
              <Card.Header>Frontend</Card.Header>
              <Card.Body>
                <Card.Text>
                  <Row>
                    <Col md="4" className="d-flex align-items-center">
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        styles={buildStyles({
                          pathColor: `#ffa500`,
                          textColor: "#ffa500",
                          trailColor: "#d6d6d6",
                          backgroundColor: "#3e98c7",
                        })}
                      />
                    </Col>
                    <Col md="8">
                      <span>
                        HTML 5{" "}
                        <span>
                          <FontAwesomeIcon
                            icon={brandIcons.faHtml5}
                            style={{ color: "red" }}
                          />
                        </span>
                      </span>
                      <ProgressBar
                        now={95}
                        variant="success"
                        label={`95%`}
                        className="mb-2"
                      />
                      <span>
                        CSS3{" "}
                        <span>
                          <FontAwesomeIcon
                            icon={brandIcons.faCss3Alt}
                            style={{ color: "blue" }}
                          />
                        </span>
                      </span>
                      <ProgressBar
                        now={90}
                        variant="success"
                        label={`90%`}
                        className="mb-2"
                      />
                      <span>
                        Javascript(ECMA Script 6){" "}
                        <span>
                          <FontAwesomeIcon
                            icon={brandIcons.faJsSquare}
                            style={{ color: "darkorange" }}
                          />
                        </span>
                      </span>
                      <ProgressBar
                        now={90}
                        variant="success"
                        label={`90%`}
                        className="mb-2"
                      />
                      <span>
                        React with Redux
                        <span>
                          <FontAwesomeIcon
                            icon={brandIcons.faReact}
                            style={{ color: "#1E90FF" }}
                          />
                        </span>
                      </span>
                      <ProgressBar
                        now={90}
                        variant="success"
                        label={`90%`}
                        className="mb-2"
                      />
                      <span>
                        Angular 6+{" "}
                        <span>
                          <FontAwesomeIcon
                            icon={brandIcons.faAngular}
                            style={{ color: "red" }}
                          />
                        </span>
                      </span>
                      <ProgressBar
                        now={85}
                        variant="success"
                        label={`85%`}
                        className="mb-2"
                      />
                    </Col>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="mb-2 mt-5">
              <Card.Header>Backend</Card.Header>
              <Card.Body>
                <Card.Text>
                  <Row>
                    <Col md="4" className="d-flex align-items-center">
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        styles={buildStyles({
                          pathColor: `#ffa500`,
                          textColor: "#ffa500",
                          trailColor: "#d6d6d6",
                          backgroundColor: "#3e98c7",
                        })}
                      />
                    </Col>
                    <Col md="8" className="d-flex align-items-center">
                      <div className="w-100">
                        <span>
                          Python Flask{" "}
                          <span>
                            <FontAwesomeIcon
                              icon={brandIcons.faPython}
                              style={{ color: "#F6BE00" }}
                            />
                          </span>
                        </span>
                        <ProgressBar
                          now={90}
                          variant="success"
                          label={`90%`}
                          className="mb-2"
                        />
                        <span>
                          Node Js with Express Js{" "}
                          <span>
                            <FontAwesomeIcon
                              icon={brandIcons.faNode}
                              style={{ color: "#006400" }}
                            />
                          </span>
                        </span>
                        <ProgressBar
                          now={90}
                          variant="success"
                          label={`90%`}
                          className="mb-2"
                        />
                        <span>My SQL</span>
                        <ProgressBar
                          now={90}
                          variant="success"
                          label={`90%`}
                          className="mb-2"
                        />
                        <span>
                          Snowflake{" "}
                          <span>
                            <FontAwesomeIcon
                              icon={icons.faSnowflake}
                              style={{ color: "#00FFFF" }}
                            />
                          </span>
                        </span>
                        <ProgressBar
                          now={90}
                          variant="success"
                          label={`90%`}
                          className="mb-2"
                        />
                      </div>
                    </Col>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={7}>
            <VerticalTimeline lineColor="black" layout="2-columns">
              <VerticalTimelineElement
                className=""
                contentStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                date="2020 - present"
                dateClassName={styles.timelineDate}
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={<FontAwesomeIcon icon={icons.faBriefcase} />}
              >
                <h3 className="vertical-timeline-element-title">
                  Full Stack Developer
                </h3>
                <h5 className="vertical-timeline-element-subtitle">
                  Tiger Analytics, Chennai
                </h5>
                <p>
                  HTML5, CSS3, JavaScript (ECMA Script 6), Angular 9+, React Js
                  with Redux, Node Js, Express Js, Python, Flask, Snowflake, My
                  SQL, Postgresql.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                dateClassName={styles.timelineDate}
                date="2016 - 2020"
                contentStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={<FontAwesomeIcon icon={icons.faBriefcase} />}
              >
                <h3 className="vertical-timeline-element-title">
                  Software Engineer
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Tata Consultancy Services, Chennai
                </h4>
                <p>
                  HTML5, CSS3, JavaScript (ECMA Script 6), Angular 4+, React Js
                  with Redux, Node Js, Express Js.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                dateClassName={styles.timelineDate}
                date="2011 - 2016"
                contentStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={<FontAwesomeIcon icon={icons.faBriefcase} />}
              >
                <h3 className="vertical-timeline-element-title">
                  SASTRA University
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  M.Tech Construction Engineering and Management (5 years
                  Intergrated)
                </h4>
                <p>
                  Civil Engineering, English, Mathematics, Programming,
                  Management.
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Experience;
