import { Component, useEffect, useState } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import { Col, Container, Row } from "react-bootstrap";

const CommentArea = (props) => (
  // state = {
  //   reviews: []
  // };

  const [ reviews, setReviews ] = useState([]);

 const getReview = () => {
    if (props.asin) {
      fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          props.asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzQ4Njg0ODA2ZmM4YzAwMTU2Yjg2ZTciLCJpYXQiOjE3MzI4MTY1NjEsImV4cCI6MTczNDAyNjE2MX0.F57Jji8XsC7Kn4idVyVuXxgoGrahg7-zgJDm0xHFvB0"
          }
        }
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((reviews) => {
          setReviews( reviews );
        });
    }
  };

  useEffect(() => {
    if (setReviews.asin !== reviews.asin) {
      getReview();
    }
  })

  

    return (
      <Container>
        {this.props.asin ? (
          <Row xs={1} id="comment-list">
            <Col>
              <CommentList reviews={reviews} />
              <AddComment asin={reviews.asin} />
            </Col>
          </Row>
        ) : (
          <p>Seleziona un libro per vedere i commenti.</p>
        )}
      </Container>
    );
)

export default CommentArea;
