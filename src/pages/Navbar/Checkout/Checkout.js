import React from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm/CheckoutForm';

const Checkout = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <div className='d-flex justify-content-center'>
                <div>
                    <h2>Checkout Your Service</h2>
                    <h4 className='d-flex justify-content-center'>Service Id: {serviceId}</h4>
                </div>
            </div>
            <CheckoutForm></CheckoutForm>
        </div>
    );
};

export default Checkout;