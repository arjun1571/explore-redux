import Count from "./Count";
import Button from "./Button";
import { ICounterPops } from "../@interfaces/common.interface";

const Counter: React.FC<ICounterPops> = ({ count, onIncrement, onDecrement }) => {
  return (
    <div className="bg-white p-4 rounded flex flex-col items-center justify-center space-y-5">
      <div>
        <Count count={count} />
      </div>
      <div className="flex space-x-6 py-5 ">
        <Button handler={onIncrement} className="px-3 py-2 bg-blue-500 rounded shadow text-white">
          Increment
        </Button>
        <Button handler={onDecrement}>Decrement</Button>
      </div>
    </div>
  );
};

export default Counter;
