import React from "react";

import Link from "next/link";

import { Container, Navbar, Nav } from "react-bootstrap";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <>
      <Container fluid className="d-flex">
        <Navbar
          collapseOnSelect
          className="w-100"
          expand="lg"
          bg="light"
          variant="light"
        >
          <Navbar.Brand>
            <Link href="/">
              <span className={styles.navLinks}>PORTFOLIO</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <div className="ms-auto">
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Link href="/about">
                  <span className={styles.navLinks}>About</span>
                </Link>
                <Nav>
                  <Link href="/experience">
                    <span className={styles.navLinks}>Experience</span>
                  </Link>
                </Nav>
                <Nav>
                  <Link href="/projects">
                    <span className={styles.navLinks}>Projects</span>
                  </Link>
                </Nav>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </Container>
    </>
  );
};

export default Header;
