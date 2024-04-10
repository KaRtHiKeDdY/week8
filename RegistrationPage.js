// RegistrationPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function RegistrationPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateAge()) {
      console.log('Registration submitted');
      // Add your registration logic here
    } else {
      setErrorMessage('You must be at least 5 years old to register.');
    }
  };

  const validateAge = () => {
    return parseInt(age) >= 5;
  };

  return (
    <div className="page-container">
      <div className="form-container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} required />
          <select value={gender} onChange={(e) => setGender(e.target.value)} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <textarea placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} required />
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit">Register</button>
        </form>
        <div className="link-container">
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
