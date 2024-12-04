import React from "react";

function Counter({ label, count, onIncrement }) {
  return (
    <div className="counter">
      <h3>{label}</h3>
      <p>{count}</p>
      <button onClick={onIncrement}>Incrementar</button>
    </div>
  );
}

export default Counter;
