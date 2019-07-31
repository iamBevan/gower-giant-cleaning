import * as React from 'react';
import microWaves from '../assets/images/microWaves.png';
import infraRed from '../../assets/images/infraRed.png';
import energeticParticles from '../../assets/images/energeticParticles.png';
import Fade from 'react-reveal/Fade';

const Services: React.FC<{}> = () => (
    <section
        id="section2"
        style={{
            backgroundColor: "072030"
        }}
    >
        <Fade duration={3000}><h1>Services</h1></Fade>
        <h2>Window Cleaning</h2>
        <img src="https://via.placeholder.com/1000x500" alt=""/>
        <h2>Pressure Washing</h2>
        <img src="https://via.placeholder.com/1000x500" alt=""/>
        <h2>Guttering/uPVC</h2>
        <img src="https://via.placeholder.com/1000x500" alt=""/>
    </section>
);

export { Services };