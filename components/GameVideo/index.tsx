import React, { useRef, useState, useEffect } from "react";
import ReactPlayer from "react-player/youtube";

interface IGameVideoProps {
  videoUrl: string;
  className?: string;
}

// Lazy load the YouTube player
const GameVideo = (props: IGameVideoProps) => {
  return (
    <div>
      <ReactPlayer
        className={props.className}
        width="100%"
        height="380"
        url={props.videoUrl}
      />
    </div>
  );
};

GameVideo.defaultProps = {
  videoUrl: "",
  id: "videobox",
  className: `b-gamevideo`,
};

export default GameVideo;
