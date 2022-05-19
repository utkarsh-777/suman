import React from "react";
import logo from "../../images/icon.png";

const Main = (props) => {
  console.log("hey", props.doctorDetails);
  return (
    <div>
      <div className="row">
        <div className="col-5">
          <div className="card">
            <img
              src={logo}
              style={{ height: "10rem", width: "10rem" }}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#/ " className="btn btn-primary" alt="image">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-7">
          <div className="card">
            <ul className="list-group list-group-flush">
              <li className="list-group-item" style={{ padding: "2rem" }}>
                An item
              </li>
              <li className="list-group-item" style={{ padding: "2rem" }}>
                A second item
              </li>
              <li className="list-group-item" style={{ padding: "2rem" }}>
                A third item
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
