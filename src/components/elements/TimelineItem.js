import React from "react";

function TimelineItem(props) {
  const startFormatted = new Date(props.startDate).toLocaleString("en-US", {
    month: "long",
    year: "numeric"
  })
  const endFormatted = (props.endDate && new Date(props.endDate).toLocaleString("en-US", {
    month: "long",
    year: "numeric"
  })) || 'PRESENT';
  return (
    <div className="timeline-item is-success">
      <div className="timeline-marker is-image is-32x32">
        <img src="" alt="" />
      </div>
      <div className="timeline-content">
        <p className="heading">{startFormatted} - {endFormatted}</p>
        <p className="heading">{props.position}</p>
        <h1 className="title is-4">{props.company}</h1>
        <p style={{ maxWidth: "25em" }} dangerouslySetInnerHTML={{__html: props.summary}}></p>
      </div>
    </div>
  );
}

export default TimelineItem;
