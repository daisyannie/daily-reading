import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { ListButtons } from '../components/ListButtons'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Daily Reading</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ListButtons />
    </div>
  )
}
