import React, { useState } from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const LoginForm = () => {
const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [errors, setErrors] = useState({});

const handleSubmit = (event) => {
    event.preventDefault();
    const errors = {};
    if (!username) {
        errors.username = 'Required';
    }
    if (!email) {
    errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    errors.email = 'Invalid email address';
    }
    if (!password) {
    errors.password = 'Required';
    } else if (password.length < 8) {
    errors.password = 'Must be at least 8 characters long';
    }
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      // Form is valid, submit it
    console.log('Form submitted');
    }
};

return (
    <div className='wrapper'>
    <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="input-box">
        <input type="text"
            placeholder='username'
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required/>
        <FaUser className='icon'/>
        {errors.username && <div className="error-message">{errors.username}</div>}
        </div>
        <div className="input-box">
        <input
            type="email"
            placeholder='email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
        />
        <FaEnvelope className='icon'/>
        {errors.email && <div className="error-message">{errors.email}</div>}
        </div>
        <div className="input-box">
        <input
            type="password"
            placeholder='password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
        />
        <FaLock className='icon'/>
        {errors.password && <div className="error-message">{errors.password}</div>}
        </div>
        <div className="remember-forgot">
        <label><input type="checkbox" />Remember Me</label>
        <a href="#">Forget Password?</a>
        </div>
        <button type='submit'>Login </button>
        <div className="register-link">
        <p>Don't have an account? <a href="#">Register </a></p>
        </div>
    </form>
    </div>
);
};

export default LoginForm;