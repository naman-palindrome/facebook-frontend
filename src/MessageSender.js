import React, { useState } from "react";
import { Avatar, IconButton, Input } from "@material-ui/core";
import "./MessageSender.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from "./StateProvider";
import axios from "./axios";

function MessageSender() {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [image, setImage] = useState(null);
  const savePost = async (postData) => {
    await axios.post("/upload/post", postData).then((resp) => {
      console.log(resp);
    });
  };

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (image) {
      console.log("it went inside image");
      const imgForm = new FormData();
      imgForm.append("file", image, image.name);
      axios
        .post("/upload/image", imgForm, {
          header: {
            accept: "application/json",
            "Accept-Language": "en-US,en;q=0.8",
            "Content-Type": `multipart/form-data; boundary=${imgForm._boundary}`,
          },
        })
        .then((res) => {
          console.log("this is the filename:", res.data.file.filename);

          const postData = {
            text: input,
            imgName: res.data.file.filename,
            user: user.displayName,
            avatar: user.photoURL,
            timestamp: Date.now(),
          };
          console.log("this is uploaded", postData);
          savePost(postData);
        });
    } else {
      const postData = {
        text: input,
        user: user.displayName,
        avatar: user.photoURL,
        timestamp: Date.now(),
      };
      console.log("this is uploaded without image", postData);
      savePost(postData);
    }

    setInput("");
    setImageUrl("");
    setImage(null);
  };

  return (
    <div className="messageSender">
      <div className="messageSender_top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender_input"
            type="text"
            placeholder={`what's on you mind ${user.displayName}`}
          />
          <input
            type="file"
            className="messageSender_fileSelector"
            onChange={handleChange}
          />
          <button onClick={handleSubmit} type="submit">
            Hidden submit
          </button>
        </form>
      </div>

      <div className="messageSender_bottom">
        <div className="messageSender_option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender_option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender_option">
          <InsertEmoticonIcon style={{ color: "orange " }} />
          <h3>Live Video</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
