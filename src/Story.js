import React from "react";
import "./Story.css";
import { Avatar, IconButton } from "@material-ui/core";

function Story({ image, profileSrc, title }) {
  return (
    <div className="story" style={{ backgroundImage: `url(${image})` }}>
      <Avatar src={profileSrc} />
      <h4>{title}</h4>
    </div>
  );
}
export default Story;
