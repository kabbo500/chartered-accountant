import React from 'react';
import './About.css'
const About = () => {
    return (
        <div className='container'>
            <div>
                <h1 className='d-flex justify-content-center mt-3'>About Myself</h1>

                <h3 className='d-flex justify-content-center mt-3 mb-5 text-info'>My Vision/Goal In Future</h3>
            </div>
            <div className='goal-heading mb-4'>
                <h5 >A firm that will offer comprehensive business and tax related services and assist enterprises to tackle complex situations in the fast changing scenarios of business with the power of rightful decision making. My Goal is given below --</h5>
            </div>
            <div className='goals'>
                <ul >
                    <li>I will provide a commitment to be cost-effective and to always be continually accessible.
                    </li>
                    <li>
                        I will aim to grow by approximately 15% per year so that growth is controlled and qualitative.

                    </li>
                    <li>
                        I will only work with clients that we enjoy working with and where I can bring added value.

                    </li>
                    <li>
                        I will be highly ethical and professional.

                    </li>
                    <li>
                        I will strive on building relationships and social networks with clients.

                    </li>
                </ul>
            </div>



        </div>
    );
};

export default About;