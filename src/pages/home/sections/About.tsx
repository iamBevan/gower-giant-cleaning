import * as React from 'react';
import Fade from 'react-reveal/Fade';
import './styles/about.scss';

const About: React.SFC<{}> = () => (
    <section className="about-section">
        <div className="about-container">
            <Fade duration={3000}><h1>About Us</h1></Fade>
            <Fade duration={3000}>
                <p>
                    We're a small family run business that has operated in the Gower
                    area for the past 40 years.
                    In 1980 Alan founded the business with a small group of loyal customers, some
                    of whom still remain today. He went on to specialise in window cleaning and guttering
                    for the next 30 years.
                    in 2010 Julian started with his father since they have expanded the business adding
                    customers and services such as jet washing and fascia cleaning.
                </p>
            </Fade>
        </div>
        <div className="about-container">
            <Fade duration={3000}><img src="https://i.imgur.com/v8CHSQn.png" alt=""/></Fade>
        </div>
    </section>
);

export { About };