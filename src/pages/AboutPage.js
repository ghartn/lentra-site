import React from "react";
import { Link } from "react-router-dom";
import instagram from "../img/icons/instagram-w.svg";
import twitter from "../img/icons/twitter-w.svg";
import soundcloud from "../img/icons/soundcloud-w.svg";
import youtube from "../img/icons/youtube-w.svg";
import spotify from "../img/icons/spotify-w.svg";
import twitch from "../img/icons/twitch-w.svg";

const AboutPage = () => {
	return (
		<section>
			<h1 className="mb-8 text-3xl">hello</h1>
			<div className="w-full md:w-2/3 pr-8">
				<p className="pb-4">
					my name is lentra. i produce music for other people and also sing and
					stuff. this is my job now. i would appreciate if u would check out my music or whatever.
				</p>
				<p className="pb-8">
					i've been doing this for like 8 years i think.{" "}
					<Link to="/contact">
						click this if you want to send me a message.
					</Link>{" "}
					also,{" "}
					<Link to="/cool">
						click this if you want to get emails with updates and cool stuff or
						whatever.
					</Link>{" "}
					i'm not gonna spam. i promise. also if you followed me on anything i
					would very much appreciate it. you don't have to though.
					but if you don't follow i might starve and die. something to think
					about
				</p>
				<div className="flex">
					<a
						className="mr-6"
						href="https://instagram.com/lentralentra"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={instagram} alt="instagram" height={40} width={40} />
					</a>
					<a
						className="mr-6"
						href="https://twitter.com/lentralentra"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={twitter} alt="twitter" height={40} width={40} />
					</a>
					<a
						className="mr-6"
						href="https://open.spotify.com/artist/484bfoveqgHfx2VhNY4zzT"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={spotify} alt="spotify" height={40} width={40} />
					</a>
					<a
						className="mr-6"
						href="https://soundcloud.com/lentra"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={soundcloud} alt="soundcloud" height={40} width={40} />
					</a>
					<a
						className="mr-6"
						href="https://www.youtube.com/c/lentra"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={youtube} alt="youtube" height={40} width={40}/>
					</a>
					<a
						href="https://twitch.com/lentra"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={twitch} alt="twitch" height={40} width={40} />
					</a>
				</div>
			</div>
		</section>
	);
};

export default AboutPage;
