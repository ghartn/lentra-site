import React from "react";
import { Link } from "react-router-dom";
import lentra1 from "../img/lentra1.png";
import Quote from "../components/Quote";

const HomePage = () => {
  return (
    <div>
      <section>
        <div className="row">
          <div className="four columns">
            <img src={lentra1} alt="lentra" />
          </div>
          <div className="eight columns">
            <h1>garrett hartnell</h1>
            <h2>aka, lentra</h2>
            <h3>music producer</h3>
          </div>
        </div>
      </section>
      <section>
        <h3>upcoming performances</h3>
        <p>lentra has no recent or upcoming performances :(</p>
        <p>
          <Link to="/contact">you should book him!</Link>
        </p>
      </section>
      <section>
        <h3>some nice quotes</h3>
        <Quote
          quoteText="lentra is a swell guy that makes swell music"
          citeText="alex (bbno$) gumuchian"
        />
      </section>
    </div>
  );
};

export default HomePage;
