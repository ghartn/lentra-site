import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../img/logo.png"

const Header = ({ ...rest }) => {
	return (
		<div className="flex w-full items-center py-3 mb-4 items-center">
			<Link
				className="sm:py-2 py-1 mw-full sm:mr-6 mr-2"
				to="/"
			>
				<img src={logo} alt="lentra logo" className="block"/>
			</Link>
			<ul className="flex flex-row list-reset w-full text-lg">
				<li className="sm:mr-6 mr-2">
					<NavLink
						to="/music"
						className="no-underline"
						activeClassName="font-bold"
					>
						music
					</NavLink>
				</li>
				{/* <li className="sm:mr-6 mr-2">
					<a href="https://bbnomula.com/tour">tour</a>		
				</li> */}
				<li className="sm:mr-6 mr-2">
					<NavLink
						to="/cool"
						className="no-underline"
						activeClassName="font-bold"
					>
						mail-list
					</NavLink>
				</li>
				<li className="sm:mr-6 mr-2">
					<a href="https://shop.lentra.ca">shop</a>		
				</li>
				<li className="sm:mr-6 mr-2">
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

export default Header;
