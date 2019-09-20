import React from "react";
import { Route, Link } from "react-router-dom";

const RosePinkLayout = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={matchProps => (
				<div className="w-full h-full bg-pink-rose">
					<div className="flex flex-col h-full container px-2 sm:py-12">
						<div className="flex w-full items-center py-3 mb-4">
							<Link className="bg-pink-rose py-2 px-3 mw-full" to="/about">
								<h1 className="text-3xl text-white italic text-shadow-fancy hover:text-white">
									lentra
								</h1>
							</Link>
						</div>
						<div className=" h-full flex items-center justify- center">
							<Component {...matchProps} />
						</div>
					</div>
				</div>
			)}
		/>
	);
};

export default RosePinkLayout;
