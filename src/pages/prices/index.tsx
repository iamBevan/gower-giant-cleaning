import * as React from 'react';
import Fade from 'react-reveal/Fade';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./_prices.scss";
import Media from 'react-media';
import { MobileComponent } from './MobileComponent';

const WindowsTable: React.FC<{}> = () => (
    <table className="center">
        <tr>
            <th>Property type</th>
            <th>Six-week cycle</th>
            <th>Conservatory</th>
            <th>Porch / Extension</th>
            <th>Inside windows</th>
            <th>One-off clean</th>
        </tr>
        <tr>
            <td style={{ textAlign: 'left' }}>Bungalow</td>
            <td>£12.00</td>
            <td>£3.00</td>
            <td>£4.00</td>
            <td>-</td>
            <td>£20.00</td>
        </tr>
        <tr>
            <td style={{ textAlign: 'left' }}>2 bed Semi Detached</td>
            <td>£12.00</td>
            <td>£3.00</td>
            <td>£2.00</td>
            <td>-</td>
            <td>£20.00</td>
        </tr>
        <tr>
            <td style={{ textAlign: 'left' }}>3 bed Semi Detached</td>
            <td>£14.00</td>
            <td>£4.00</td>
            <td>£3.00</td>
            <td>-</td>
            <td>£22.00</td>
        </tr>
        <tr>
            <td style={{ textAlign: 'left' }}>4 bed Semi Detached</td>
            <td>£16.00</td>
            <td>£4.00</td>
            <td>£3.00</td>
            <td>-</td>
            <td>£24.00</td>
        </tr>
        <tr>
            <td style={{ textAlign: 'left' }}>4 bed Detached</td>
            <td>£17.00</td>
            <td>£4.00</td>
            <td>£3.00</td>
            <td>-</td>
            <td>£25.00</td>
        </tr>
        <tr>
            <td style={{ textAlign: 'left' }}>5 bed Semi Detached</td>
            <td>£18.00</td>
            <td>£5.00</td>
            <td>£4.00</td>
            <td>-</td>
            <td>£26.00</td>
        </tr>
        <tr>
            <td style={{ textAlign: 'left' }}>5 bed Detached</td>
            <td>£19.00</td>
            <td>£5.00</td>
            <td>£4.00</td>
            <td>-</td>
            <td>£27.00</td>
        </tr>
    </table>
)

const JetWash: React.FC<{}> = () => (
    <div style={{ paddingTop: '150px', fontSize: '50px', fontWeight: 300}}>
        Please contact Julian on <span style={{ fontWeight: 700, fontSize: '52px' }}>07843 227062</span>
    </div>
)

const Guttering: React.FC<{}> = () => (
    <>
        <div style={{ paddingTop: '150px', fontSize: '50px', fontWeight: 300}}>
        Please contact Julian on <span style={{ fontWeight: 700, fontSize: '52px' }}>07843 227062</span>
    </div>
    </>
)

const Prices: React.SFC<{}> = () => (
    <section className="prices-section">
        <Fade duration={3000}><h1 className="services-heading">Prices</h1></Fade>

        <div>
            <Media query="(max-width: 599px)">
                {matches =>
                    matches ? (
                        <MobileComponent />
                    ) : (
                            <div className="table-container">
                                <Tabs>
                                    <TabList>
                                        <Tab>Windows</Tab>
                                        <Tab>Pressure Washing</Tab>
                                        <Tab>Guttering</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <WindowsTable />
                                    </TabPanel>
                                    <TabPanel>
                                        <JetWash />
                                    </TabPanel>
                                    <TabPanel>
                                        <Guttering />
                                    </TabPanel>

                                </Tabs>
                            </div>
                        )
                }
            </Media>
        </div>
    </section>
);

export { Prices };