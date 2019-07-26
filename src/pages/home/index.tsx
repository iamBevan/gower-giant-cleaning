import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import { Services } from './sections/Services';
import { Contact } from './sections/Contact';
import { About } from './sections/About';

import './styles.scss';

const Landing: React.SFC<{}> = () => (
    <>
        <div className="bgimg-1" id="landing-page"></div>
    </>
);

class Home extends React.Component<{}> {
    render() {
        return (
            <Router>
                <Landing />
                <Services />
                <About />
                <Contact />
            </Router>
        );
    }
}

export { Home };
