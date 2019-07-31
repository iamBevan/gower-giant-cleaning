import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Navbar: React.SFC<{}> = () => (
    <>
        <header>
            <div className="nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/prices">Prices</Link></li>

                </ul>
            </div>
        </header>
    </>
);

export { Navbar };