import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MusicPage from "./pages/MusicPage";
import ContactPage from "./pages/ContactPage";

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <DefaultLayout path="/" exact component={HomePage} />
          <DefaultLayout path="/about" component={AboutPage} />
          <DefaultLayout path="/music" component={MusicPage} />
          <DefaultLayout path="/contact" component={ContactPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
