import React, { useState } from "react";

export const AsyncUseState = () => {
  const [count, setCount] = useState(0);

  const doubleIncreaseHandler = () => {
    setCount(count + 1);
    console.log(`First Async useState`, count);
    setCount(count + 1);
    console.log(`Second Async useState`, count);
  };

  return (
    <div>
      <h2>Async</h2>
      <button onClick={doubleIncreaseHandler}>Double Increase</button>
      <p>Count: {count}</p>
    </div>
  );
};
