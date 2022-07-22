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
import {
  PnetWPEndpointReviewRow,
} from "../../components/CiteScroller/CiteScroller";
import { CompilationReviewList } from "../../components/CompilationReviewList/CompilationReviewList";
import { VideoToggleWithCite } from "../../components/VideoToggleWithCite/VideoToggleWithCite";
import { CompilationHeader } from "./CompilationHeader";

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
    if (!url || url.length == 0) return;

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

export interface IGameAPIRow {
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
  gameplay_video?: string;
  reviews?: any[];
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
    gameplay_video: ``,
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
      <section className="section">
        <CompilationHeader item={item} />
        <CompilationReviewList
          reviews={item.reviews as PnetWPEndpointReviewRow[]}
        />
      </section>
      <section className="section compilation__video">
        <VideoToggleWithCite item={item} />
      </section>
    </>
  );
};

export default GamePage;
