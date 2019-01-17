import React from "react";
import crybaby1 from "../img/crybaby1.png";

const MusicPage = () => {
	return (
		<div>
			<h1 className="mb-8">some music i have made and produced</h1>
			<section>
				<div className="flex flex-row">
					<div className="w-full md:w-1/2 p-2">
						<iframe
							title="bbno$ - jurassic (feat. trippythakid) prod. lentra"
							width="100%"
							height="300"
							scrolling="no"
							frameBorder="no"
							seamless
							allow="autoplay"
							src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/554172675&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
						/>
					</div>
					<div className="w-full md:w-1/2 p-2">
						<iframe
							title="crosby - almost asleep (featuring lentra production)"
							frameBorder="no"
							width="100%"
							height="300"
							src="https://bandcamp.com/EmbeddedPlayer/album=3477142759/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
							seamless
						/>
					</div>
				</div>
			</section>
			<section>
				<div className="row">
					<div className="w-full p-2">
						<iframe
							title="lentra - crybaby (spotify)"
							src="https://open.spotify.com/embed?uri=spotify:album:43tJdqXFYZCOwru60bA14m&theme=white&view=coverart"
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
