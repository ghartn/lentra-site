import React from "react";

const MusicPage = () => {
	return (
		<div>
			<h1 className="mb-8 text-3xl">
				hello, here is some music i made and/or produced
			</h1>
			<section>
				<div className="flex flex-row">
					<div className="w-full md:w-1/2 p-2">
						<iframe
							title="bbno$ - sriracha prod. lentra (soundcloud)"
							width="100%"
							height="300"
							scrolling="no"
							frameBorder="no"
							seamless
							allow="autoplay"
							src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/608481888&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
						/>
					</div>
					<div className="w-full md:w-1/2 p-2">
						<iframe
							title="lentra - wah wah wah (spotify)"
							src="https://open.spotify.com/embed/album/142QPfqExNu8Z0e59PVtVn"
							width="100%"
							height="300"
							frameborder="no"
							allowtransparency="true"
							allow="encrypted-media"
						></iframe>
					</div>
				</div>
			</section>
			<section>
				<div className="row">
					<div className="w-full p-2">
						<iframe
							title="lentra - rose pink (spotify)"
							src="https://open.spotify.com/embed/album/4Ft0ZRuhKoRUpAjkwvRTT1"
							width="100%"
							height="300"
							frameborder="no"
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
