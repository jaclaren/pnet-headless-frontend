import { FunctionComponent, useState } from "react";
import { IGameAPIRow } from "../../pages/kooste/[pid]";
import CiteScroller, {
  PnetWPEndpointReviewRow,
} from "../CiteScroller/CiteScroller";
import GameVideo from "../GameVideo";

export interface IVideoToggleWithCiteProps {
  item: IGameAPIRow;
}

export const VideoToggleWithCite: FunctionComponent<
  IVideoToggleWithCiteProps
> = (props) => {
  const [videoUrl, _setVideoUrl] = useState(props.item.video);

  return (
    <div className="">
      <button onClick={() => _setVideoUrl(props.item.video)}>Traileri</button>
      {!!props.item.gameplay_video ? (
        <button
          onClick={() => _setVideoUrl(props.item.gameplay_video as string)}
        >
          Pelivideo
        </button>
      ) : (
        ``
      )}
      <CiteScroller reviews={props.item.reviews as PnetWPEndpointReviewRow[]} />
      <GameVideo videoUrl={videoUrl} />
    </div>
  );
};
