import React from "react";

const MusicPage = () => {
	return (
		<div>
			<h1 className="mb-8 text-3xl">
				here is some music i made and/or produced
			</h1>
			<section>
				<div className="flex flex-row">
					<div className="w-full md:w-1/2 p-2">
						<iframe
							src="https://open.spotify.com/embed/album/3G58XAePSb7GQ9G62f2qXx"
							title="ceo@business.net - incentivize unpaid overtime"
							width="100%"
							height="300"
							scrolling="no"
							frameBorder="no"
							seamless
							allow="autoplay"
						></iframe>
					</div>
					<div className="w-full md:w-1/2 p-2">
						<iframe
							title="lentra - static"
							src="https://open.spotify.com/embed/album/2S8qD31pccKjn1PREHhYOj"
							width="100%"
							height="300"
							frameBorder="no"
							allowTransparency="true"
							allow="encrypted-media"
						></iframe>
					</div>
				</div>
			</section>
			<section>
				<div className="row">
					<div className="w-full p-2">
						<iframe
							title="bbno$ + lentra"
							src="https://open.spotify.com/embed/playlist/1vt5C4DOrGtbN370U6oGpl"
							width="100%"
							height="300"
							frameBorder="no"
							allowTransparency="true"
							allow="encrypted-media"
							seamless
						/>
					</div>
				</div>
			</section>
		</div>
	);
};

export default MusicPage;
