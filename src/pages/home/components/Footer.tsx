import * as React from 'react';

const Footer: React.SFC<{}> = () => (
    <footer style={{ borderTop: "solid #072030 1px", borderBottom: "solid #072030 1px" }}>
        <div className="footer-cont">
            <h2>Links</h2>
            <ul>
                <li>Home</li>
                <li>Services</li>
                <li>Prices</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className="footer-cont">
            <h2>Contact</h2>
            <ul>
                <li>Julian Jones</li>
                <li>07843 227062</li>
            </ul>
        </div>
        <div className="footer-cont">
            <h2>About</h2>
            <p>
                We're a small family run business that has served the Gower
                area for the past 40 years
            </p>
        </div>
    </footer>
);

export { Footer };