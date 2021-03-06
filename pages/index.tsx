import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { PreviouslyUpdatedGames } from "../components/PreviouslyUpdatedGames/PreviouslyUpdatedGames";
import { ReviewSuccesses } from "../components/ReviewSuccesses/ReviewSuccesses";
import TopGames from "../components/TopGames";
import { withFetchedGameData } from "../hocs/WithFetchedGameData";
import styles from "../styles/Home.module.css";

import { RJCGlossyCardList } from "jc-glossycards";

const domain = `http://dev-peliarvostelut.net/`;

const LatestByReviews = withFetchedGameData(
  ReviewSuccesses,
  `${domain}/wp-json/public/game/get?itemCount=30&mode=latest-by-reviews`,
  `Virhe ladattaessa pelejä`
);
const WorthMention = withFetchedGameData(
  PreviouslyUpdatedGames,
  `${domain}/wp-json/public/game/get?itemCount=30&mode=worth-mention`,
  `Virhe ladattaessa pelejä`
);
const TGames = withFetchedGameData(
  TopGames,
  `${domain}/wp-json/public/game/get?itemCount=30&mode=top-recent`,
  `Virhe ladattaessa pelejä`
);
const Home: NextPage = () => {
  return (
    <main className="main">
      <section className="section">
        <TGames />
      </section>
      <section className="section section--full">
        <LatestByReviews />
      </section>
      <section className="section section--full">
        <WorthMention />
      </section>
      {/* <div className="jc-glossycards">Glossycards</div> */}
    </main>
  );
};

export default Home;
