import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="flex w-full items-center py-3 mb-4">
			<Link className="bg-pink-rose py-2 px-3 mw-full" to="/">
				<h1 className="text-3xl text-white italic text-shadow-fancy hover:text-white">
					lentra
				</h1>
			</Link>
		</div>
	);
};

export default Header;
