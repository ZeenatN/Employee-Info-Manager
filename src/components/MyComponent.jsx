import React, { useContext } from "react";
import { MyContext } from "./MyContext";
import { Link } from "react-router-dom";

function MyComponent() {
  const { setData } = useContext(MyContext);

  const display = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        // Process the fetched data
        console.log("Fetched data:", data);
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div
      style={{
        backgroundImage: `url(${"https://assets-global.website-files.com/619dc793cd0b4873e0825490/61ae20883d652b27b6ef3f39_org-design-second-edition.svg?resize=800%2C600&quality=70&ssl=1"})`,
        backgroundSize: "contain",
        backgroundPosition: "center 30%",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh", // Ensure the background covers the entire viewport height
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <Link
          onClick={display}
          to={`/fetchdata`}
          className="btn btn-primary my-8 mx-4 mt-4" // Adding btn class to style as button
          style={{ textDecoration: "none", color: "white" }} // Removing default link underline and setting text color
        >
          Employee Overview
        </Link>
      </div>
    </div>
  );
}

export default MyComponent;
