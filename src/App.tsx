import { useMatrixTransformation } from './customHooks/useMatrixTransformation';
import Row from './components/Row';

export default function App() {
  const { matrix } = useMatrixTransformation();

  return (
    <div className='App'>
      {matrix.map((row: number[], idx: number) => <Row key={idx} row={row} />)}
    </div>
  );
}
