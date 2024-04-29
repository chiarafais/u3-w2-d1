import { Card, Badge, Col } from "react-bootstrap";
import { Component } from "react";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = { selected: false };

  // const clickImage =()=> {
  //   //     this.setState({selected : false})
  //   //   }
  render() {
    const { book } = this.props;
    return (
      <Col xs={12} sm={6} md={4} xl={3} className="text-center">
        <Card style={{ width: "270px" }} className={`mt-5 ${this.state.selected ? "selected" : ""}`}>
          <Card.Img variant="top" src={book.img} onClick={() => this.setState({ selected: !this.state.selected })} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>
              <Badge className="bg-success">€{book.price}</Badge>
            </Card.Text>
            {this.state.selected && <CommentArea idSingleBook={book.asin} />}
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
export default SingleBook;
