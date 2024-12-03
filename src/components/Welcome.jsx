import { Alert, Col, Container, Row } from "react-bootstrap";

const Welcome = () => (
  <>
    <Alert variant="primary" className="d-flex justify-content-center">
     <h1>Benvenuto nella nostra Libreria online.</h1> 
    </Alert>
    <Container fluid>
      <Row className="justify-content-center">
        <Col xs={12} sm={8} md={4}>
          <h3 className="display-5 fs-3 text-center">
            Qui puoi trovare tutti i <strong>best seller</strong> del momento.
          </h3>
        </Col>
      </Row>
    </Container>
  </>
);

export default Welcome;
