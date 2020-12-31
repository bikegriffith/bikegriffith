import React from "react";
import Badge from "../elements/Badge";
import Resume from "../../resume.json";

function AboutMe() {
  return (
    <section className="section has-background-link" id="aboutMe">
      <div className="container has-text-centered">
        <figure className="image container is-180x180">
          <img
            width="180px"
            height="180px"
            src={Resume.basics.picture}
            alt="Mike Griffith"
            className="is-rounded"
          />
        </figure>
        <p className="subtitle is-4 has-text-white has-text-weight-bold">
          {Resume.basics.slogan}
        </p>
        <p className="subtitle is-5 has-text-white has-text-weight-light summary-text">
          {Resume.basics.summary}
        </p>
        <div className="container interests">
          <div className="field is-grouped is-grouped-multiline has-text-centered">
            {Resume.interests.map((value, index) => {
              return (
                <Badge key={index} text={value.name} faIcon={value.x_icon} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
