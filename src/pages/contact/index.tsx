import * as React from 'react';
import Fade from 'react-reveal/Fade';

const Contact: React.SFC<{}> = () => (
    <section>
        <Fade duration={3000}><h1 className="services-heading">Contact</h1></Fade>
    </section>
);

export { Contact };