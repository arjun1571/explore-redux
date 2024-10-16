import React, { useState } from "react";
import Count from "./Count";
import Button from "./Button";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <div className="bg-white p-4 rounded flex flex-col items-center justify-center space-y-5">
      <div>
        <Count count={count} />
      </div>
      <div className="flex space-x-6 py-5 ">
        <Button handler={handleIncrement} className="px-3 py-2 bg-blue-500 rounded shadow text-white">
          Increment
        </Button>
        <Button handler={handleDecrement}>Decrement</Button>
      </div>
    </div>
  );
};

export default Counter;
