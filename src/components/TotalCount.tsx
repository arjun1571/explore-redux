import React from "react";
import { TotalCountProps } from "../@interfaces/common.interface";

export const TotalCount: React.FC<TotalCountProps> = ({ totalCount }) => {
  return (
    <div className="bg-white p-4 rounded flex flex-col items-center justify-center space-y-5">
      <div className="flex space-x-6 py-5">
        <h1 className="text-2xl font-semibold">Total Count: {totalCount}</h1>
      </div>
    </div>
  );
};
