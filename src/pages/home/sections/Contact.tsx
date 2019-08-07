import * as React from 'react';
import Fade from 'react-reveal/Fade';
import './styles/contact.scss';

import gower from '../assets/images/gowerMap.svg';

const email = (
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
        <path className="icons-svg" d="M12 2.02c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 12.55l-5.992-4.57h11.983l-5.991 4.57zm0 1.288l-6-4.629v6.771h12v-6.771l-6 4.629z" />
    </svg>
)

const location = (
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
        <path className="icons-svg" d="M12 2c3.196 0 6 2.618 6 5.602 0 3.093-2.493 7.132-6 12.661-3.507-5.529-6-9.568-6-12.661 0-2.984 2.804-5.602 6-5.602m0-2c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
    </svg>
)

export const phone = (
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
        <path className="icons-svg" d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.5 17.311l-1.76-3.397-1.032.505c-1.12.543-3.4-3.91-2.305-4.497l1.042-.513-1.747-3.409-1.053.52c-3.601 1.877 2.117 12.991 5.8 11.308l1.055-.517z" />
    </svg>
)

const facebook = (
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
        <path className="icons-svg" d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 10h-2v2h2v6h3v-6h1.82l.18-2h-2v-.833c0-.478.096-.667.558-.667h1.442v-2.5h-2.404c-1.798 0-2.596.792-2.596 2.308v1.692z" />
    </svg>
)

const Contact: React.FC<{}> = () => (
    <section className="contact-section">
        <h1 className="heading">Get in touch</h1>
        <div className="contact-container">

            <div className="flex-container">
                <div className="contact">
                    <div className="icons">
                        {email}
                    </div>
                    <div className="contact-text">
                        julian@gowergiantcleaning.co.uk
                    </div>
                </div>
                <div className="contact">
                    <div className="icons">
                        {phone}
                    </div>
                    <div className="contact-text">
                        01792 123456
                    </div>
                </div>
            </div>

            <div className="flex-container">
                <div className="contact">
                    <div className="icons">
                        {location}
                    </div>
                    <div className="contact-text">
                        Bishopston, Swansea
                    </div>
                </div>
                <div className="contact">
                    <div className="icons">
                        {facebook}
                    </div>
                    <div className="contact-text">
                        Gower Giant Cleaning
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export { 
    Contact,
    email,
    location,
    facebook
};