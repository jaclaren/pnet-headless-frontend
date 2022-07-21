import { FunctionComponent } from "react";
import { ScoreTag } from "../ScoreTag/ScoreTag";

export interface IReviewCardProps {
  sitename: string;
  meta: string;
  score: number;
  href: string;
}

export const ReviewCard: FunctionComponent<IReviewCardProps> = (props) => {
  return <li className="review review--card">
    <div className="review__site">{props.sitename}</div>
    <div className="review__meta">{props.meta}</div>
    <ScoreTag score={props.score} />
  </li>;
};
