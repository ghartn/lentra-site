import React from "react";
import { Link } from "react-router-dom";

const MusicPage = () => {
  return (
    <div>
      <section>
        <div className="row">
          <div className="six columns">
            <iframe
              title="lentra - crybaby (soundcloud)"
              width="100%"
              height="300"
              scrolling="no"
              frameBorder="no"
              seamless
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/460184688&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            />
          </div>
          <div className="six columns">
            <iframe
              title="lentra - crybaby (bandcamp)"
              frameBorder="no"
              width="100%"
              height="300"
              src="https://bandcamp.com/EmbeddedPlayer/album=2284893814/size=large/bgcol=ffffff/linkcol=333333/minimal=true/transparent=true/"
              seamless
            />
          </div>
        </div>
      </section>
      <section>
        <div className="row">
          <div className="six columns">
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
          <div className="six columns" />
        </div>
      </section>
    </div>
  );
};

export default MusicPage;
