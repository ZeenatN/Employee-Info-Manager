import React from "react";
import { Link } from "react-router-dom";
const Card = ({ id, title, content, username, cmpny_name }) => {
  return (
    <div
      className="card-container"
      style={{ backgroundColor: "#f5f5f5", color: "#333333", padding: "20px" }} // Adjust background and text color
    >
      <div className="card">
        <div
          className="card-body"
          style={{ backgroundColor: "blanchedalmond", color: "black" }}
        >
          <h5
            className="card-title"
            // style={{ backgroundColor: "pink", color: "black" }}
          >
            {title}
          </h5>
          <p className="card-text">{content}</p>
          <p className="card-text">{username}</p>
          <p className="card-text">{cmpny_name}</p>
          <Link
            to={`/user/${id}`}
            className="btn btn-primary my-8 mx-4 mt-4" // Adding btn class to style as button
            style={{ textDecoration: "none", color: "white" }}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
