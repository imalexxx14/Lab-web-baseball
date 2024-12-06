import React from "react";

function Counter({ label, count, onIncrement }) {
  return (
    <div className="counter">
      <h4>{label}</h4>
      <h5>{count}</h5>
      <button onClick={onIncrement} id="btnIncrementar">Incrementar</button>
    </div>
  );
}

export default Counter;
