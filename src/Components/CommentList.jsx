import { Component } from "react";
import { Button, Col, Row } from "react-bootstrap";

class CommentList extends Component {
  state = {
    comments: [],
    isLoading: false,
  };

  deleteComment = (idSingleBook) => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + idSingleBook, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJjZjYzYTMzNzk3OTAwMTlhNjcyNTAiLCJpYXQiOjE3MTQzOTEyNjIsImV4cCI6MTcxNTYwMDg2Mn0.p_DxmR81uvCGaq90fsbUdh_sC-2wkkwies_89d85X88",
        "Content-Type": "application/json",
      },
    });
  };

  getList = (props) => {
    this.setState({ isLoading: true });
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.idSingleBook, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJjZjYzYTMzNzk3OTAwMTlhNjcyNTAiLCJpYXQiOjE3MTQzOTEyNjIsImV4cCI6MTcxNTYwMDg2Mn0.p_DxmR81uvCGaq90fsbUdh_sC-2wkkwies_89d85X88",
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log("fetch conclusa");
          return response.json();
        } else {
          throw new Error("Errore nella richiesta delle prenotazioni al server");
        }
      })
      .then((comments) => {
        this.setState({ comments: comments });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  componentDidMount() {
    this.getList();
  }

  render() {
    return (
      <div>
        <h6 className="m-0 bg-primary text-light">Recensioni:</h6>
        <div className="commentList">
          {this.state.comments.map((comment) => {
            return (
              <Row key={comment._id}>
                <Col className="p-0 position-relative">
                  <div>
                    <p className="m-1">{comment.author}</p>
                    <p className="m-1">{comment.comment}</p>
                    <p className="m-1">{comment.rate}</p>
                    <span>
                      <Button type="button" variant="danger">
                        <i className="bi bi-trash3-fill" onClick={() => this.deleteComment(comment._id)}></i>
                      </Button>
                    </span>
                  </div>
                </Col>
              </Row>
            );
          })}
        </div>
        {this.state.isLoading && <div className="text-center loaderContainer"></div>}
      </div>
    );
  }
}
export default CommentList;
