import { Col, Container, Form, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { Component } from "react";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    FilterQuery: "",
    selectedAsin: null
  };

  handleSelectBook = (asin) => {
    this.setState({ selectedAsin: asin });
  };

  render() {
    return (
      <>
        <Row className="justify-content-center mb-3">
          <Col xs={4}>
            <Form.Control
              type="text"
              placeholder="cerca i tuoi libri"
              value={this.state.FilterQuery}
              onChange={(e) => this.setState({ FilterQuery: e.target.value })}
            />
          </Col>
        </Row>
        <Container>
          <Row>
            <Col sm={8}>
              <Row>
                {this.props.books
                  .filter((book) =>
                    book.title
                      .toLowerCase()
                      .includes(this.state.FilterQuery.toLowerCase())
                  )
                  .map((book) => (
                    <Col key={book.asin} sm={4} lg={4}>
                      <SingleBook
                        book={book}
                        selectedAsin={this.state.selectedAsin}
                        onSelectBook={this.handleSelectBook}
                      />
                    </Col>
                  ))}
              </Row>
            </Col>
            <Col sm={4}>
              <CommentArea asin={this.state.selectedAsin} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default BookList;
