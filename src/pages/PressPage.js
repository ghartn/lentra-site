import React from "react";
import lentra3 from "../img/lentra3.png";
import lentra4 from "../img/lentra4.png";
import Quote from "../components/Quote";

const PressPage = () => {
  return (
    <div>
      <h1>press</h1>
      <section className="half-width">
        <h3>headshots</h3>
        <div className="row">
          <div className="six columns">
            <img src={lentra3} alt="lentra" />
          </div>
          <div className="six columns">
            <img src={lentra4} alt="lentra" />
          </div>
        </div>
      </section>
      <section>
        <h3>more nice quotations</h3>
        <Quote
          quoteText="my son makes music, that is a thing he does"
          citeText="tina (my mom) hartnell"
        />
        <Quote
          quoteText="lentra is undeniably the goat"
          citeText="braxton (crosby) crosby"
        />
        <Quote
          quoteText="lentra is a swell guy that makes swell music"
          citeText="alex (bbno$) gumuchian"
        />
      </section>
      <section>
        <h3>bios</h3>
        <h5>75 word bio</h5>
        <p>
          lentra (garrett hartnell) is a music producer from vancouver, bc,
          canada. he has been producing for 5 years and is known for his unique
          genre-blending style of producing hip-hop and electronic music. lentra
          is best known for his work with bbno$, a rapper from vancouver, and
          his long discography of productions for north carolina rapper crosby.
          he has recently released a lo-fi pop ep <i>crybaby</i> to acclaim from
          his fans on his change of direction.
        </p>
        <h5>150 word bio</h5>
        <p>
          lentra (garrett hartnell) is a music producer from vancouver, bc,
          canada. he has been producing for 5 years and is known for his unique
          genre-blending style of producing hip-hop and electronic music. lentra
          is best known for his work with bbno$, a rapper from vancouver, and
          his long discography of productions for north carolina rapper crosby.
          he has recently released a lo-fi pop ep <i>crybaby</i> to acclaim from
          his fans on his change of direction. lentra is a self taught producer
          using ableton on windows. he has recently been learning and practicing
          guitar and keys with the goal to incorporate more live instrumentation
          into his music. lentra also does his own mix and mastering, as well as
          offering mixing and mastering services to bbno$ (on their biggest
          records), crosby, and many others. he is not classically trained in
          any sense, but uses complex music theory and experimental sound design
          in his pieces.
        </p>
        <h5>250 word bio</h5>
        <p>
          lentra (garrett hartnell) is a music producer from vancouver, bc,
          canada. he has been producing for 5 years and is known for his unique
          genre-blending style of producing hip-hop and electronic music. lentra
          is best known for his work with bbno$, a rapper from vancouver, and
          his long discography of productions for north carolina rapper crosby.
          he has recently released a lo-fi pop ep <i>crybaby</i> to acclaim from
          his fans on his change of direction. lentra is a self taught producer
          using ableton on windows. he has recently been learning and practicing
          guitar and keys with the goal to incorporate more live instrumentation
          into his music. lentra also does his own mix and mastering, as well as
          offering mixing and mastering services to bbno$ (on their biggest
          records), crosby, and many others. he is not classically trained in
          any sense, but uses complex music theory and experimental sound design
          in his pieces. lentra has produced for artists both locally and
          globally, with upcoming work for bbno$, crosby, and kevin venom (a
          north carolina rapper). his work often dives into self reflection,
          with an introspective look on relationships, anxiety, and mental
          health. lentra is currently workin on a collection of merchandise to
          accompany the success of <i>crybaby</i>. his previous ep,{" "}
          <i>episodes of my sanity</i> is a collection of songs that are both
          sparse and erratic, which are meant to illustrate turmoil of anxiety
          in calm situations. he is currently workin on more vocal music, as
          well as attempting to collaborate with more local acts.
        </p>
      </section>
      <section>
        <h3>downloadables</h3>
        <div className="button-group">
          <a
            className="button"
            href={
              process.env.PUBLIC_URL +
              "/downloads/garrett-hartnell-lentra-bios.pdf"
            }
            download
          >
            download bios
          </a>
          <a
            className="button"
            href={
              process.env.PUBLIC_URL +
              "/downloads/garrett-hartnell-lentra-headshot.png"
            }
            download
          >
            download headshot
          </a>
        </div>
      </section>
      <section>
        <h3>repetoire</h3>
        <ul>
          <li>live set (sp-404sx)</li>
          <li>djing</li>
          <li>singing</li>
        </ul>
      </section>
    </div>
  );
};

export default PressPage;
