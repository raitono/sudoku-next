import style from '../styles/grid.module.css'
import { GridProps, RowProps } from './props';
import Row from './row'
import { ShowSolutionContext, IsSolvedContext } from './context';

export default function Grid(props: GridProps) {
  const rows = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <IsSolvedContext.Provider value={props.isSolved}>
      <ShowSolutionContext.Provider value={props.showSolution}>
        <table className={style.grid}>
          <tbody>
            {rows.map(i => {
              let rowProps: RowProps = {
                rowIndex: i,
                solutionRow: props.solution[i],
                puzzleRow: props.puzzle[i],
                entriesRow: props.entries[i],
                setEntry: props.setEntry
              }
              return <Row key={i} {...rowProps}></Row>
            })
            }
          </tbody>
        </table>
      </ShowSolutionContext.Provider>
    </IsSolvedContext.Provider>
  )
}
