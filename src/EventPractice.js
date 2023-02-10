import { useState } from 'react';

const EventPractice = () => {
  const [username, setUsername] = useState();
  const [message, setMessage] = useState();
  const onChangeUsername = (e) => setUsername(e.target.value);
  const onChangeMessage = (e) => setMessage(e.target.value);
  const onClick = () => {
    alert(username + ': ' + message);
    setUsername('');
    setMessage('');
  };
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div>
      <input
        type="text"
        name="username"
        placeholder="username"
        value={username}
        onChnage={onChangeUsername}
      ></input>
      <input
        type="text"
        name="message"
        placeholder="put msg here"
        value={message}
        onChnage={onChangeMessage}
        onKeyPress={onKeyPress}
      ></input>
      <button onClick={onClick}>confirm</button>
    </div>
  );
};

export default EventPractice;
