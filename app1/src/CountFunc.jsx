import React, { useState } from "react";

export const CountFunc = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>
  );
};
