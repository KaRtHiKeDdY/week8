// LoginPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted');
    // Add your login logic here
  };

  return (
    <div className="page-container">
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Login</button>
        </form>
        <div className="link-container">
          <p>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
