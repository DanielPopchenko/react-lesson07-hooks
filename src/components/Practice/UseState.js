import React, { useState } from 'react';

export default function Practice() {
  const [num, setNum] = useState(0);

  function increment() {
    setNum((num) => (num += 1));
  }

  function decrement() {
    setNum((num) => (num -= 1));
  }
  return (
    <div>
      <h1>Counter</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <p>{num}</p>
    </div>
  );
}
