import { NextApiRequest, NextApiResponse } from 'next'

interface PuzzleResponse {
  puzzle: number[][],
  solution: number[][]
}

export default (_: NextApiRequest, res: NextApiResponse<PuzzleResponse>) => {
  const solution = [[4,2,1,8,9,5,3,6,7],[6,9,8,3,7,2,1,5,4],[3,5,7,4,6,1,8,9,2],[1,3,2,7,8,9,6,4,5],[7,8,9,6,5,4,2,1,3],[5,4,6,2,1,3,7,8,9],[8,1,3,5,4,7,9,2,6],[2,6,5,9,3,8,4,7,1],[9,7,4,1,2,6,5,3,8]];
  const puzzle = [[null,2,null,8,null,5,null,6,7],[null,null,8,3,7,null,1,5,null],[null,null,null,null,6,1,null,null,2],[1,3,2,null,null,null,null,null,null],[7,null,null,null,null,null,null,null,3],[null,null,null,null,null,null,7,8,9],[8,null,null,5,4,null,null,null,null],[null,6,5,null,3,8,4,null,null],[9,7,null,1,null,6,null,3,null]];
  
  res.status(200).json({ puzzle, solution })
}