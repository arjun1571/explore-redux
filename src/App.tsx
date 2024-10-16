import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <div className="bg-gray-100 h-screen w-screen">
        <h1 className="text-3xl font-bold text-center py-5">Counter Application</h1>
        <div className="max-w-md mx-auto mt-10 space-y-5">
          <Counter />
          <Counter />
        </div>
      </div>
    </>
  );
}

export default App;
