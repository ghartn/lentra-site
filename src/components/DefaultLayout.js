import React from "react";
import { Route } from "react-router-dom";
import Navigation from "./Navigation";
import Header from "./Header";

const DefaultLayout = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={matchProps => (
				<div className="container sm:py-12 px-2 leading-normal">
					<Header {...rest} />
					<div className="flex flex-col sm:flex-row">
						<div className="w-1/6">
							<Navigation {...rest} />
						</div>
						<div className="w-5/6">
							<Component {...matchProps} />
						</div>
					</div>
				</div>
			)}
		/>
	);
};

export default DefaultLayout;
