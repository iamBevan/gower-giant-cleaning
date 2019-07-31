import React from 'react';
import './styles/main.scss';
import { Navbar } from './components/Navbar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from './pages/home/';
import { Services } from './pages/services';
import { Prices } from './pages/prices';
import { Contact } from './pages/contact';
import { Footer } from './components/Footer';



class App extends React.Component<{}> {

	render() {
		return (
			<Router>
				<Navbar />
				<Route path="/" exact component={Home} />
				<Route path="/services" component={Services} />
				<Route path="/prices" component={Prices} />
				<Route path="/contact" component={Contact} />
				<Footer />
			</Router>
		);
	}
}

export default App;
