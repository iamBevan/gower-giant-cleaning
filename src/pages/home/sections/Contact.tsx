import * as React from 'react';
import Fade from 'react-reveal/Fade';
import './styles/contact.scss';

import gower from '../assets/images/gowerMap.svg';

import { email, facebook, phone, location } from '../../../components/assets/svgs'



const Contact: React.FC<{}> = () => (
    <section className="contact-section">
        <h1 className="heading">Get in touch</h1>
        <div className="contact-container">

            <div className="flex-container">
                <div className="contact">
                    <div className="icons">
                        {email(50, 50)}
                    </div>
                    <div className="contact-text">
                        julian@gowergiantcleaning.co.uk
                    </div>
                </div>
                <div className="contact">
                    <div className="icons">
                        {phone(50, 50)}
                    </div>
                    <div className="contact-text">
                        07843 227062
                    </div>
                </div>
            </div>

            <div className="flex-container">
                <div className="contact">
                    <div className="icons">
                        {location(50, 50)}
                    </div>
                    <div className="contact-text">
                        Bishopston, Swansea
                    </div>
                </div>
                <div className="contact">
                    <div className="icons">
                        {facebook(50, 50)}
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
    // email,
    // location,
    // facebook
};