import { FunctionComponent } from "react";
import { formatSiteName } from "../../utils/formatSiteName";
import { PnetWPEndpointReviewRow } from "../CiteScroller/CiteScroller";
import { ReviewCard } from "./ReviewCard";

export interface ICompilationReviewListProps {
  reviews: PnetWPEndpointReviewRow[];
}

export const CompilationReviewList: FunctionComponent<
  ICompilationReviewListProps
> = (props) => {
  return (
    <ul className="review__list compilation__reviewlist">
      {props.reviews.map((review) => {
        return (
          <ReviewCard
            href="#"
            meta="Lisätty x päivää sitten"
            score={review.score as number}
            sitename={formatSiteName(review.site)}
          />
        );
      })}
    </ul>
  );
};

CompilationReviewList.defaultProps = {
  reviews: [],
};
