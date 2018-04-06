import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MediaPage from "./pages/MediaPage";
import PressPage from "./pages/PressPage";
import ContactPage from "./pages/ContactPage";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <DefaultLayout path="/" exact component={HomePage} />
          <DefaultLayout path="/about" component={AboutPage} />
          <DefaultLayout path="/media" component={MediaPage} />
          <DefaultLayout path="/press" component={PressPage} />
          <DefaultLayout path="/contact" component={ContactPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
