import React, { useRef, useState, useEffect } from "react";
import ReactPlayer from "react-player/youtube";

interface IGameVideoProps {
  videoUrl: string;
  className?: string;
  onUserStartedVideo: any;
}

// Lazy load the YouTube player
const GameVideo = (props: IGameVideoProps) => {
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => { 
    if (typeof window !== `undefined`) setHasWindow(true);  // required to prevent hydration error
  }, []);

  return (
    <div>
      {hasWindow ? (
        <ReactPlayer
          className={props.className}
          width="100%"
          height="380"
          url={props.videoUrl}
          onPlay={() => props.onUserStartedVideo()}
        />
      ) : (
        ``
      )}
    </div>
  );
};

GameVideo.defaultProps = {
  videoUrl: "",
  id: "videobox",
  className: `b-gamevideo`,
  onUserStartedVideo: () => {},
};

export default GameVideo;
