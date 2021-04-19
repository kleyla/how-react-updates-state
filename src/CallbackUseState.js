import React, { useState } from "react";

export const CallbackUseState = () => {
  const [count, setCount] = useState(0);

  const doubleIncreaseHandler = () => {
    setCount((actualCount) => actualCount + 1);
    console.log(`First Callback useState`, count);
    setCount((actualCount) => actualCount + 1);
    console.log(`Second Callback useState`, count);
  };

  return (
    <div>
      <h2>Async</h2>
      <button onClick={doubleIncreaseHandler}>Double Increase</button>
      <p>Count: {count}</p>
    </div>
  );
};
