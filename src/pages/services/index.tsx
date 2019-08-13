import * as React from 'react';
import Fade from 'react-reveal/Fade';
import './_services.scss';
import window from '../home/assets/images/window.png';
import jet from '../home/assets/images/jet.png';
import gut from '../home/assets/images/gut.png';

const Services: React.FC<{}> = () => (
    <section>
        <div className="flex-container" style={{ color: '#072030' }}>
            <div className="description-img1">
                &nbsp;
            </div>
            <div className="description-text">
                <h2>Window Cleaning</h2>
                <ul>
                    <li>Domestic and Commercial</li>
                    <li>Exterior and Interior</li>
                    <li>40ft Water-fed Pole System</li>
                    <li>4 - 6 Week Cleaning Cycle</li>
                </ul>
                <p>
                    We've been cleaning windows in the Gower area for the past 40 years.
                    Our small experienced team currently serves hundreds of satisfied customers Mon - Fri.
                </p>

            </div>
        </div>
        <div className="flex-container" style={{ backgroundColor: '#072030', color: '#ffffff' }}>
            <div className="description-text">
                <h2>Pressure Washing</h2>
                <div className="services-list">
                    <ul>
                        <li>Patios and Driveways</li>
                        <li>Paths and Walkways</li>
                        <li>Conservatories</li>
                        <li>Any uPVC</li>
                        <li>450cc Machine with 30ft reach</li>
                    </ul>
                </div>
                <p>
                    With our high powered machine and high-reach system, we've been
                    getting incredible results for over 10 years.
                </p>

            </div>
            <div className="description-img2">
                &nbsp;
            </div>
        </div>
        <div className="flex-container" style={{ color: '#072030' }}>
            <div className="description-img3">
                &nbsp;
            </div>
            <div className="description-text">
                <h2>Guttering / uPVC</h2>
                <ul>
                    <li>Guttering - Empty and Clean</li>
                    <li>Fascias and Soffits cleaned</li>
                    <li>SkyVac High-reach System</li>
                    <li>Repairs</li>
                </ul>
                <p>
                    Regularly maintaining your guttering can extend it's life by decades. We use 
                    the latest SkyVac High-reach equipment alongside our high-reach jet washer to
                    ensure a high quality clean.
                </p>

            </div>
        </div>
    </section>
);

export { Services };