import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { PreviouslyUpdatedGames } from "../../components/PreviouslyUpdatedGames/PreviouslyUpdatedGames";
import { ReviewSuccesses } from "../../components/ReviewSuccesses/ReviewSuccesses";
import TopGames from "../../components/TopGames";
import { withFetchedGameData } from "../../hocs/WithFetchedGameData";
import styles from "../styles/Home.module.css";

import { RJCGlossyCardList } from "jc-glossycards";

const domain = `http://dev-peliarvostelut.net/`;

import { useRouter } from "next/router";
import {
  FunctionComponent,
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import { convertItems } from "../../utils/convertItems";
import CiteScroller, {
  PnetWPEndpointReviewRow,
} from "../../components/CiteScroller/CiteScroller";

interface IGameProps {
  slug: any;
  title: any;
}

export interface IUseGameAPIData {
  fetchError: boolean;
  items: IGameAPIRow[];
  loading: boolean;
}

const useGameAPIData = (url: string): IUseGameAPIData => {
  const [fetchError, setFetchError] = useState(false);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(!url || url.length == 0)
      return

    axios
      .get(url)
      .then((response: any) => {
        setLoading(true);
        if (
          response.data.body.games.length == 0 ||
          !!response.data.body.games.error
        ) {
          setFetchError(true);
          return;
        }

        setItems(convertItems(response.data.body.games));
        setLoading(false);
      })
      .catch((err: any) => {
        setFetchError(true);
        setLoading(false);
      });
  }, [url]);

  return {
    fetchError,
    items,
    loading,
  };
};
interface IGame {}

interface IGameAPIRow {
  aggregated_image_title: any;
  aggregated_image_url: string;
  average_score: number;
  coverimage: string;
  date_added: string;
  developer: string;
  genres: any[];
  href: string;
  id: number;
  img: string;
  news_items: string;
  platforms: string[];
  provisioned: any;
  raw_date: string;
  release_year: number;
  reviewCount: number;
  slug: string;
  title: string;
  video: string;
  reviews?: any[];
}

function CompilationHeader(props: {
  item: {
    title:
      | string
      | number
      | boolean
      | ReactElement<any, string | JSXElementConstructor<any>>
      | ReactFragment
      | ReactPortal
      | null
      | undefined;
    developer:
      | string
      | number
      | boolean
      | ReactElement<any, string | JSXElementConstructor<any>>
      | ReactFragment
      | ReactPortal
      | null
      | undefined;
    average_score:
      | string
      | number
      | boolean
      | ReactElement<any, string | JSXElementConstructor<any>>
      | ReactFragment
      | ReactPortal
      | null
      | undefined;
    coverimage: string | undefined;
  };
}) {
  return (
    <div className="product__header game__header">
      <h1 className="title game__title">{props.item.title}</h1>
      <div className="label game__developer">{props.item.developer}</div>
      {props.item.average_score}
      <img className="game__image" src={props.item.coverimage}></img>
      <div className="game__scoredist"></div>
    </div>
  );
}

function CompilationReviewList() {
  return (
    <ul className="review__list">
      <li className="review__item game__review">Review</li>
    </ul>
  );
}

const GamePage: FunctionComponent<IGameProps> = (props) => {
  const router = useRouter();
  const { pid } = router.query;
  
  const [item, setItem] = useState<IGameAPIRow>({
    aggregated_image_title: ``,
    aggregated_image_url: ``,
    average_score: 0,
    coverimage: ``,
    date_added: ``,
    developer: ``,
    genres: [],
    href: ``,
    id: 0,
    img: ``,
    news_items: ``,
    platforms: [],
    provisioned: ``,
    raw_date: ``,
    release_year: 0,
    reviewCount: 0,
    slug: ``,
    title: ``,
    video: ``,
    reviews: [],
  });

  const { fetchError, items, loading } = useGameAPIData(
    !!pid ? `${domain}/wp-json/public/game/get?mode=by-slug&slug=${pid}` : ``
  ) as IUseGameAPIData;

  useEffect(() => {
    if (!!items) setItem(items[0]);
  }, [items]);

  if (!item) return <></>;

  return (
    <>
    {JSON.stringify(router.query)}    
      <section className="contentsect contentsect--header">
        <CompilationHeader item={item} />
        <CompilationReviewList />
      </section>
      <section className="contentsect">
        <CiteScroller reviews={item.reviews as PnetWPEndpointReviewRow[]} />
      </section>
    </>
  );
};

export default GamePage;
