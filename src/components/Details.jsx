import React, { useContext } from "react";
import { MyContext } from "./MyContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Details() {
  const { id } = useParams();
  const { data } = useContext(MyContext);

  const filteredUser = data.filter((user) => user.id === parseInt(id));

  const user = filteredUser[0];
  return (
    <div
      style={{
        background: "linear-gradient(to right, #ff7e5f, #feb47b)", // Gradient background color combo
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="container my-4 mx-5 p-4"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.8)", // Adjust background color and opacity
          color: "blueviolet", // Adjust text color
          borderRadius: "10px", // Add border radius for rounded corners
        }}
      >
        <div>
          <h6>Here are the details </h6>
          <p></p>
          <p>{`name : ${user.name}`}</p>
          <p>{`username : ${user.username}`}</p>
          <p>{`email : ${user.email}`}</p>
          <p>{`phone : ${user.phone}`}</p>
          <p>{`website : ${user.website}`}</p>
          <div>
            <h6>Company Details </h6>
            <p>{`company-name : ${user.company.name}`}</p>
            <p>{`catchPhrase : ${user.company.catchPhrase}`}</p>
            <p>{`company bs: ${user.company.bs}`}</p>
          </div>
          <div>
            <h6>Address </h6>
            <p>{`city : ${user.address.city}`}</p>
            <p>{`zipcode: ${user.address.zipcode}`}</p>
            <p>{`street : ${user.address.street}`}</p>
            <p>{`suite :${user.address.suite}`}</p>
          </div>

          <Link
            to={`/fetchdata`}
            className="btn btn-primary my-8 mx-4 mt-4" // Adding btn class to style as button
            style={{ textDecoration: "none", color: "white" }}
          >
            Go back
          </Link>
        </div>
      </div>
    </div>
  );
}
