import Head from 'next/head'
import { useState } from 'react';
import Grid from '../components/grid'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [showSolution, setShowSolution] = useState(false);
  const [isSolved] = useState([[false, false, false, false, false, false, false, false, false], [false, false, false, false, false, false, false, false, false], [false, false, false, false, false, false, false, false, false], [false, false, false, false, false, false, false, false, false], [false, false, false, false, false, false, false, false, false], [false, false, false, false, false, false, false, false, false], [false, false, false, false, false, false, false, false, false], [false, false, false, false, false, false, false, false, false], [false, false, false, false, false, false, false, false, false]]);
  const solution = [[4,2,1,8,9,5,3,6,7],[6,9,8,3,7,2,1,5,4],[3,5,7,4,6,1,8,9,2],[1,3,2,7,8,9,6,4,5],[7,8,9,6,5,4,2,1,3],[5,4,6,2,1,3,7,8,9],[8,1,3,5,4,7,9,2,6],[2,6,5,9,3,8,4,7,1],[9,7,4,1,2,6,5,3,8]];
  const puzzle = [[null,2,null,8,null,5,null,6,7],[null,null,8,3,7,null,1,5,null],[null,null,null,null,6,1,null,null,2],[1,3,2,null,null,null,null,null,null],[7,null,null,null,null,null,null,null,3],[null,null,null,null,null,null,7,8,9],[8,null,null,5,4,null,null,null,null],[null,6,5,null,3,8,4,null,null],[9,7,null,1,null,6,null,3,null]];
  let [entries, setEntries] = useState<number[][]>([[null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null]]);

  function toggleSolution() {
    setShowSolution(!showSolution);
  }

  function checkSolution() {
    if(isSolved.every(r => r.every(c => c))) alert("Congratulations!");
    else alert("Something's no quite right...");
  }

  function setEntry(entry: number, rowIndex: number, cellIndex: number) {
    let newEntries = [...entries];
    newEntries[rowIndex][cellIndex] = entry;
    setEntries(newEntries);
  }

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
          <Grid solution={solution} puzzle={puzzle} entries={entries} setEntry={setEntry} showSolution={showSolution} isSolved={isSolved}></Grid>
        </div>
        <div style={{marginTop: 20}}>
          <button onClick={toggleSolution}>Show solution</button>
          <button onClick={checkSolution}>Check Solution</button>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  )
}
