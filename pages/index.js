import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Featured from '../components/Featured';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hot Pizza Official</title>
        <meta name="description" content="Best hot pizza this side of Pluto." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
    </div>
  )
}
