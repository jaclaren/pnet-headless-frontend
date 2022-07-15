import React, { FunctionComponent } from "react";

interface IScoreTagProps {
  score : number
}

export const ScoreTag : FunctionComponent<IScoreTagProps> = (props) =>{
  return (
    <div
      className={[
        "fade-in fade-in--speed1 topgames__score score-tag",
        "score-tag--score-".concat(`${props.score}`),
      ].join(" ")}
    >
      {props.score} 90
    </div>
  );
}
