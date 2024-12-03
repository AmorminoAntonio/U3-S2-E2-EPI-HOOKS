import { useState } from "react";
import { Button, Form } from "react-bootstrap";
const AddComment = (props) => {
  const [review, setReview] = useState({
    comment: "",
    rate: "1",
    elementId: props.asin
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      body: JSON.stringify(review),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzQ4Njg0ODA2ZmM4YzAwMTU2Yjg2ZTciLCJpYXQiOjE3MzI4MTY1NjEsImV4cCI6MTczNDAyNjE2MX0.F57Jji8XsC7Kn4idVyVuXxgoGrahg7-zgJDm0xHFvB0"
      }
    }).then((resp) => {
      if (resp.ok) {
        alert("commento inviato!!");
      }
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h6 className="mt-4">Aggiungi un commento</h6>
      <Form.Group
        className="mb-3"
        controlId="review-text"
        value={review.comment}
        onChange={(e) =>
          setReview({
            review: { ...review, comment: e.target.value }
          })
        }
        required
      >
        <Form.Label></Form.Label>
        <Form.Control type="text" placeholder="inserisci la tua rec" />
      </Form.Group>
      <Form.Group
        className="mb-3"
        controlId="review-rating"
        value={review.rate}
        onChange={(e) =>
          setReview({
            review: { ...review, rate: e.target.value }
          })
        }
        required
      >
        <Form.Label>Voto Libro</Form.Label>

        <Form.Select aria-label="Default select example">
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="4">Four</option>
          <option value="5">Five</option>
        </Form.Select>
      </Form.Group>
      <Button variant="success" type="submit">
        Invia Recensione
      </Button>
    </Form>
  );
};

export default AddComment;
