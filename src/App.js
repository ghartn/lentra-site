import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import DefaultLayout from "./components/DefaultLayout";
import MusicPage from "./pages/MusicPage";
import AboutPage from "./pages/AboutPage";
import BreadPage from "./pages/BreadPage";
import ContactPage from "./pages/ContactPage";
import CoolPage from "./pages/CoolPage";

class App extends Component {
	render() {
		return (
			<Router basename={process.env.PUBLIC_URL}>
				<Switch>
					<DefaultLayout path="/" exact component={AboutPage} />
					<DefaultLayout path="/music" component={MusicPage} />
					<DefaultLayout path="/about" component={AboutPage} />
					<DefaultLayout path="/bread" component={BreadPage} />
					<DefaultLayout path="/cool" component={CoolPage} />
					<DefaultLayout path="/contact" component={ContactPage} />
				</Switch>
			</Router>
		);
	}
}

export default App;
