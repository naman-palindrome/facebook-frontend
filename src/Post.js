import React from "react";
import "./Post.css";
import { Avatar, IconButton } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBUbbleOutLineIcon from "@material-ui/icons/ChatBubbleOutline";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NearMeIcon from "@material-ui/icons/NearMe";
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined";

function Post({ profilePic, imgName, username, timestamp, message }) {
  return (
    <div classname="post">
      <div classname="post_top">
        <Avatar src={profilePic} />
        <div classname="post_topInfo">
          <h3>{username}</h3>
          <p>{new Date(parseInt(timestamp)).toUTCString()}</p>
        </div>
      </div>

      <div className="post_bottom">
        <p>{message}</p>
      </div>
      {console.log("image name inside post", imgName)}
      {imgName ? (
        <div className="post_image">
          <img
            src={`http://localhost:9000/retrieve/image/single?name=${imgName}`}
            alt="no image found"
          />
        </div>
      ) : (
        console.log("no image here")
      )}

      <div className="post_options">
        <div className="post_option">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="post_option">
          <ChatBUbbleOutLineIcon />
          <p>Comment</p>
        </div>
        <div className="post_option">
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className="post_option">
          <AccountCircleIcon />
          <ExpandMoreOutlined />
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Post;
