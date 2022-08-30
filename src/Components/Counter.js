import React from "react";
import { useState } from "react";

const Counter = () => {
  const [counting, setCounting] = useState(0);

  if (counting < 10) {
    console.log("I am less than 10 years old");
  } else {
    console.log("I am greater or equal to 10 years old");
  }

  const increment = () => {
    setCounting(counting + 1);
  };

  const decrement = () => {
    setCounting(counting - 1);
  };
  // output = (
  return (
    <div>
      <div>
        <button
          className="font-bold bg-gray-300 text-white px-4 py-1.5 rounded-md text-blue-800"
          onClick={decrement}
        >
          Decrement
        </button>
        Counter Value: {counting}
        <button
          className="font-bold bg-gray-300 text-white px-4 py-1.5 rounded-md text-blue-800"
          onClick={increment}
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;
