import React from 'react';
import { Form } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './CheckoutForm.css'

const CheckoutForm = () => {

    const handleCheckout = () => {
        toast(" Thanks for taken our Service !", {
            position: "top-center"
        });


    }
    return (
        <div className='checkout-btn container w-50 mt-5'>
            <button className=' btn-primary w-50' onClick={handleCheckout} > Service Checkout</button>

            <ToastContainer />
        </div>
    );
};

export default CheckoutForm;