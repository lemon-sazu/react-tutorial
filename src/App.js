import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const countIncrese = () => {
    setCount(count+1);
  }
  const countDecrese = () => {
    setCount(count-1)
  }
  const countSetZero = () => {
    setCount(0);
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h2>{count}</h2>
      <div>
        <button onClick={countIncrese}>Increase</button>
        <button onClick={countDecrese}>Decrease</button>
        <button onClick={countSetZero}>Set To Zero</button>
      </div>
    </div >
  );
}

export default App;
