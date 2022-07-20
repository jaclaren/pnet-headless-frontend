import React from "react";
import { useEffect, useRef } from "react";

import * as TinyCards from 'pnet-common';
import "pnet-common/dist/pnet-common.min.css";

const useTinyCards = (items: TinyCards.ISmallCardItem[], refElement: any) => {  
  useEffect(() => {
    
    if (!!refElement && !!items && items.length > 0) {     
      TinyCards.generateSkeletonItems(Array.apply(null, Array(22)), refElement)   
      
      const cleanItems = items.map(item => {
        return {
          average_score: !!item.average_score ? item.average_score : ``,
          href: !!item.href ? item.href : ``,           
          reviewCount: !!item.reviewCount ? item.reviewCount : ``,
          title: !!item.title ? item.title : ``, 
          coverimage: !!item.coverimage ? item.coverimage : ``
        }
      }) as TinyCards.ISmallCardItem[]      

      TinyCards.fillItems(cleanItems, refElement);      
     } 
  }, [items])

};

export interface IPreviouslyUpdatedGamesProps {
  items: TinyCards.ISmallCardItem[];
}

export function PreviouslyUpdatedGames(props: IPreviouslyUpdatedGamesProps) {
  const ref =  useRef() as React.MutableRefObject<HTMLInputElement>;
  const tinyCards = useTinyCards(props.items, ref.current);

  return (
    <div ref={ref} key={`pnet-pug`} className="pugames pnet-smallcards pnet-expcardlist">      
    </div>
  );
}
 