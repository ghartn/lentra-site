import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import DefaultLayout from "./components/DefaultLayout";
import RosePinkLayout from "./components/RosePinkLayout";
import LandingPage from "./pages/LandingPage";
import MusicPage from "./pages/MusicPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

class App extends Component {
	render() {
		return (
			<Router basename={process.env.PUBLIC_URL}>
				<Switch>
					<RosePinkLayout path="/" exact component={LandingPage} />
					<DefaultLayout path="/music" component={MusicPage} />
					<DefaultLayout path="/about" component={AboutPage} />
					<DefaultLayout path="/contact" component={ContactPage} />
				</Switch>
			</Router>
		);
	}
}

export default App;
