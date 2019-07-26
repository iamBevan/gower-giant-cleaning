import * as React from 'react';
import Fade from 'react-reveal/Fade';
import './styles/contact.scss';

const Contact: React.FC<{}> = () => (
    <section
        style={{
            borderTop: "solid #072030 1px",
            backgroundColor: "#072030",
            color: "#ffffff",
            padding: '50px 0 0 0'
        }}
    >

        <Fade duration={3000}><h1 className="contact-heading">Contact</h1></Fade>
        <div className="contact-container">
            <Fade duration={3000}>
                <div className="contact">
                    <h2>Gower Giant Cleaning</h2>
                    <ul>
                        <li>Address: <span className="contact-span">Hareslade, Bishopston, Swansea</span></li>
                        <li>Telephone: <span className="contact-span">01792 112224</span></li>
                        <li>Email: <span className="contact-span">contact@gowergiantcleaning.co.uk</span></li>
                        <li> Instagram</li>
                    </ul>
                </div>
            </Fade>
            <Fade duration={3000}>
                <div className="contact">
                    <h2>Send us a message</h2>
                    <div className="message">
                        <p>Name</p>
                        <input type="text" name="search" placeholder="Search.." />
                        <p>Company Name</p>
                        <input type="text" name="search" placeholder="Search.." />
                        <p>Telephone</p>
                        <input type="text" name="search" placeholder="Search.." />
                        <p>Message</p>
                        <form>
                            <textarea>...</textarea>
                        </form>
                    </div>
                </div>
            </Fade>
        </div>
    </section>
);

export { Contact };