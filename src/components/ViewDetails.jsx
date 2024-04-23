import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ViewDetails() {
  const { id } = useParams();
  const [user, setUsers] = useState([]);
  console.log(id);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        // Process the fetched data
        console.log("Fetched data:", data);
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  if (!user) {
    return <div>Loading....</div>;
  }

  return (
    <div>
      {/* <h1>{user.name}</h1> */}
      <p>{user.username}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.website}</p>
      <div>
        <p>Address :</p>
        <p>city :{user.address.city}</p>
        <p>zipcode :{user.address.zipcode}</p>
        <p>{user.address.street}</p>
        <p>{user.address.suite}</p>
      </div>
      <div>
        <p>{user.company.name}</p>
        <p>{user.company.catchPhrase}</p>
        <p>{user.company.bs}</p>
      </div>
    </div>
  );
}
