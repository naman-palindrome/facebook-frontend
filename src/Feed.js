import React, { useEffect, useState } from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import user from "./static/user.png";
import post1 from "./static/post1.jpg";
import post2 from "./static/post2.jpg";
import u1 from "./static/u1.png";
import Pusher from "pusher-js";

import axios from "./axios.js";

const pusher = new Pusher("00b83c508dd4472b6484", {
  cluster: "ap2",
});

function Feed() {
  const [postData, setPostsData] = useState([]);

  const syncFeed = () => {
    axios.get("/retrieve/posts").then((res) => {
      console.log("this is from axios", res.data);
      setPostsData(res.data);
    });
  };

  useEffect(() => {
    const channel = pusher.subscribe("posts");
    channel.bind("inserted", function (data) {
      syncFeed();
    });
  }, []);
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {postData.map((entry) => (
        <Post
          profilePic={entry.avatar}
          message={entry.text}
          timestamp={entry.timestamp}
          imgName={entry.imgName}
          user={entry.user}
        />
      ))}
    </div>
  );
}

export default Feed;
