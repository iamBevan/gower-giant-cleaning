import * as React from 'react';
import Fade from 'react-reveal/Fade';

import window from '../assets/images/window.png';
import jet from '../assets/images/jet.png';
import gut from '../assets/images/gut.png';

import icon40 from '../assets/images/40Icon.png';
import insured from '../assets/images/insuredIcon.png';
import staff from '../assets/images/staffIcon.png';
import prices from '../assets/images/priceIcon.png';

import './styles/services.scss';

const Services: React.SFC<{}> = () => (
    <section
        style={{
            borderTop: "solid #072030 1px",
            backgroundColor: "#072030",
            color: "#ffffff",
            height: "100%"
        }}
    >
        <div className="services-container">
            <Fade duration={3000}><h1>Our Services</h1></Fade>
            <div>
                <div className="flex-container">
                    <Fade duration={3000}>
                        <div className="service">
                            <h2>Window Cleaning</h2>
                            <div>
                                <img src={window} alt="" />
                                <ul>
                                    <li>Domestic and Commercial</li>
                                    <li>Exterior and Interior</li>
                                    <li>Water-fed Pole System</li>
                                    <li>Traditional</li>

                                </ul>
                            </div>
                            <div className="description">
                                For 40 years window cleaning has been our main area of expertise.
                                We're highly experienced and flexible enough to meet any of your cleaning needs.
                            </div>
                            
                        </div>
                    </Fade>
                    <Fade duration={3000}>
                        <div className="service">
                            <h2>Pressure Washing</h2>
                            <img src={jet} alt="" />
                            <div>
                                <ul>
                                    <li>Patios and Driveways</li>
                                    <li>Paths and Walkways</li>
                                    <li>Conservatories</li>
                                    <li>Any uPVC</li>
                                </ul>
                            </div>
                            <div className="description">
                                    Domestic or Commerical; with our high-powered Jet washer
                                    we've been getting great results for years.
                            </div>
                        </div>
                    </Fade>
                </div>
                <div className="flex-container">
                    <Fade duration={3000}>
                        <div className="service">
                            <h2>Guttering and uPVC</h2>
                            <img src={gut} alt="" />
                            <div>
                                <ul>
                                    <li>Guttering - Empty and Clean</li>
                                    <li>Fascias and Soffits</li>
                                    <li>Gutter Protection</li>
                                    <li>Small Repairs</li>
                                </ul>
                            </div>
                            <br/>
                            <div className="description">
                                    Using our specialist gutter vacuum system and long-reach jet washer we're
                                    confident we can give new life to your uPVC.
                            </div>
                        </div>
                    </Fade>
                    <Fade duration={3000}>
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
                    </Fade>
                </div>
            </div>
        </div>
    </section>
);

export { Services };