import { useState } from 'react';
const Say = () => {
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('안녕하세요');
  const onClickLeave = () => setMessage('BYE');

  return (
    <div>
      <button onClick={onClickEnter}>enter</button>
      <button onClick={onClickLeave}>leave</button>
      <h1>{message}</h1>
    </div>
  );
};

export default Say;
