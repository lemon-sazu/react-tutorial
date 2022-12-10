import { useCounter } from "./useCounter"

export const Counter = () => {
    const [count, increseCount, decreseCount, setCountZero] = useCounter();
    return <div className="app">
        <div>{count}</div>
        <div>
            <button onClick={increseCount}>Increse</button>
            <button onClick={decreseCount}>Decrese</button>
            <button onClick={setCountZero}>Set Zero</button>
        </div>
    </div>
}