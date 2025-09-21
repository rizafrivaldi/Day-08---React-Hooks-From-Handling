import React, { useState } from "react";

function Counter() {
  // state untuk menyimpan nilai counter
  const [count, setCount] = useState(0);

  // event handler
  const increment = () => setCount(count + i);
  const decrement = () => setCount(count - i);
  const reset = () => setCount(0);

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>This is Counter App</h2>
      <h3>Nilai: {count}</h3>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <button onClick={increment}>Tambah</button>
        <button onClick={decrement}>Kurang</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
