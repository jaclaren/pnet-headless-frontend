import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

SwiperCore.use([Autoplay]);

export const entityToChar = (str: any) => {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = str;
  return textarea.value;
};

export interface PnetWPEndpointReviewRow {
  title?: string;
  cite?: string;
  url?: string;
}
export interface ICiteScrollerProps {
  reviews: PnetWPEndpointReviewRow[];
  index?: number;
  baseClassName?: string;
  currentGameIndex?: number;
  slideDelay?: number;
  onAllReviewsDisplayed?: Function;
  onUserChangedSlide?: Function;
  onScrollPercentageChanged?: { (percentage: number): void };
  autoplay?: boolean;
}

export interface ICiteWithLinkProps {
  cite?: string | undefined;
  url: string | undefined;
  site: string | undefined;
  score: string;
}

const CiteWithLink: FunctionComponent<ICiteWithLinkProps> = (props) => {
  return (
    <div className="cite swiper-slide">
      <blockquote className="cite__text fade-in">
        {entityToChar(props.cite)}.
      </blockquote>
      <div className="cite__actionrow">
        <div className="cite__actionrow">
          {formatSiteName(!!props.site ? props.site : ``)}
        </div>
        <div className="cite__actionrow">{props.score}</div>
        <a
          rel="nofollow"
          className=""
          href={props.url}
        >
          Lue arvio
        </a>
      </div>
    </div>
  );
};

const CiteScroller: FunctionComponent<ICiteScrollerProps> = (props) => {
  return (
    <Swiper
      key={`sw${props.currentGameIndex}${props.autoplay ? `ap` : ``}`}
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
      className={`${props.baseClassName}`}
      effect="fade"
      slidesPerView={1}
      spaceBetween={50}
      loop={true}
      autoplay={
        !!props.autoplay && props.autoplay
          ? { delay: props.slideDelay, disableOnInteraction: false }
          : false
      }
      pagination={{ clickable: true }}
      draggable={true}
      onReachEnd={() =>
        !!props.onAllReviewsDisplayed ? props.onAllReviewsDisplayed() : null
      }
      onSlideChange={(sw) => {
        const userCausedChange = sw.touches.diff != 0;

        if (userCausedChange && !!props.onUserChangedSlide)
          props.onUserChangedSlide();

        const percentage = sw.realIndex / props.reviews.length;
        props.onScrollPercentageChanged(percentage);
      }}
    >
      {props.reviews.map((review, index) => {
        return (
          <SwiperSlide key={`ss${index}`}>
            <CiteWithLink
              cite={review.cite}
              url={review.url}
              site={review.site}
              score={review.score}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

CiteScroller.defaultProps = {
  baseClassName: `citescroller`,
  onAllReviewsDisplayed: () => {},
  slideDelay: 4000,
  onScrollPercentageChanged: (percentage: number) => {},
  onUserChangedSlide: () => {},
  autoplay: true,
  reviews: []
};

export default CiteScroller;

function formatSiteName(site: string): string {
  const siteFormats = [
    {
      name: `game_reactor`,
      formattedName: `Game Reactor Suomi`,
    },
    {
      name: `konsolifin`,
      formattedName: `KonsoliFIN`,
    },
    {
      name: `muropaketti`,
      formattedName: `Muropaketti`,
    },
    {
      name: `game_reality`,
      formattedName: `GameReality`,
    },
    {
      name: `respawn`,
      formattedName: `Respawn`,
    },
    {
      name: `live_gamers`,
      formattedName: `Livegamers`,
    },
  ];

  const foundItem = siteFormats.find((t) => t.name === site);
  return !!foundItem
    ? foundItem.formattedName
    : `${site.charAt(0).toUpperCase()}${site.slice(1)}`;
}
