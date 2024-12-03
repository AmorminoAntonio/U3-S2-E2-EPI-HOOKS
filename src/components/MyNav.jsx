import { Container, Nav, Navbar } from "react-bootstrap";

const MyNav = (props) => (
  <Navbar bg="dark-subtle" data-bs-theme="dark">
    <Container fluid className="ms-5 me-5">
      <Navbar.Brand href="#" className="d-flex align-items-center">
        <span>THUNDER</span>
        <img
          src="/public/vite.svg"
          height="40"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
        <span>BOOKS</span>
      </Navbar.Brand>
      <Nav className="justify-content-between ms-auto">
        <Nav.Link href="./Home.jsx" >{props.link1}</Nav.Link>
        <Nav.Link href="#About" >{props.link2}</Nav.Link>
        <Nav.Link href="#Browse" >{props.link3}</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default MyNav;
