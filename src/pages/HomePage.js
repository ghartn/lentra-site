import React from "react";
import { Link } from "react-router-dom";
import lol from "../img/lol.png";

const HomePage = () => {
	return (
		<div>
			<section>
				<div className="flex items-center mb-16">
					<img src={lol} alt="lol" />
					<h1>sorry bucko, better luck next time</h1>
					<img src={lol} alt="lol" />
				</div>
			</section>
			<section>
				<a
					className="block text-lg mb-4"
					href="https://open.spotify.com/artist/484bfoveqgHfx2VhNY4zzT?si=Y-gb9KzzQ2-8YY735MC4jQ"
				>
					but please listen to my spotify i am starving
				</a>
				<iframe
					src="https://open.spotify.com/embed/track/518Z1SAUGu17k0CQ67M9iK"
					width="100%"
					height="150"
					frameborder="0"
					allowtransparency="true"
					allow="encrypted-media"
				/>
			</section>
		</div>
	);
};

export default HomePage;
