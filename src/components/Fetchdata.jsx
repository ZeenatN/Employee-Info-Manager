import React, { useContext } from "react";
import Card from "./Card";

import { MyContext } from "./MyContext";

export default function Fetchdata() {
  const { data } = useContext(MyContext);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // Process the fetched data
  //       console.log("Fetched data:", data);
  //       setData(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);
  return (
    <div className="container mx-3 mt-4">
      <div className="row">
        {data.map((user) => (
          <div key={user.id} className="col-12 col-md-4 col-lg-2.4 mb-4">
            <Card
              id={user.id}
              title={user.name}
              content={`Email : ${user.email}`}
              username={`username : ${user.username}`}
              cmpny_name={`company-name : ${user.company.name}`}
            />
            {/* You can display other user information here */}
          </div>
        ))}
      </div>
    </div>
  );
}
