import React, { useState, useEffect } from "react";
import { EntityNavigation } from "../EntityNavigation/EntityNavigation";

import ChevronButton from "../ChevronIcon";
import GameVideo from "../GameVideo";
import CiteScroller from "../CiteScroller/CiteScroller";

import { TopGameInfo } from "./TopGameInfo";
import { ProgressBar } from "./ProgressBar";
interface PnetWPEndpointGameRow {
  title: string;
  platforms: any[];
  reviews: any[];
  score: number | string;
  href: string;
  video?: string;
}

interface ITopGamesProps {
  maxItems: number;
  items: PnetWPEndpointGameRow[];
  compilationLinkText: string;
  quoteSlideDelay: number;
}

const TopGames = (props: ITopGamesProps) => {
  const [index, _setIndex] = React.useState(0);
  const [currentScrollPercentage, _setCurrentScrollPercentage] =
    React.useState(0);
  const [autoPlayPrevented, _setAutoPlayPrevented] = React.useState(false);

  const resetIndex = () => {
    _setIndex(0);
  };

  const resetValues = () => {
    _setAutoPlayPrevented(false)
  }

  const nextPage = () => {
    const nextIndex = index + 1;
    _setIndex(nextIndex > props.maxItems - 1 ? 0 : nextIndex);
    resetValues()
  };

  const previousPage = () => {
    const previousIndex = index - 1;
    _setIndex(previousIndex < 0 ? props.maxItems - 1 : previousIndex);
    resetValues()
  };

  const handleAllReviewsDisplayed = () => {
    if(!autoPlayPrevented)
      nextPage()
  }

  if (props.items.length < index || props.items.length == 0) return <></>;

  return (
    <div className="b-topgames">
      <EntityNavigation
        onUserClickedPreviousPage={previousPage}
        maxIndex={props.maxItems}
        currentIndex={index}
        onUserClickedNextPage={nextPage}
        baseClassName="b-topgames__navigation cenavigation"
        showPagination={true}
        size="large"
      />
      <ProgressBar
        useDelay={!autoPlayPrevented}
        delay={props.quoteSlideDelay * props.items[index].reviews.length}        
        key={`${index}`}
      />
      <div className="b-topgames__video">
        <GameVideo
          onUserStartedVideo={() => _setAutoPlayPrevented(true)}
          videoUrl={props.items[index].video}
        />
      </div>
      <TopGameInfo index={index} item={props.items[index]}></TopGameInfo>
      <CiteScroller
        onAllReviewsDisplayed={handleAllReviewsDisplayed}
        currentGameIndex={index}
        reviews={props.items[index].reviews}
        slideDelay={props.quoteSlideDelay}
        onUserChangedSlide={() => _setAutoPlayPrevented(true)}
        onScrollPercentageChanged={(percentage: number) =>
          _setCurrentScrollPercentage(percentage)
        }
      ></CiteScroller>
      <footer className="b-topgames__footer">
        <a
          href={props.items[index].href}
          className="c-topgame__btn-compilation button button--thin button--bright"
        >
          {props.compilationLinkText}
        </a>
      </footer>
    </div>
  );
};

TopGames.defaultProps = {
  maxItems: 10,
  compilationLinkText: "Pelin kooste",
  secondsPerQuote: 5000,
  quoteSlideDelay: 6000,
};

export default TopGames;
