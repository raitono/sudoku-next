export interface GridProps {
  showSolution: boolean;
  isSolved: boolean[][];
  grid: {
    solution: number[][];
    puzzle: number[][];
  };
  entries: number[][];
  setEntry: (entry: number, rowIndex: number, cellIndex: number) => void;
}

export interface RowProps {
  rowIndex: number;
  solutionRow: number[];
  puzzleRow: number[];
  entriesRow: number[];
  setEntry: (entry: number, rowIndex: number, cellIndex: number) => void;
}

export interface CellProps {
  rowIndex: number;
  cellIndex: number;
  value: number;
  isKnown: boolean;
  setEntry: (entry: number, rowIndex: number, cellIndex: number) => void;
}