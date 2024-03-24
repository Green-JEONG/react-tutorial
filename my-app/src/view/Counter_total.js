import { useState } from 'react';

export default function Counter_Total() {
  const [counters, setCounters] = useState(Array.from({ length: 10 }, () => 0));
  const [totalCount, setTotalCount] = useState(0);

  const handleClick = (index) => {
    const newCounters = [...counters];
    newCounters[index]++;
    setCounters(newCounters);
    setTotalCount(totalCount + 1);
  };

  return (
    <div>
      <h1>Counters that update together</h1>
      {counters.map((count, index) => (
        <MyButton key={index} count={count} onClick={() => handleClick(index)} />
      ))}
      <p>Total: {totalCount}회</p>
    </div>
  );
}

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}