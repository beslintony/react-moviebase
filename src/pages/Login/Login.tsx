import React, { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import API from '../../API';
import Button from '../../components/Button/Button';
import { Context } from '../../context';
import { Wrapper } from './Login.styles';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const { state: user, setState: setUser } = useContext(Context);
  const navigate = useNavigate();
  console.log(user);
  const handleSubmit = async () => {
    setError(false);
    try {
      const requestToken = await API.getRequestToken();
      const sessionId = await API.authenticate(requestToken, username, password);

      console.log(sessionId);

      setUser({ sessionId: sessionId.session_id, username });

      navigate('/');
    } catch (err) {
      setError(true);
    }
  };
  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    if (name === 'username') setUsername(value);
    if (name === 'password') setPassword(value);
  };

  return (
    <Wrapper>
      <h3>Login</h3>
      <input
        placeholder="username"
        type="text"
        value={username}
        name="username"
        onChange={handleInput}
      />

      <input
        placeholder="password"
        type="password"
        value={password}
        name="password"
        onChange={handleInput}
      />

      {error && <div className="error">Username or Password is wrong</div>}
      <Button text="submit" callback={handleSubmit} />
    </Wrapper>
  );
};

export default Login;
