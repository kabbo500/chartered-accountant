import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div>
            <div className='mt-1' style={{
                backgroundImage: "url(" + "https://www.linkpicture.com/q/1910.i201.036.taxes-accounting-icometric.jpg" + ")",
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
                        <h5 className='justify-content-center d-flex text-primary'>(B.Com., ACA)</h5>
                        <h2 className='justify-content-center d-flex '>Chartered Accountant</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;