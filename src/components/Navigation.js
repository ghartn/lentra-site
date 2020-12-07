import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = (props) => {
	return (
		<div className="w-full ml-4">
			<ul className="flex flex-row list-reset w-full text-lg">
				<li className="mr-4">
					<NavLink
						to="/about"
						className="no-underline"
						activeClassName="font-bold"
					>
						about
					</NavLink>
				</li>
				<li className="mr-4">
					<NavLink
						to="/music"
						className="no-underline"
						activeClassName="font-bold"
					>
						music
					</NavLink>
				</li>
				<li className="mr-4">
					<NavLink
						to="/cool"
						className="no-underline"
						activeClassName="font-bold"
					>
						sign up 4 cool stuff
					</NavLink>
				</li>
				<li className="mr-4">
					<a href="https://shop.lentra.ca">shop</a>		
				</li>
				<li className="mr-4">
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
