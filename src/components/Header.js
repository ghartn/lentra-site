import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = ({ ...rest }) => {
	return (
		<div className="flex w-full items-center py-3 mb-4 items-center">
			<Link
				className="bg-pink-rose sm:py-2 sm:px-3 py-1 px-2 mw-full sm:mr-6 mr-2"
				to="/"
			>
				<h1 className="sm:text-3xl text-xl text-white italic text-shadow-fancy hover:text-white">
					lentra
				</h1>
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
				<li className="sm:mr-6 mr-2">
					<a href="https://bbnomula.com/tour">tour</a>		
				</li>
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
