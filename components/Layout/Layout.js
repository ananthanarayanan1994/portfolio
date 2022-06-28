import { Container } from "react-bootstrap";

import Navbar from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Container fluid>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </Container>
    </>
  );
}
