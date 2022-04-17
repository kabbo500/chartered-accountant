import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer>
            <p className='text-primary text-center mt-4 mb-4'><small>&copy; copyright {year}</small></p>
        </footer>
    );
};

export default Footer;