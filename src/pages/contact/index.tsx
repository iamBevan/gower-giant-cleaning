import * as React from 'react';
import './contact.scss';
import landingLogo from '../home/assets/images/logo.svg';
import { email, facebook, phone, location } from '../../components/assets/svgs'
import { GoogleMapComponent } from './GoogleMapComponent';


const Contact: React.SFC<{}> = () => (
    <section className="contact-page-section">

            <div className="contact-page-text">
                <img src={landingLogo} alt="" />
                <div className="flex-container-list">
                    <div className="contact-page-details">
                        <div className="contact-logo">
                            {email(50, 50)}
                        </div>
                        <div className="contact-logo-text">
                            julian@gowergiantcleaning.co.uk
                        </div>
                    </div>
                    <div className="contact-page-details">
                        <div className="contact-logo">
                            {phone(50, 50)}
                        </div>
                        <div className="contact-logo-text">
                            07843 227062
                        </div>
                    </div>
                    <div className="contact-page-details">
                        <div className="contact-logo">
                            {location(50, 50)}
                        </div>
                        <div className="contact-logo-text">
                            Bishopston, Swansea
                        </div>
                    </div>
                    <div className="contact-page-details">
                        <div className="contact-logo">
                            {facebook(50, 50)}
                        </div>
                        <div className="contact-logo-text">
                            Gower Giant Cleaning
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-page-img">
                <GoogleMapComponent />
            </div>
    </section>
);

export { Contact };