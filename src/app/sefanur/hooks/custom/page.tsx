import { useState, useMemo } from 'react';
import sumNumbers from './useMemo';

export default function SefMemoHook() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  const sum = useMemo(() => sumNumbers([number1, number2]), [number1, number2]);

  return (
    <div>
      <h1>Sum Calculator</h1>
      <p>Number 1: {number1}</p>
      <input type="number" value={number1} onChange={(e) => setNumber1(parseInt(e.target.value))} />
      <p>Number 2: {number2}</p>
      <input type="number" value={number2} onChange={(e) => setNumber2(parseInt(e.target.value))} />
      <p>Sum: {sum}</p>
    </div>
  );
}