import { Component } from "react";
import { Button, Container, Form } from "react-bootstrap";

class AddComment extends Component {
  state = {
    newComment: {
      comment: "",
      rate: "",
      elementId: this.props.idSingleBook,
    },
    isLoading: false,
  };

  addComment = (e) => {
    e.preventDefault();

    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      body: JSON.stringify(this.state.newComment),
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJjZjYzYTMzNzk3OTAwMTlhNjcyNTAiLCJpYXQiOjE3MTQzOTEyNjIsImV4cCI6MTcxNTYwMDg2Mn0.p_DxmR81uvCGaq90fsbUdh_sC-2wkkwies_89d85X88",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          this.setState({
            newComment: {
              comment: "",
              rate: "",
              elementId: "",
            },
            isLoading: false,
          });

          console.log("fetch conclusa");
          return response.json();
        } else {
          throw new Error("Errore nella richiesta delle prenotazioni al server");
        }
      })
      .then((comment) => {
        console.log(comment);
      })

      .catch((err) => {
        console.log(err);
      })
      .finally(() => this.setState({ isLoading: false }));
  };
  handleFieldChange = (propertyName, propertyValue) => {
    this.setState({ newComment: { ...this.state.newComment, [propertyName]: propertyValue } });
  };

  render() {
    return (
      <div>
        <h6>Aggiungi Recensione:</h6>
        <Container>
          <Form onSubmit={this.addComment}>
            <Form.Group className="mb-3" controlId="FormComment">
              <Form.Control
                type="text"
                placeholder="Inserisci una recensione"
                onChange={(e) => this.handleFieldChange("comment", e.target.value)}
                value={this.state.newComment.comment}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="FormRate">
              <Form.Control
                type="number"
                min={1}
                max={5}
                placeholder="Valutazione:"
                onChange={(e) => this.handleFieldChange("rate", e.target.value)}
                value={this.state.newComment.rate}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="d-block mx-auto mt-4">
              Invia Recensione
            </Button>
          </Form>
        </Container>
        {this.state.isLoading && <div className="text-center loaderContainer"></div>}
      </div>
    );
  }
}
export default AddComment;
