import React from "react";

const MediaPage = () => {
  return (
    <div>
      <h1>media</h1>
      <div className="row">
        <div className="six columns">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/oXiZjSRI9ug?rel=0"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          />
        </div>
        <div className="six columns">
          <iframe
            width="100%"
            height="315"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/425830536%3Fsecret_token%3Ds-SaQbe&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          />
        </div>
      </div>
      <div className="row">
        <div className="six columns">
          <iframe
            src="https://www.ustream.tv/embed/recorded/113790450?html5ui"
            style={{ border: "0 none transparent" }}
            webkitallowfullscreen
            allowfullscreen
            frameborder="no"
            width="100%"
            height="315"
          />
        </div>
        <div className="six columns">
          <iframe
            width="100%"
            height="315"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/425835879%3Fsecret_token%3Ds-Avuyb&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          />
        </div>
      </div>
    </div>
  );
};

export default MediaPage;
