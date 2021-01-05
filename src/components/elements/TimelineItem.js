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
        <img src={'/images/' + props.icon} alt="" />
      </div>
      <div className="timeline-content">
        <p className="heading">{startFormatted} - {endFormatted}</p>
        <h1 className="title is-4" style={{marginBottom:10}}>{props.company}</h1>
        <p className="heading">{props.position}</p>
        <p dangerouslySetInnerHTML={{__html: props.summary}}></p>
      </div>
    </div>
  );
}

export default TimelineItem;
