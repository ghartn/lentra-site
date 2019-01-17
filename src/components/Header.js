import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";

const Header = () => {
	return (
		<div className="flex w-full">
			<Link className="mw-full mb-6" to="/">
				<img src={logo} alt="lentra-logo" />
			</Link>
		</div>
	);
};

export default Header;
