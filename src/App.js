import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import GooglePage from './pages/GooglePage';
import GitHubPage from './pages/GitHubPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/google" element={<GooglePage />} />
        <Route path="/github" element={<GitHubPage />} />
      </Routes>
    </Router>
  );
}

const loginWithGitHub = () => {
  window.location.href = "/.auth/login/github";
};

export default App;
