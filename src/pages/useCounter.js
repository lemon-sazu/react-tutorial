import { useState } from "react"

export const useCounter = () =>{
    const [count, setCount] = useState(0);

    const increseCount = () =>{
        setCount(count+1)
    } 
    const decreseCount = () =>{
        setCount(count-1)
    }
    const setCountZero = () =>{
        setCount(0)
    }
    return [count, increseCount, decreseCount, setCountZero];
}