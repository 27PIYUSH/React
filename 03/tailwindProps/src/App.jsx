import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-blue-300 text-black p-3 rounded-xl mb-5">Testing...</h1>
      <Card name='MacBook Pro'  />
      <Card name='MacBook Air' btnTxt="More..." />
    </>
  );
}

export default App;
