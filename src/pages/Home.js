import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleLogin = (provider) => {
    // Simulate login success
    if (provider === 'google') {
      navigate('/google');
    } else if (provider === 'github') {
      navigate('/github');
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={() => handleLogin('google')}>Login with Google</button>
      <button onClick={() => handleLogin('github')}>Login with GitHub</button>
    </div>
  );
}

export default Home;
