import React, { useRef,useState, useEffect } from "react";
import ReactPlayer from 'react-player/youtube'

interface IGameVideoProps {
    videoUrl: string;
}

// Lazy load the YouTube player
const GameVideo = (props:IGameVideoProps) => {    
    return <ReactPlayer width="100%" height="380" url={props.videoUrl} />
}

GameVideo.defaultProps = {
    videoUrl : '',
    id : 'videobox'
}

export default GameVideo;
