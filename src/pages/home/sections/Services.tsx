import * as React from 'react';
import Fade from 'react-reveal/Fade';

import window from '../assets/images/window.png';
import jet from '../assets/images/jet.png';
import gut from '../assets/images/gut.png';

import './styles/services.scss';

const Services: React.SFC<{}> = () => (
    <section>
        <div className="services-container">
            <Fade duration={3000}><h1>Our Services</h1></Fade>
            <div className="flex-container">
                <Fade duration={3000}>
                    <div className="service">
                        <img src={window} alt="" />
                        <h2>Window Cleaning</h2>
                        <ul>
                            <li>Domestic and Commercial</li>
                            <li>Exterior and Interior</li>
                            <li>Water-fed Pole System</li>
                            <li>Traditional</li>
                        </ul>
                        {/* <p className="description">
                            For 40 years window cleaning has been our main area of expertise.
                            We're highly experienced and flexible enough to meet any of your cleaning needs.
                        </p> */}
                    </div>
                </Fade>
                <Fade duration={3000}>
                    <div className="service">
                        <img src={jet} alt="" />
                        <h2>Pressure Washing</h2>
                            <ul>
                                <li>Patios and Driveways</li>
                                <li>Paths and Walkways</li>
                                <li>Conservatories</li>
                                <li>Any uPVC</li>
                            </ul>
                        {/* <p className="description">
                                Domestic or Commerical; with our high-powered Jet washer
                                we've been getting great results for years.
                        </p> */}
                    </div>
                </Fade>
                <Fade duration={3000}>
                    <div className="service">
                        <img src={gut} alt="" />
                        <h2>Guttering/uPVC</h2>
                        <ul>
                            <li>Guttering - Empty and Clean</li>
                            <li>Fascias and Soffits</li>
                            <li>Gutter Protection</li>
                            <li>Small Repairs</li>
                        </ul>
                        {/* <p className="description">
                                Using our specialist gutter vacuum system and long-reach jet washer we're
                                confident we can give new life to your uPVC.
                        </p> */}
                    </div>
                </Fade>
                {/* <Fade duration={3000}>
                    <div className="service">
                        <h2>Our Promise</h2>
                        <div className="promise">
                            <p>40 Years in business</p>
                            <img src={icon40} alt=""/>
                        </div>
                        <div className="promise">
                            <p>Fully Insured</p>
                            <img src={insured} alt=""/>
                        </div>
                        <div className="promise">
                            <p>Professional and Experienced Staff</p>
                            <img src={staff} alt=""/>
                        </div>
                        <div className="promise">
                            <p>Competitive Prices</p>
                            <img src={prices} alt=""/>
                        </div>
                    </div>
                </Fade> */}
            </div>
        </div>
    </section>
);

export { Services };