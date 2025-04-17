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
      <h1>Login Page hear to </h1>
      <button onClick={() => handleLogin.apply ('google')}>Login with the............. Google</button>
      <button onClick={() => handleLogin ('github')}>Login with the............ GitHub</button>
    </div>
  );
}



export default Home;
