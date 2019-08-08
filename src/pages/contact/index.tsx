import * as React from 'react';
import Fade from 'react-reveal/Fade';

import './contact.scss';
import landingLogo from '../home/assets/images/logo.svg';
import { phone, location, email, facebook } from '../home/sections/Contact';


const Contact: React.SFC<{}> = () => (
    <section>
        {/* <Fade duration={3000}><h1 className="services-heading">Contact</h1></Fade> */}
        <div className="flex-container" style={{ backgroundColor: '#072030', color: '#ffffff' }}>
            
            <div className="contact-text">
                <img src={landingLogo} alt=""/>
                <h1>Gower Giant Cleaning</h1>
                <h2>Established 1980</h2>
                <ul>
                    <li>{phone}</li>
                    <li>{email}</li>
                    <li>{location}</li>
                    <li>{facebook}</li>
                    <li></li>
                </ul>
                <p>
                    We've been cleaning windows in the Gower area for the past 40 years.
                    Our small experienced team currently serves hundreds of satisfied customers Mon - Fri.
                </p>

            </div>
            <div className="contact-img">
                &nbsp;
            </div>
        </div>
    </section>
);

export { Contact };