import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = props => {
	return (
		<div className="w-full">
			<ul className="flex flex-row sm:flex-col md:block list-reset w-full text-lg">
				<li className="block mr-4 sm:mr-0 mb-4">
					<NavLink
						to="/about"
						className="no-underline"
						activeClassName="font-bold"
					>
						about
					</NavLink>
				</li>
				<li className="block mr-4 sm:mr-0 mb-4">
					<NavLink
						to="/music"
						className="no-underline"
						activeClassName="font-bold"
					>
						music
					</NavLink>
				</li>
				<li className="block mr-4 sm:mr-0 mb-4">
					<NavLink
						to="/contact"
						className="no-underline"
						activeClassName="font-bold"
					>
						contact
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Navigation;
