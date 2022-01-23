import { memo } from 'react';

interface ICell {
  cell: number;
}

function Cell({ cell }: ICell) {
  return (
    <div
      style={{
        background: cell ? 'black' : 'white',
        width: '10px',
        height: '10px',
        border: '1px solid black',
      }}
      data-test='cell-component'
    />
  );
}

export default memo(Cell);
