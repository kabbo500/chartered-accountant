import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className='container mt-5'>
            <h1 className='text-info d-flex justify-content-center mb-5'>Blogs Page</h1>
            <article>
                <h3 className='text-primary mt-4'>1) Difference between Authorization and Authentication?</h3>
                <div>
                    <p><b>Ans: <br /> </b> No-1: In <b>authentication</b> process the of users are checked for providing the access to the system.</p>
                    <p>While in <b>authorization</b> process, person's or user's authorities are checked for accessing the resources.</p>
                </div>
                <div>
                    <p>No-2: In <b>Authentication</b>  common methods include, username, password,email, ans to a security question, code sent via sms or email.</p>
                    <p>In <b>Authorization</b> permissions are granted and monitored by the organization.</p>
                </div>
                <div>
                    <p>No-3: <b>Authentication</b> is  visible by the user</p>
                    <p><b>Authorization</b> is not visible by the user</p>
                </div>
            </article>
            <article>
                <h3 className='text-primary mt-4'>
                    2)  Why are you using Firebase, what other option do you have to implement authentication?
                </h3>
                <p><b>Ans:</b> First reason for using firebase is for app Authentication and Authorization  . Secondly I am using firebase for website hosting , it is very easy to use and bug free. Third reason is it's user interface is very user friendly. <b>Other option</b> for implement authentication is  1.Stytch:Stytch is a staunch supporter of password-less authentication. 2.Superbase: Superbase calls itself an open source firebase alternative. </p>

            </article>
            <article>
                <h3 className='text-primary mt-4'>3)  What other services does firebase provide other than authentication?</h3>
                <p> <b>Ans:</b> Without authentication, firebase others service is Cloud messaging. Firebase could messaging can support sending notification messages that are displayed to the user's devices as a notification. Notification is supported in android, iOs or the web. Another useful firebase service is website hosting, it is very easy and bug free. Another useful service is monitor app performance with firebase performance monitoring.</p>
            </article>

        </div>
    );
};

export default Blogs;