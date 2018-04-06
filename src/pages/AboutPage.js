import React from "react";
import lentra2 from "../img/lentra2.png";

const AboutPage = () => {
  return (
    <div className="row">
      <div className="eight columns">
        <h1>about</h1>
        <p>
          lentra is a music producer who has been producing for local and global
          artists for four years. he initially began making music in 2013,
          taking it more seriously in the following summers and began
          collaborating heavily with{" "}
          <a
            href="https://soundcloud.com/braxtoncrosby/sets/almost-asleep"
            target="_blank"
          >
            {" "}
            north carolina rapper crosby.
          </a>
        </p>
        <p>
          lentra has been experimenting with different musical styles, often
          changing genres entirely as exemplified by his latest ep,{" "}
          <i>
            <a href="https://song.link/album/us/i/1348674455" target="_blank">
              crybaby
            </a>
          </i>, a lo-fi, pop, r&b record where lentra first showcases some
          singing prowess.
        </p>
        <p>
          lentra is also really good at super smash bros melee for the nintendo
          gamecube, lately has been doing quite poorly playing fortnite, and is
          deeply passionate about leftist politics and the push for social
          equality and justice. he is very confused about what to do with his
          life despite being about to graduate with a degree in computer
          engineering from ubc.
        </p>
      </div>
      <div className="four columns">
        <img src={lentra2} />
      </div>
    </div>
  );
};

export default AboutPage;
