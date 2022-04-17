import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
const Register = () => {
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }
    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.event.value;
    }

    return (
        <div className='register-form'>
            <h1 className='text-primary mt-4 text-center'>Please Register</h1>
            <form onSubmit={handleRegister}>
                <input type="text" name='name' placeholder='Your Name' />
                <input type="email" name='email' placeholder='Email address' required />
                <input type="password" name='password' placeholder='Password' required />
                <input className='bg-primary text-white' type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to="/login" className='text-info text-decoration-none  ' onClick={navigateLogin}>Please Login</Link></p>
        </div>
    );
};

export default Register;