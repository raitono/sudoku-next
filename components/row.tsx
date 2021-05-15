import { useContext } from 'react';
import style from '../styles/row.module.css'
import Cell from './cell';
import { ShowSolutionContext } from './context';
import { CellProps, RowProps } from './props';

export default function Row(props: RowProps) {
  const cells = [0,1,2,3,4,5,6,7,8];
  let showSolution = useContext(ShowSolutionContext);

  return (
    <tr className={style.row}>
      {
        cells.map(i => {
          let cellProps: CellProps = {
            rowIndex: props.rowIndex,
            cellIndex: i,
            value: showSolution ? props.solutionRow[i] : props.entriesRow[i] || props.puzzleRow[i],
            isKnown: !!props.puzzleRow[i],
            setEntry: props.setEntry
          }
          return <Cell key={i} {...cellProps}></Cell>
        })
      }
    </tr>
  );
}