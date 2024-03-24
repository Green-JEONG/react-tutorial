import { useState } from "react";

export default function Counter() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
    </div>
  );
}

function MyButton() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

  function handleClick1() {
    setCount1(count1 + 1);
  }
  function handleClick2() {
    setCount2(count2 + 1);
  }

  return (
    <div>
    <button onClick={handleClick1}>Clicked {count1} times</button>
    <button onClick={handleClick2}>Clicked {count2} times</button>
    </div>
  );
}
