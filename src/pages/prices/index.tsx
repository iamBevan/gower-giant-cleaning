import * as React from 'react';
import Fade from 'react-reveal/Fade';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./_prices.scss";

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
            <td>Bungalow</td>
            <td>£12.00</td>
            <td>£3.00</td>
            <td>£4.00</td>
            <td>-</td>
            <td>£20.00</td>
        </tr>
        <tr>
            <td>2 bed Semi Detached</td>
            <td>£12.00</td>
            <td>£3.00</td>
            <td>£2.00</td>
            <td>-</td>
            <td>£20.00</td>
        </tr>
        <tr>
            <td>3 bed Semi Detached</td>
            <td>£14.00</td>
            <td>£4.00</td>
            <td>£3.00</td>
            <td>-</td>
            <td>£22.00</td>
        </tr>
        <tr>
            <td>4 bed Semi Detached</td>
            <td>£16.00</td>
            <td>£4.00</td>
            <td>£3.00</td>
            <td>-</td>
            <td>£24.00</td>
        </tr>
        <tr>
            <td>4 bed Detached</td>
            <td>£17.00</td>
            <td>£4.00</td>
            <td>£3.00</td>
            <td>-</td>
            <td>£25.00</td>
        </tr>
        <tr>
            <td>5 bed Semi Detached</td>
            <td>£18.00</td>
            <td>£5.00</td>
            <td>£4.00</td>
            <td>-</td>
            <td>£26.00</td>
        </tr>
        <tr>
            <td>5 bed Detached</td>
            <td>£19.00</td>
            <td>£5.00</td>
            <td>£4.00</td>
            <td>-</td>
            <td>£27.00</td>
        </tr>
    </table>
)

const JetWashTable: React.FC<{}> = () => (
    <table className="center">
        <tr>
            <th>Property type1</th>
            <th>Six-week cycle</th>
            <th>Conservatory</th>
            <th>Porch / Extension</th>
            <th>Inside windows</th>
            <th>One-off clean</th>
        </tr>
        <tr>
            <td>Bungalow</td>
            <td>£12.00</td>
            <td>£3.00</td>
            <td>£4.00</td>
            <td>-</td>
            <td>£20.00</td>
        </tr>
        <tr>
            <td>2 bed Semi Detached</td>
            <td>£12.00</td>
            <td>£3.00</td>
            <td>£2.00</td>
            <td>-</td>
            <td>£20.00</td>
        </tr>
        <tr>
            <td>3 bed Semi Detached</td>
            <td>£14.00</td>
            <td>£4.00</td>
            <td>£3.00</td>
            <td>-</td>
            <td>£22.00</td>
        </tr>
        <tr>
            <td>4 bed Semi Detached</td>
            <td>£16.00</td>
            <td>£4.00</td>
            <td>£3.00</td>
            <td>-</td>
            <td>£24.00</td>
        </tr>
        <tr>
            <td>4 bed Detached</td>
            <td>£17.00</td>
            <td>£4.00</td>
            <td>£3.00</td>
            <td>-</td>
            <td>£25.00</td>
        </tr>
        <tr>
            <td>5 bed Semi Detached</td>
            <td>£18.00</td>
            <td>£5.00</td>
            <td>£4.00</td>
            <td>-</td>
            <td>£26.00</td>
        </tr>
        <tr>
            <td>5 bed Detached</td>
            <td>£19.00</td>
            <td>£5.00</td>
            <td>£4.00</td>
            <td>-</td>
            <td>£27.00</td>
        </tr>
    </table>
)

const GutteringTable: React.FC<{}> = () => (
    <table className="center">
        <tr>
            <th>Property type2</th>
            <th>Six-week cycle</th>
            <th>Conservatory</th>
            <th>Porch / Extension</th>
            <th>Inside windows</th>
            <th>One-off clean</th>
        </tr>
        <tr>
            <td>Bungalow</td>
            <td>£12.00</td>
            <td>£3.00</td>
            <td>£4.00</td>
            <td>-</td>
            <td>£20.00</td>
        </tr>
        <tr>
            <td>2 bed Semi Detached</td>
            <td>£12.00</td>
            <td>£3.00</td>
            <td>£2.00</td>
            <td>-</td>
            <td>£20.00</td>
        </tr>
        <tr>
            <td>3 bed Semi Detached</td>
            <td>£14.00</td>
            <td>£4.00</td>
            <td>£3.00</td>
            <td>-</td>
            <td>£22.00</td>
        </tr>
        <tr>
            <td>4 bed Semi Detached</td>
            <td>£16.00</td>
            <td>£4.00</td>
            <td>£3.00</td>
            <td>-</td>
            <td>£24.00</td>
        </tr>
        <tr>
            <td>4 bed Detached</td>
            <td>£17.00</td>
            <td>£4.00</td>
            <td>£3.00</td>
            <td>-</td>
            <td>£25.00</td>
        </tr>
        <tr>
            <td>5 bed Semi Detached</td>
            <td>£18.00</td>
            <td>£5.00</td>
            <td>£4.00</td>
            <td>-</td>
            <td>£26.00</td>
        </tr>
        <tr>
            <td>5 bed Detached</td>
            <td>£19.00</td>
            <td>£5.00</td>
            <td>£4.00</td>
            <td>-</td>
            <td>£27.00</td>
        </tr>
    </table>
)

const Prices: React.SFC<{}> = () => (
    <section className="prices-section">
        <Fade duration={3000}><h1 className="services-heading">Prices</h1></Fade>
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
                    <JetWashTable />
                </TabPanel>
                <TabPanel>
                    <GutteringTable />
                </TabPanel>
                
            </Tabs>
        </div>
    </section>
);

export { Prices };