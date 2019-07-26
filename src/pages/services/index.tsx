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
        <Fade duration={3000}><h1>services2</h1></Fade>
    </section>
);

export { Services };