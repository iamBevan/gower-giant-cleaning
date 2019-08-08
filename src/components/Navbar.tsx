import * as React from 'react';
import { Link } from "react-router-dom";
import logo from './assets/logo.svg';

const Navbar: React.SFC<{}> = () => (
    <>
        <header>
            <nav>
                {/* <li><div className="nav-logo">&nbsp;</div></li> */}
                <Link to="/"><div>Home</div></Link>
                <Link to="/services"><div>Services</div></Link>
                <Link to="/contact"><div>Contact</div></Link>
                <Link to="/prices"><div>Prices</div></Link>
            </nav>
        </header>
    </>
);

export { Navbar };