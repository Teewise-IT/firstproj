import { useState } from "react";

function Counter() {
  const [counting, setCounting] = useState(0);
  let output;

  //   if (condition) {

  //   } else {

  //   }

  const increment = () => {
    setCounting(counting + 1);
  };

  const decrement = () => {
    setCounting(counting - 1);
  };
  output = (
    <div>
      <div>
        <button
          class=" font-bold bg-gray-300 text-white px-4 py-1.5 rounded-md text-blue-800"
          onClick={decrement}
        >
          Decrement
        </button>
        Counter Value: {counting}
        <button
          class=" font-bold bg-gray-300 text-white px-4 py-1.5 rounded-md text-blue-800"
          onClick={increment}
        >
          Increment
        </button>
      </div>
    </div>
  );
  return <div>{output}</div>;
}

export default Counter;
