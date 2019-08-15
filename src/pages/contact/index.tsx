import * as React from 'react';
import './contact.scss';
import landingLogo from '../home/assets/images/logo.svg';
import { email, facebook, phone, location } from '../../components/assets/svgs'
import { GoogleMapComponent } from './GoogleMapComponent';


const Contact: React.SFC<{}> = () => (
    <section className="contact-page-section">

            <div className="contact-page-text">
                <img src={landingLogo} alt="" />
                <h1>Gower Giant Cleaning</h1>
                <h2 className="established">Established 1980</h2>
                <div className="flex-container-list">
                    <div className="contact-page-details">
                        <div>
                            {email(40, 40)}
                        </div>
                        <div className="contact-page-text">
                            julian@gowergiantcleaning.co.uk
                        </div>
                    </div>
                    <div className="contact-page-details">
                        <div>
                            {phone(40, 40)}
                        </div>
                        <div className="contact-page-text">
                            07843 227062
                        </div>
                    </div>
                    <div className="contact-page-details">
                        <div>
                            {location(40, 40)}
                        </div>
                        <div className="contact-page-text">
                            Bishopston, Swansea
                        </div>
                    </div>
                    <div className="contact-page-details">
                        <div>
                            {facebook(40, 40)}
                        </div>
                        <div className="contact-page-text">
                            Gower Giant Cleaning
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-page-img">
                {/* <GoogleMapComponent /> */}
                1
            </div>
    </section>
);

export { Contact };