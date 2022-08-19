import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("text");

  return (
    <div className="Counter">
      <h2>{count}</h2>
      <h2>{value}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <input
        type="text"
        value={value}
        onInput={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Counter;
