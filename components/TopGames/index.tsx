import React, { useState, useEffect } from "react";
import { EntityNavigation } from "../EntityNavigation/EntityNavigation";

import ChevronButton from "../ChevronIcon";
import GameVideo from "../GameVideo";
import CiteScroller from "../CiteScroller/CiteScroller";

import { ScoreTag } from "../ScoreTag/ScoreTag";
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
}

function TopGameInfo(props: any) {
  return (
    <div className="b-topgames__iteminfo">
      <div
        key={"topgame-gi-title-".concat(`${props.index}`)}
        className="fade-in fade-in--speed1 b-topgames__title"
      >
        {props.item.title}
      </div>
      <div
        key={"topgame-gi-platforms-".concat(`${props.index}`)}
        className="fade-in fade-in--speed1 b-topgames__platforms"
      >
        {props.item.platforms.join(",")}
      </div>
      <div
        key={"topgame-gi-darkmeta-".concat(`${props.index}`)}
        className="fade-in fade-in--speed1 b-topgames__darkmeta"
      >
        {!!props.item.reviews ? props.item.reviews.length : 0} arvostelua
      </div>
      <ScoreTag
        key={"topgame-gi-score-".concat(`${props.index}`)}
        score={props.item.score}
      ></ScoreTag>{" "}
    </div>
  );
}

const TopGames = (props: ITopGamesProps) => {
  const [index, _setIndex] = React.useState(0);

  const resetIndex = () => {
    _setIndex(0);
  };

  const nextPage = () => {
    const nextIndex = index + 1;
    _setIndex(nextIndex > props.maxItems - 1 ? 0 : nextIndex);
  };

  const previousPage = () => {
    const previousIndex = index - 1;
    _setIndex(previousIndex < 0 ? props.maxItems - 1 : previousIndex);
  };

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
      <div className="b-topgames__progressbar">&nbsp;</div>
      <div className="b-topgames__video">
        <GameVideo videoUrl={props.items[index].video} />
      </div>
      <TopGameInfo index={index} item={props.items[index]}></TopGameInfo>
      <CiteScroller currentGameIndex={index} reviews={props.items[index].reviews}></CiteScroller>
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
};

export default TopGames;
