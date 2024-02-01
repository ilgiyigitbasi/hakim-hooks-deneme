import { useState } from "react";

export default function useCounter(value: number): [number, () => void, ()=> void]{
    const [counter, setCounter] = useState<number>(value);
    const increment = () => setCounter(counter + 1);
    const decrement = () => setCounter(counter - 1);

    return [counter, increment, decrement]
}