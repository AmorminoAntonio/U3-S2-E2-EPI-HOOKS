import { Component } from "react";
import { Card, Container } from "react-bootstrap";

class SingleBook extends Component {
  render() {
    const { book, selectedAsin, onSelectBook } = this.props;
    const isSelected = selectedAsin === book.asin;

    return (
      <Container>
        <Card
          className={isSelected ? "border-danger" : ""}
          onClick={() => onSelectBook(book.asin)}
        >
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default SingleBook;
