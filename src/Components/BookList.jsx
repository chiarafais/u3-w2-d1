import { Component } from "react";
import SingleBook from "./SingleBook";
import { Container, Row } from "react-bootstrap";

class BookList extends Component {
  render() {
    const { books } = this.props;
    return (
      <div className="containerCard">
        <Container fluid>
          <Row>
            {books.map((book) => (
              <SingleBook title={book.title} img={book.img} price={book.price} key={book.asin} book={book} />
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default BookList;
