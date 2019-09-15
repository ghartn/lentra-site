import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
	return (
		<div className="flex flex-col w-full text-center items-center justify-center">
			<a
				className="mb-8 text-6xl text-white italic text-shadow-fancy-xl hover:text-white"
				href="https://ffm.to/rosepink"
				target="_blank"
				rel="noopener noreferrer"
			>
				rose pink ep out now
			</a>
			<iframe
				className="mb-6"
				title="stream rose pink"
				src="https://open.spotify.com/embed/album/4Ft0ZRuhKoRUpAjkwvRTT1"
				width="360"
				height="80"
				frameborder="0"
				allowtransparency="true"
				allow="encrypted-media"
			></iframe>
			<Link
				to="/music"
				className="text-xl italic text-white hover:underline hover:text-white"
			>
				enter site
			</Link>
		</div>
	);
};

export default LandingPage;
