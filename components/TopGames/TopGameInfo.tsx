import React from "react";
import { ScoreTag } from "../ScoreTag/ScoreTag";

export function TopGameInfo(props: any) {
  return (
    <div className="b-topgames__iteminfo">
      <h2 className="b-topgames__title">{props.item.title}</h2>

      <div className="b-topgames__score">
        <ScoreTag
          key={"topgame-gi-score-".concat(`${props.index}`)}
          score={props.item.score}
        ></ScoreTag>
      </div>
    </div>
  );
}
