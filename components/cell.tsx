import { useContext } from 'react';
import style from '../styles/cell.module.css'
import { CellProps } from './props';
import { ShowSolutionContext, IsSolvedContext } from './context';

function onClick(row: number, column: number) {
  alert(`Clicked ${row+1},${column+1}`);
}
export default function Cell(props: CellProps) {
  let showSolution = useContext(ShowSolutionContext);
  let isSolved = useContext(IsSolvedContext);
  
  const cellValue = showSolution ? props.solution : props.puzzle;

  isSolved[props.rowIndex][props.columnIndex] = cellValue === props.solution;

  return (
    <td className={`${style.cell} ${style.center} ${props.puzzle ? style.puzzle : style.solution}`} onClick={() => onClick(props.rowIndex, props.columnIndex)}>{cellValue}</td>
  );
}
