import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const VideoPlayer = () => {
  const { id, chapterId, subChapterId } = useParams();
  const [isPlaying, setIsPlaying] = useState(false);
  const srcVideo = useSelector(
    (state) =>
      state.subChapters
        .find((item) => item.parent === id + "-" + chapterId)
        .children.find(
          (item) => item.id === id + "-" + chapterId + "-" + subChapterId
        )?.video
  );
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <iframe
        width="800px"
        height="100%"
        src={srcVideo}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="video-player"
      ></iframe>
      <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
    </div>
  );
};

export default VideoPlayer;
