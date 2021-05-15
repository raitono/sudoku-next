import style from '../styles/row.module.css'
import Cell from './cell';
import { CellProps, RowProps } from './props';

export default function Row(props: RowProps) {
  const cells = [0,1,2,3,4,5,6,7,8];
  
  return (
    <tr className={style.row}>
      { cells.map(i => {
          let cellProps: CellProps = {
            rowIndex: props.rowIndex,
            columnIndex: i,
            solution: props.solutionRow[i],
            puzzle: props.puzzleRow[i]
          }
          return <Cell key={i} {...cellProps}></Cell>
        })
      }
    </tr>
  );
}