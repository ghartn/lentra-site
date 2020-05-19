import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
	return (
		<div className="flex flex-col w-full text-center items-center justify-center">
			<p>hello. i am lentra. i am not sure what to put here.</p>
			<Link to="/music" className="text-xl italic hover:underline">
				enter site
			</Link>
		</div>
	);
};

export default HomePage;
