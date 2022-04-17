import React from 'react';

const Service = ({ service }) => {

    const { img, name, price, description } = service
    return (
        <div className='col-12 col-md-6 col-lg-4 g-4'>
            <div class="card " style={{ width: "18rem" }}>
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{description}</p>
                    <h5>Price:${price}</h5>
                    <a href="#" className='btn btn-primary'>Go somewhere</a>
                </div>
            </div>
        </div>

    );
};

export default Service;