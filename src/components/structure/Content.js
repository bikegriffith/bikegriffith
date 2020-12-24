import React from "react";
import AboutMe from "../sections/AboutMe";
import Skills from "../sections/Skills";
import Experience from "../sections/Experience";
import Articles from "../sections/Articles";

function Content() {
  return (
    <main>
      {false && <AboutMe />}
      {false && <Skills />}
      <Experience />
      {false && <Articles />}
    </main>
  );
}

export default Content;
