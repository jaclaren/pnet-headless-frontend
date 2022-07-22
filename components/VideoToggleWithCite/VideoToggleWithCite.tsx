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
    <div className="videotoggler">
      <div className="videotoggler__controls videotoggler__row">
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
      </div>
      <div className="videotoggler__videos videotoggler__row">
        <div className="videotoggler__col videotoggler_videos">
          <GameVideo className="b-gamevideo videotoggler__video" videoUrl={videoUrl} />
        </div>
        <div className="videotoggler__col videotoggler__cites">
          <CiteScroller
            baseClassName="citescroller videotoggler__citescroller"
            reviews={props.item.reviews as PnetWPEndpointReviewRow[]}
          />
        </div>
      </div>
    </div>
  );
};
