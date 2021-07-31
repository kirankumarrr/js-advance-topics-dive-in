import axios from "axios";
import moment from "moment";
import React, { useState } from "react";

const Debouning = (fn, delay) => {
  const [text, setText] = React.useState("");

  const getData = async (value) => {
    const result = await axios.get(
      `http://localhost:5000/api/v1/users/userlist?name=${value}`
    );
    console.log("result", result.data);
  };

  const handleChange = (e) => {
    setText(e.target.value);
    getData(e.target.value);
  };

  return [
    <div>Debouning</div>,
    <div id="app">
      <input
        id="searchbox"
        value={text}
        placeholder="Type something here..."
        onChange={handleChange}
      />
      <div id="results" />
    </div>
  ];
};

export default Debouning;
