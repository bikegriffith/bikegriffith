import React from "react";
import TimelineItem from "./TimelineItem";
import Resume from "../../resume.json";

function Timeline() {
  const years = []
  Resume.work.map(item => {
    const year = new Date(item.startDate).getFullYear();
    if (year && years.indexOf(year) < 0) {
      years.push(year);
    }
  })
  return (
    <div className="timeline is-centered">
      <header className="timeline-header">
        <span className="tag is-medium is-dark">
          {new Date().getFullYear()}
        </span>
      </header>
      <div className="timeline-item">
        <div className="timeline-marker is-success"></div>
        <div className="timeline-content"></div>
      </div>
      {years.map((year, i) => {
          let content = [];
          content.push(
            Resume.work
              .filter(work => new Date(work.startDate).getFullYear() === year)
              .map((item, j) => {
                return (
                  <TimelineItem key={j} {...item} />
                );
              })
          );
          content.push(
            <header key={i} className="timeline-header">
              <span className="tag is-success">{year}</span>
            </header>
          );
          return content;
        })}
    </div>
  );
}

export default Timeline;
