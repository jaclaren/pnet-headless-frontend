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
    <div className="review__col review__col--data">
      <div className="review__site">{props.sitename}</div>
      <div className="review__meta">{props.meta}</div>
      <a className="b-btn" href="#">Lue</a>
    </div>
    <div className="review__col">
      <ScoreTag score={props.score} />      
    </div>
  </li>;
};
