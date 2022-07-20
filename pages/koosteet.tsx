import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { PreviouslyUpdatedGames } from '../components/PreviouslyUpdatedGames/PreviouslyUpdatedGames'
import { ReviewSuccesses } from '../components/ReviewSuccesses/ReviewSuccesses'
import TopGames from '../components/TopGames'
import { withFetchedGameData } from '../hocs/WithFetchedGameData'
import styles from '../styles/Home.module.css'

import {RJCGlossyCardList} from 'jc-glossycards'

const domain = `http://dev-peliarvostelut.net/`;

const Home: NextPage = () => {
  return (
    <main className="main">      
      Hello
    </main>
  )
}

export default Home
