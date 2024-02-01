"use client"
import useCalculate from "./useCalculate";

export default function App(){


    const result = useCalculate(12,3);
    return(
        <>
        <h1>Result: {result}</h1>
        </>
    );
}