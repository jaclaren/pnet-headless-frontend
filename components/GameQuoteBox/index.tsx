import React, { FunctionComponent, useEffect, useState } from "react";
// import GameQuoteBox from "../game-quotebox/index.jsx";

// import Swiper, { Navigation, Pagination } from "swiper";

// Swiper.use([Navigation, Pagination])

interface IGameQuoteBoxProps {
	index: number;
	quotes: any[];
}


const GameQuoteBox : FunctionComponent<IGameQuoteBoxProps> = (props: IGameQuoteBoxProps) => {
	return(<></>)
// 	const [swiperObject, _setSwiperObject] = useState(null) as any

//   useEffect(() => {
// 	_setSwiperObject(new Swiper('.game-quoteboxlist', {        
// 		navigation: {
// 			nextEl: ".game-quoteboxlist__nav--next",
// 			prevEl: ".game-quoteboxlist__nav--previous",
// 		  },
//         pagination: {
//           el : '.game-quoteboxlist__pagination'
//         }
//     }) )
//   }, [])

//   useEffect(() => {
// 	if(swiperObject) {		
// 	swiperObject.slideTo(0, 0)
// 	}	  		  
//   }, [props.index])

//   const sorted = props.quotes.sort((t1, t2) => { 
// 	return t2.quote.length - t1.quote.length
//  	})		 

//   return (
// 		<div className="game-quoteboxlist swiper-container">			
// 		<div className="game-quoteboxlist__navcontainer">
// 			<div className="game-quoteboxlist__nav--previous"></div>
// 			<div className="game-quoteboxlist__nav--next"></div>
// 		</div>

// 			<div className="game-quoteboxlist__wrapper swiper-wrapper">				
			
				
// 				{props.quotes.map((t) => {
// 					return <GameQuoteBox index={props.index} {...t} />;
// 				})}
// 			</div>

//       		<div className="game-quoteboxlist__pagination"></div>
// 		</div>
// 	);
};

GameQuoteBox.defaultProps = {
	quotes: [],
};

export default GameQuoteBox;
