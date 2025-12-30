import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [show, setShow] = useState(true);
  const [color, setColor] = useState("white");

  function IncreaseCounter(num) {
    setCounter(counter + num);
    setColor("green");
  }

  function DecreaseCounter(num) {
    setCounter(counter - num);
    setColor("red");
  }

  const ResetButton = () => {
    setCounter(0);
  };
  const onInputChange = (ele) => {
    console.log(ele);

    setColor(ele.target.value);
  };

  return (
    <>
      <div>
        {show && (
          <div style={{ margin: "10px" }}>
            <button onClick={() => IncreaseCounter(2)}>Click me +</button>

            <span style={{ color: color }}>{counter}</span>

            <button disabled={counter <= 0} onClick={() => DecreaseCounter(2)}>
              Click me -
            </button>

            <button onClick={ResetButton}>Reset</button>
          </div>
        )}
        <hr />
        <button onClick={() => setShow(!show)} type="button">
          {show ? "Hide" : "Show"} Controls
        </button>
        <hr />
        <label htmlFor="">Enter the Backgroud Color </label>
        <input type="text" onChange={onInputChange} />
        <p>Temp Text for changing color of text</p>
        <button></button>
      </div>
    </>
  );
};

export default App;
