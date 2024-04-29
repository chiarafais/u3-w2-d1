import { Component } from "react";

class MyFooter extends Component {
  render() {
    return (
      <footer className="bg-dark text-light">
        <div className="container">
          <div className="row">
            <div className="col-4 text-center text-secondary">
              <h6>CONTACTS</h6>
              <p>New York, NY 10012, US</p>
              <p>info@example.com</p>
              <p>+ 01 234 567 88</p>
              <p>Shop</p>
              <p>Work whit us</p>
            </div>
            <div className="col-4 text-center text-secondary">
              <h6>PRODUCTS</h6>
              <p>Book</p>
              <p>CD</p>
              <p>Vinyl</p>
            </div>
            <div className="col-4 text-center text-secondary">
              <h6>USEFUL LINKS</h6>
              <p>MEGAZINE</p>
              <p>EVENTS</p>
              <p>COMMUNITY</p>
              <p>INFO</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default MyFooter;
