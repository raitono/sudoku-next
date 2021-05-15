import Head from 'next/head'
import { useEffect, useReducer, useState } from 'react';
import Grid from '../components/grid'
import { GridProps } from '../components/props';
import styles from '../styles/Home.module.css'

export default function Home() {
  const [showSolution, toggleSolution] = useReducer(value => !value, false);
  const [isSolved] = useState([[false, false, false, false, false, false, false, false, false], [false, false, false, false, false, false, false, false, false], [false, false, false, false, false, false, false, false, false], [false, false, false, false, false, false, false, false, false], [false, false, false, false, false, false, false, false, false], [false, false, false, false, false, false, false, false, false], [false, false, false, false, false, false, false, false, false], [false, false, false, false, false, false, false, false, false], [false, false, false, false, false, false, false, false, false]]);
  const [entries, setEntries] = useState<number[][]>([[null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null]]);
  const [grid, setGrid] = useState<{puzzle: number[][],solution: number[][]}>({puzzle: [...entries], solution: [...entries]});

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/puzzle`)
    .then(response => response.json())
    .then(setGrid);
  }, []);

  let gridProps: GridProps = {
    grid,
    entries,
    setEntry,
    showSolution,
    isSolved
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
          <Grid {...gridProps}></Grid>
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
