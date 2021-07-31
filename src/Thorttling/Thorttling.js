import axios from "axios";
import moment from "moment";
import React from "react";

const throttle = (fn, delay) => {
  let isThrottleBlocked = false;
  console.log("isThrottleBlocked", isThrottleBlocked);
  return function () {
    if (!isThrottleBlocked) {
      // console.log("arguments", arguments);
      fn.aplly(this, arguments);
      // fn();
      isThrottleBlocked = true;

      setTimeout(() => {
        isThrottleBlocked = false;
      }, delay);
    }
  };
};

const getQuote = async () => {
  return await axios
    .get("https://demo2202897.mockable.io/qotd")
    .then((res) => res);
};

const Thorttling = () => {
  const throttledGetQuote = throttle(async (e) => {
    const response = await getQuote();
    console.log("response", response);
  }, 3000);

  return [
    <div>Thorttling</div>,
    <div id="app">
      <input
        id="button"
        type="button"
        value="Fetch Quote"
        onClick={throttledGetQuote}
      />
      <div id="result" />
    </div>
  ];
};

export default Thorttling;
