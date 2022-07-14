import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { PreviouslyUpdatedGames } from '../components/PreviouslyUpdatedGames/PreviouslyUpdatedGames'
import { ReviewSuccesses } from '../components/ReviewSuccesses/ReviewSuccesses'
import TopGames from '../components/TopGames'
import { withFetchedGameData } from '../hocs/WithFetchedGameData'
import styles from '../styles/Home.module.css'

const LatestByReviews = withFetchedGameData(ReviewSuccesses, `http://dev-peliarvostelut.net/wp-json/public/game/get?itemCount=30&mode=latest-by-reviews`, `Virhe ladattaessa pelejä`)
const WorthMention = withFetchedGameData(PreviouslyUpdatedGames, `http://dev-peliarvostelut.net/wp-json/public/game/get?itemCount=30&mode=worth-mention`, `Virhe ladattaessa pelejä`)  
const TGames = withFetchedGameData(TopGames, `http://dev-peliarvostelut.net/wp-json/public/game/get?itemCount=30&mode=top-recent`, `Virhe ladattaessa pelejä`)  

const Home: NextPage = () => {
  return (
    <main className="main">
    <TGames />
    <LatestByReviews />
    <WorthMention />    
    </main>
  )
}

export default Home
