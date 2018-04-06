import React from "react";
import { Route } from "react-router-dom";
import Navigation from "./Navigation";
import Header from "./Header";

const DefaultLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <div className="main container">
          <Header {...rest} />
          <div className="row">
            <div className="two columns">
              <Navigation {...rest} />
            </div>
            <div className="ten columns">
              <Component {...matchProps} />
            </div>
          </div>
        </div>
      )}
    />
  );
};

export default DefaultLayout;
