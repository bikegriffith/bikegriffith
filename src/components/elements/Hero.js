import React, {useEffect, useState} from "react";
import NavBar from "./NavBar";
import Resume from "../../resume.json";

function Hero() {
  const [heroTitleIndex, setHeroTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      let newIndex = heroTitleIndex + 1;
      if (newIndex >= Resume.basics.heroTitles.length) {
        newIndex = 0;
      }
      setHeroTitleIndex(newIndex);
    }, 2500);
    return () => clearInterval(interval);
  }, [heroTitleIndex]);

  const [article, title] = Resume.basics.heroTitles[heroTitleIndex];
  return (
    <section className="hero is-dark is-fullheight has-bg-image">
      <div className="hero-head">
        <NavBar />
      </div>
      <div className="hero-body">
        <div className="container">
          <p className="subtitle is-5 has-text-weight-light">I'm {article}</p>
          <h1 className="title">{title}</h1>
          <h2 className="subtitle">Building things with &#10084;&#65039; in Northeast Ohio</h2>
        </div>
      </div>
      <div className="hero-foot" style={{ paddingBottom: "20px" }}>
        <div className="columns is-mobile">
          <div className="column"></div>
          {Resume.basics.profiles.map((value, index) => {
            return (
              <div key={index} className="column has-text-centered">
                <a
                  href={value.url}
                  target="blank"
                  className="is-hovered"
                  title={value.network}
                >
                  <span className="icon is-medium is-">
                    <i className={value.x_icon}></i>
                  </span>
                </a>
              </div>
            );
          })}
          <div className="column"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
