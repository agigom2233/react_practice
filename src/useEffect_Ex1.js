import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

// useEffect 특정한 시점에 실행하는 함수

function App() {
  const [data, setData] = useState(1);
  const [search, setSearch] = useState(0);

  // 서버 데이터 받아왔다고 가정
  const download = () => {
    let number = 5;
    setData(number);
  };

  // 1.함수가 최초 실행될때(마운트) 실행된다.
  // 2.상태변수가 변경될때 실행된다.
  useEffect(() => {
    console.log('useEffect 실행됨');
    download();
  }, [search]);

  return (
    <div>
      <button
        onClick={() => {
          setSearch(2);
        }}
      >
        searching
      </button>
      <h1>{data}</h1>
      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        더하기
      </button>
    </div>
  );
}

export default App;
