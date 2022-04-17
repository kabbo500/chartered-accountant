import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useUpdateProfile } from 'react-firebase-hooks/auth';

import auth from '../../../firebase.init';
import GoogleLogin from '../Login/GoogleLogin/GoogleLogin';
import { async } from '@firebase/util';
const Register = () => {
    const [agree, setAgree] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }


    const handleRegister = async (event) => {
        event.preventDefault();
        const displayName = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName });
        navigate('/');

    }

    return (
        <div className='register-form'>
            <h1 className='text-primary mt-4 text-center'>Please Register</h1>
            <form onSubmit={handleRegister}>
                <input type="text" name='name' placeholder='Your Name' />
                <input type="email" name='email' placeholder='Email address' required />
                <input type="password" name='password' placeholder='Password' required />
                <input onClick={() => setAgree(!agree)}
                    type="checkbox" name="terms" id="terms" />
                <label className={`ps-2 ${agree ? 'text-primary' : 'text-danger'}`} htmlFor="terms">Accept Terms and Conditions</label>
                <input
                    disabled={!agree}
                    className='btn btn-primary text-white d-block mx-auto w-50 mt-2' type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to="/login" className='text-info text-decoration-none  ' onClick={navigateLogin}>Please Login</Link></p>
            <GoogleLogin></GoogleLogin>
        </div>
    );
};

export default Register;