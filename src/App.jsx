import React, { useState } from "react";

const App = () => {
  // let counter = 0;
  const [counter, setCounter] = useState(0);
  function IncreaseCounter() {
    setCounter(counter + 1);
    console.log(counter);
  }
  function DecreaseCounter() {
    setCounter(counter - 1);
    console.log(counter);
  }
  return (
    <div>
      <button onClick={IncreaseCounter}>Click me +</button>
      {counter}
      <button onClick={DecreaseCounter}>Click me -</button>
    </div>
  );
};

export default App;
