import { useState } from 'react'
import './App.css'

function App() {

  // for ui updation
  let [counter,setCounter] = useState(0);

  // let counter = 0
  const addValue = () => {
    if(counter < 20){
      setCounter(counter + 1);

      // For interview:::
      // useState --> jitne bhi updates hote h sbko batches m ek saath bhejta h toh ye same updates h issliye one time chlega
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // to make it work --> setCounter ke andr callBack milta h 
      // setCounter(prevCounter => prevCounter + 1);
      // setCounter(prevCounter => prevCounter + 1);
      // setCounter(prevCounter => prevCounter + 1);
    }
    else{
      alert("Counter is already at max value");
    }
    console.log(counter);
    
  }

  const decValue = () => {
    if(counter == 0){
      alert("Counter is already at min value");
    }    
    else{
      setCounter(counter-1);
    }
    console.log(counter);
    
  }

  return (
    <>
    <h1>Counter...</h1>
    <h2>Count - {counter}</h2>
    <button onClick={addValue}>Increment</button> &nbsp;&nbsp;&nbsp;&nbsp;
    <button onClick={decValue}>Decrement</button>
    </>
  )
}

export default App
