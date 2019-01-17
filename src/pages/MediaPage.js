import React from "react";

const MediaPage = () => {
  return (
    <div>
      <h1>media</h1>
      <div className="row">
        <div className="six columns">
          <iframe
            title="lentra - crybaby performance (MUSC119)"
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/oXiZjSRI9ug?rel=0"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
        <div className="six columns">
          <iframe
            title="MUSC 119 Podcast"
            width="100%"
            height="315"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/432279651%3Fsecret_token%3Ds-Jfr7G&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          />
        </div>
      </div>
      <div className="row">
        <div className="six columns">
          <iframe
            title="Ustream placeholder"
            src="http://www.ustream.tv/embed/recorded/113790450?html5ui"
            allowFullScreen
            frameBorder="no"
            width="100%"
            height="315"
          />
        </div>
        <div className="six columns">
          <iframe
            title="MUSC 119 Personal Melody"
            width="100%"
            height="315"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/425835879%3Fsecret_token%3Ds-Avuyb&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          />
        </div>
      </div>
      <a
        href="http://www.ustream.tv/recorded/113790450"
        target="_blank"
        rel="noopener noreferrer"
      >
        if the ustream video doesn't work, try clicking here!{" "}
      </a>
    </div>
  );
};

export default MediaPage;
