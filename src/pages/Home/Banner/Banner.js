import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div>
            <div className='mt-2' style={{
                backgroundImage: "url(" + "https://www.linkpicture.com/q/43398.jpg" + ")",
                backgroundPosition: 'center',
                height: '400px',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>

                <div className=' name mb-5 d-flex justify-content-center'>
                    <div>
                        <h1>
                            Ahosanul S. Islam
                        </h1>
                        <p>B.Com., ACA</p>
                        <h2>Chartered Accountant</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;