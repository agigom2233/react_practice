import './App.css';
import { useEffect, useMemo, useState } from 'react';

// useEffect 특정한 시점에 실행하는 함수

function App() {
  const [list, setList] = useState([1, 2, 3, 4]);
  const [str, setStr] = useState('summary');
  const addResult = () => {
    let sum = 0;
    list.forEach((i) => (sum = sum + i));
    console.log('sum :', sum);
    return sum;
  };
  const result = useMemo(() => addResult(), [list]);
  return (
    <div>
      <button
        onClick={() => {
          setList([...list, 10]);
        }}
      >
        add some value
      </button>
      <button
        onClick={() => {
          setStr('total summary');
        }}
      >
        change str
      </button>
      {list.map((i) => (
        <h1>{i}</h1>
      ))}
      <div>
        {str} : {result}
      </div>
    </div>
  );
}

export default App;
