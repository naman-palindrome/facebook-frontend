import React from "react";
import "./StoryReel.css";
import Story from "./Story";
import bg1 from "./static/bg1.png";
import bg2 from "./static/bg2.png";
import bg3 from "./static/bg3.png";
import bg4 from "./static/bg4.png";

import u1 from "./static/u1.png";
import u2 from "./static/u2.png";
import u3 from "./static/u3.png";
import u4 from "./static/u4.png";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story image={bg1} profileSrc={u1} title="Robert" />
      <Story image={bg2} profileSrc={u2} title="chris" />
      <Story image={bg3} profileSrc={u3} title="Chris" />
      <Story image={bg4} profileSrc={u4} title="Scarlett" />
    </div>
  );
}

export default StoryReel;
