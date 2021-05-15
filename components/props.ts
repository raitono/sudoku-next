
export interface GridProps {
  showSolution: boolean;
  isSolved: boolean[][];
  solution: number[][];
  puzzle: number[][];
}

export interface RowProps {
  rowIndex: number;
  solutionRow: number[];
  puzzleRow: number[];
}

export interface CellProps {
  rowIndex: number;
  columnIndex: number;
  solution: number;
  puzzle?: number;
}