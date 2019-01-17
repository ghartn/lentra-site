import React from "react";
import lentra3 from "../img/lentra3.png";

const AboutPage = () => {
	return (
		<section>
			<h1 className="mb-8">about</h1>
			<div className="flex flex-row">
				<div className="w-full md:w-2/3 pr-8">
					<p className="pb-4">
						lentra is a music producer who has been producing for local and
						global artists for four years. he initially began making music in
						2013, taking it more seriously in the following summers and began
						collaborating heavily with{" "}
						<a
							href="https://soundcloud.com/braxtoncrosby/sets/almost-asleep"
							target="_blank"
							rel="noopener noreferrer"
						>
							{" "}
							north carolina rapper crosby.
						</a>
					</p>
					<p className="pb-4">
						lentra has been experimenting with different musical styles, often
						changing genres entirely as exemplified by his latest ep,{" "}
						<i>
							<a
								href="https://song.link/album/us/i/1348674455"
								target="_blank"
								rel="noopener noreferrer"
							>
								crybaby
							</a>
						</i>
						, a lo-fi, pop, r&b record where lentra first showcases some singing
						prowess.
					</p>
					<p className="pb-4">
						lentra is also really good at super smash bros melee for the
						nintendo gamecube, lately has been doing quite poorly playing
						fortnite, and is deeply passionate about leftist politics and the
						push for social equality and justice. he is very confused about what
						to do with his life despite being about to graduate with a degree in
						computer engineering from ubc.
					</p>
				</div>
				<div className="w-full md:w-1/3">
					<img src={lentra3} alt="lentra" />
				</div>
			</div>
		</section>
	);
};

export default AboutPage;
