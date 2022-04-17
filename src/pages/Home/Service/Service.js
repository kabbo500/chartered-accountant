import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {

    const { id, img, name, price, description } = service

    const navigate = useNavigate();

    const navigateToCheckout = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='service col col-12  col-md-6 col-lg-4 g-4'>
            <div class="card " style={{ width: "18rem" }}>
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{description}</p>
                    <h5>Price:${price}</h5>
                    <button onClick={() => navigateToCheckout(id)} className='btn btn-primary'>Checkout</button>
                </div>
            </div>
        </div>

    );
};

export default Service;