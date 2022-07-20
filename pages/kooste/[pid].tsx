import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { PreviouslyUpdatedGames } from '../../components/PreviouslyUpdatedGames/PreviouslyUpdatedGames'
import { ReviewSuccesses } from '../../components/ReviewSuccesses/ReviewSuccesses'
import TopGames from '../../components/TopGames'
import { withFetchedGameData } from '../../hocs/WithFetchedGameData'
import styles from '../styles/Home.module.css'

import {RJCGlossyCardList} from 'jc-glossycards'

const domain = `http://dev-peliarvostelut.net/`;

import { useRouter } from 'next/router'

const Post = () => {  
}

const Home: NextPage = () => {
  const router = useRouter()
  const { pid } = router.query

  return <p>Post: {pid}</p>
}

export default Home
