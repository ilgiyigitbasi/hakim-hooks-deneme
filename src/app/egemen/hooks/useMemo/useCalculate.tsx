import { useMemo } from "react";

export default function useCalculate(a: number, b:number){

    const result = useMemo(() => {
        return a*b;
    },[a,b]);

    return result;
}