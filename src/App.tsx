import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Counter from "./components/Counter";
import { TotalCount } from "./components/TotalCount";
import { decrement, increment } from "./featuers/counters/counterSlice";

function App() {
  const counters = useSelector((state: any) => state?.counters);
  const dispatch = useDispatch();

  const handleIncrement = (counterId: number) => {
    dispatch(increment(counterId));
  };

  const handleDecrement = (counterId: number) => {
    dispatch(decrement(counterId));
  };

  const totalCount = counters.reduce((acc: any, counter: { value: any }) => acc + counter.value, 0);

  return (
    <>
      <div className="bg-gray-100 h-screen w-screen">
        <h1 className="text-3xl font-bold text-center py-5">Counter Application</h1>
        <div className="max-w-md mx-auto mt-10 space-y-5">
          {counters.map((counter: any) => (
            <Counter
              key={counter.id}
              count={counter.value}
              onIncrement={() => handleIncrement(counter.id)}
              onDecrement={() => handleDecrement(counter.id)}
            />
          ))}

          <TotalCount totalCount={totalCount} />
        </div>
      </div>
    </>
  );
}

export default App;
