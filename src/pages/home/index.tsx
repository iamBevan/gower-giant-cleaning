import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import { Services } from './sections/Services';
import { Contact } from './sections/Contact';
import { About } from './sections/About';

import logoMain from './assets/images/logo.svg';

import './home.scss';

const LandingLogo: React.SFC<{}> = () => (
    <>
        <div className="bgimg-1">
            <img src={logoMain} alt=""/>
            {/* <h1>Gower Giant Cleaning</h1>
            <h2>Established 1980</h2> */}
        </div>
        
    </>
);

class Home extends React.Component<{}> {
    render() {
        return (
            <Router>
                {/* {alert(process.env.REACT_APP_TEST)} */}
                <LandingLogo />
                <Services />
                <About />
                <Contact />
            </Router>
        );
    }
}

export { Home, LandingLogo };
