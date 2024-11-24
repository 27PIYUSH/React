import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="outline outline-black hover:outline-dashed px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline outline-black hover:outline-dashed px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("cyan")}
            className="outline hover:outline-dashed text-black px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "cyan" }}
          >
            Cyan
          </button>
          <button
            onClick={() => setColor("olive")}
            className="outline outline-black hover:outline-dashed px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "olive" }}
          >
            olive
          </button>
          <button
            onClick={() => setColor("gray")}
            className="outline outline-black hover:outline-dashed px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "gray" }}
          >
            Gray
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline hover:outline-dashed text-black px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("pink")}
            className="outline hover:outline-dashed text-black px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => setColor("#F43F5E")}
            className="outline outline-black hover:outline-dashed px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#F43F5E" }}
          >
            Rose
          </button>
          <button
            onClick={() => setColor("lavender")}
            className="outline hover:outline-dashed text-black px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "lavender" }}
          >
            Lavender
          </button>
          <button
            onClick={() => setColor("White")}
            className="outline hover:outline-dashed text-black px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "White" }}
          >
            White
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;


/*
notes:::
to implement states we used style={{backgroundColor : color}}
onClick expects a funtion you can also pass refrence of the function like  onClick={setColor} but then you cannot pass the parameters
*/
