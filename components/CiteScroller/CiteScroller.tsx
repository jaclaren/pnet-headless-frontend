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

// Swiper.use([Navigation, Pagination]);
SwiperCore.use([Autoplay]);

export const entityToChar = (str: any) => {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = str;
  return textarea.value;
};

interface PnetWPEndpointReviewRow {
  title?: string;
  cite?: string;
  url?: string;
}
interface ICiteScrollerProps {
  reviews: PnetWPEndpointReviewRow[];
  index?: number;
  baseClassName?: string;
  currentGameIndex?: number;
  slideDelay?: number;
  onAllReviewsDisplayed?: Function;
  onUserChangedSlide?: Function;
  onScrollPercentageChanged: { (percentage: number): void };  
}

interface ICiteWithLinkProps {
  cite?: string | undefined;
  url: string | undefined;
}

const CiteWithLink: FunctionComponent<ICiteWithLinkProps> = (props) => {
  return (
    <div className="cite swiper-slide">
      <blockquote className="game-quotebox__quote fade-in">
        {entityToChar(props.cite)}
      </blockquote>
      <a className="button" href={props.url}>
        Lue
      </a>
    </div>
  );
};

const CiteScroller: FunctionComponent<ICiteScrollerProps> = (props) => {
  return (
    <Swiper
      key={`sw${props.currentGameIndex}`}
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
      className={`${props.baseClassName}`}
      effect="fade"
      slidesPerView={1}
      spaceBetween={50}
      loop={true}
      // navigation
      pagination={{ clickable: true }}
      draggable={true}
      onReachEnd={() =>
        !!props.onAllReviewsDisplayed ? props.onAllReviewsDisplayed() : null
      }
      onSlideChange={(sw) => {
        const userCausedChange = sw.touches.diff != 0

        if(userCausedChange && !!props.onUserChangedSlide)
          props.onUserChangedSlide()

        const percentage = sw.realIndex / props.reviews.length;
        props.onScrollPercentageChanged(percentage);
      }}
    >
      {props.reviews.map((review, index) => {
        return (
          <SwiperSlide key={`ss${index}`}>
            <CiteWithLink cite={review.cite} url={review.url} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

CiteScroller.defaultProps = {
  baseClassName: `citescroller`,
  onAllReviewsDisplayed: () => {},
  slideDelay: 2000,
  onScrollPercentageChanged: (percentage: number) => {},
  onUserChangedSlide: () => {}  
};

export default CiteScroller;
