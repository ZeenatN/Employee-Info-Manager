import React, { useState } from "react";
import Fetchdata from "./components/Fetchdata";

import { MyContext } from "./components/MyContext";
import MyComponent from "./components/MyComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Details from "./components/Details";
export default function App() {
  const [data, setData] = useState([]);
  return (
    <Router>
      <MyContext.Provider value={{ data, setData }}>
        <div>
          <Routes>
            <Route path="/" element={<MyComponent />} />
            <Route path="/fetchdata" element={<Fetchdata />} />
            <Route path="/user/:id" element={<Details />} />
          </Routes>
        </div>
      </MyContext.Provider>
    </Router>
  );
}
