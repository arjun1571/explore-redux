import React from "react";

interface CountProps {
  count: number;
}

const Count: React.FC<CountProps> = ({ count }) => {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold pt-3">{count}</h1>
    </div>
  );
};

export default Count;
