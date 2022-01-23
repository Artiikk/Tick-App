import { memo } from 'react';
import Cell from '../Cell';

interface IRow {
  row: number[]
};

function Row ({ row }: IRow) {
  return (
    <div style={{ display: 'flex' }} data-test='row-component'>
      {row.map((cell, idx) => <Cell key={idx} cell={cell} />)}
    </div>
  );
};

export default memo(Row);
