import { useState, useEffect, useCallback } from 'react';
import { createMatrix } from '../../utils/helpers';
import { TICK_INTERVAL } from '../../utils/constants';
import { useTick } from '../useTick';

interface IMatrixTransformation {
  matrix: number[][]
}

export function useMatrixTransformation(): IMatrixTransformation {
  const [matrix, setMatrix] = useState<number[][]>(createMatrix(50, 50));
  const { tick } = useTick(TICK_INTERVAL);

  const getNeighbours = useCallback(
    (y: number, x: number): number => {
      const topLeftNeighbour = matrix[y - 1] ? matrix[y - 1][x - 1] : 0;
      const topNeighbour = matrix[y - 1] ? matrix[y - 1][x] : 0;
      const topRightNeighbour = matrix[y - 1] ? matrix[y - 1][x + 1] : 0;
    
      const leftNeighbour = matrix[y][x - 1] || 0;
      const rightNeighbour = matrix[y][x + 1] || 0;
    
      const bottomLeftNeighbour = matrix[y + 1] ? matrix[y + 1][x - 1] : 0;
      const bottomNeighbour = matrix[y + 1] ? matrix[y + 1][x] : 0;
      const bottomRightNeighbour = matrix[y + 1] ? matrix[y + 1][x + 1] : 0;
    
      return topLeftNeighbour +
        topNeighbour +
        topRightNeighbour +
        leftNeighbour +
        rightNeighbour +
        bottomLeftNeighbour +
        bottomNeighbour + 
        bottomRightNeighbour
    }, [matrix]
  );

  const makeTransformation = useCallback(
    (): void => {
      const newMatrix = JSON.parse(JSON.stringify(matrix));
  
      for (let y = 0; y < matrix.length; y++) {
        const yAxis = matrix[y];
  
        for (let x = 0; x < yAxis.length; x++) {
          const currentCell = yAxis[x];
          const liveNeighboursAmount = getNeighbours(y, x);
  
          const underpopulation = (liveNeighboursAmount < 2)
          const overcrowding = (liveNeighboursAmount > 3)
          const reproduction = (liveNeighboursAmount === 3)
  
          if (currentCell && (underpopulation || overcrowding)) {
            newMatrix[y][x] = 0;
          }
          if (!currentCell && reproduction) {
            newMatrix[y][x] = 1;
          }
        }
      }
  
      setMatrix(newMatrix);
    }, [matrix] //eslint-disable-line
  );

  useEffect(() => makeTransformation(), [tick]); //eslint-disable-line

  return { matrix };
}