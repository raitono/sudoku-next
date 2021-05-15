import { useContext } from 'react';
import style from '../styles/cell.module.css'
import { ShowSolutionContext } from './context';
import { CellProps } from './props';

export default function Cell(props: CellProps) {
  let showSolution = useContext(ShowSolutionContext);

  let cellStyle: string = null;

  if (props.isKnown) {
    cellStyle = style.puzzle;
  } else if (showSolution) {
    cellStyle = style.solution;
  } else {
    cellStyle = style.entry;
  }

  function onClick() {
    if (props.isKnown) return;
    let num = Number.parseInt(prompt());
    if (Number.isNaN(num)) return;

    props.setEntry(num, props.rowIndex, props.cellIndex);
  }

  return (
    <td className={`${style.cell} ${style.center} ${cellStyle}`} onClick={() => onClick()}>{props.value}</td>
  );
}
