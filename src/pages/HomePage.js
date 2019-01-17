import React from "react";
import { Link } from "react-router-dom";
import lentra2 from "../img/lentra2.png";
import Quote from "../components/Quote";

const HomePage = () => {
  return (
    <div>
      <section>
        <div className="row">
          <div className="four columns">
            <img src={lentra2} alt="lentra" />
          </div>
          <div className="eight columns">
            <h1>lentra</h1>
            <h2>aka, garrett hartnell</h2>
            <h3>music producer?</h3>
          </div>
        </div>
      </section>
      <section>
        <h3>some music?</h3>
        <iframe
          frameBorder="no"
          width="100%"
          src="https://bandcamp.com/EmbeddedPlayer/album=2284893814/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/artwork=small/transparent=true/"
          seamless
        >
          <a href="http://lentra.bandcamp.com/album/crybaby">
            crybaby by lentra
          </a>
        </iframe>
      </section>
      <section>
        <h3>upcoming performances</h3>
        <p>lentra has no recent or upcoming performances :(</p>
        <p>
          <Link to="/contact">you should book him!</Link>
        </p>
      </section>
    </div>
  );
};

export default HomePage;
