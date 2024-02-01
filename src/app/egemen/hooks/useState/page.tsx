"use client"
import useCounter from "./useCounter";

export default function App(){

    const [counter,increment,decrement] = useCounter(0);
    return(
        <>
          <h1>{counter}</h1>
          <button onClick={increment}>Increment</button>
          <br/>
          <button onClick={decrement}>Decrement</button>
        </>
    );
}