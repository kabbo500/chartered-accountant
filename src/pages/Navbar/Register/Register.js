import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

import auth from '../../../firebase.init';
import GoogleLogin from '../Login/GoogleLogin/GoogleLogin';
const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    if (user) {
        navigate('/');
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='register-form'>
            <h1 className='text-primary mt-4 text-center'>Please Register</h1>
            <form onSubmit={handleRegister}>
                <input type="text" name='name' placeholder='Your Name' />
                <input type="email" name='email' placeholder='Email address' required />
                <input type="password" name='password' placeholder='Password' required />
                <input style={{ height: '40px' }} className='bg-primary text-white d-block mx-auto w-50' type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to="/login" className='text-info text-decoration-none  ' onClick={navigateLogin}>Please Login</Link></p>
            <GoogleLogin></GoogleLogin>
        </div>
    );
};

export default Register;