import { Badge, ListGroup } from "react-bootstrap";
import { StarFill } from "react-bootstrap-icons";

const CommentList = ({ reviews }) => (
  <>
    <ListGroup>
    <h5 className="mt-2">RECENSIONI:</h5>
      {reviews.map((review) => (
        <ListGroup.Item
          key={review._id}
          className="d-flex align-items-center flex-wrap"
        >
          <span>{review.author}</span>
          <span>{review.comment}</span>{" "} {" "}
          <span>
            <Badge>{review.rate}<StarFill /></Badge>
          </span>
        </ListGroup.Item>
      ))}
    </ListGroup>
  </>
);

export default CommentList;
