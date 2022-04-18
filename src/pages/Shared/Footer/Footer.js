import React from 'react';
import './Footer.css'
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='footer-container'>
            <footer className='footer'>
                <p className='text-info'>Ahosanul Islam</p>
                <p className=' text-primary mt-4 mb-4 mt-0'><small>&copy; copyright {year}</small></p>
            </footer>
        </div>
    );
};

export default Footer;