import Head from 'next/head'
import Grid from '../components/grid'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sudoku Next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Sudoku Next!
        </h1>

        <div className={styles.grid}>
          <Grid></Grid>
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
