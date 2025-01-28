import { useState } from "react";

const App = () => {
  const [counter , setCounter] = useState(15);
  // let counter = 15;

  const addValue = () => {
    // counter = counter + 1;
    setCounter(counter + 1);
    console.log("Add Value " + counter);
  }
  
  const removeValue = () => {
    if(counter === 0){
      console.log("Remove Value " + counter);
      return;
    }
    else{
      setCounter(counter - 1);
      console.log("Remove Value " + counter);
    }
  }

  return (
    <div className="container">
      <h1>Counter</h1>
      <h2>Counter Value: {counter}</h2>
      <div>
        <button onClick={addValue}>Add Value</button>
        <button onClick={removeValue} disabled={counter === 0}>Remove Value</button>
      </div>
    </div>
  );
};

export default App;
