import { renderHook } from '@testing-library/react-hooks';
import { useMatrixTransformation } from './index';

describe('Tests for useMatrixTransformation hook', () => {
  const { result: { current } } = renderHook(useMatrixTransformation);

  it('Should return an array', () => {
    expect(Array.isArray(current.matrix)).toBeTruthy();
  });

  it('Should contain other arrays inside', () => {
    const isEveryArray = current.matrix.every((item) => Array.isArray(item));
    expect(isEveryArray).toBeTruthy();
  });

  it('Should contain other arrays with numbers only', () => {
    const isEveryNumber = current.matrix.every((arr) =>
      arr.every((item) => typeof item === 'number')
    );
    expect(isEveryNumber).toBeTruthy();
  });

  it('Should contain other arrays with numbers which equals to 0 or 1 only', () => {
    const isEveryNumber = current.matrix.every((arr) =>
      arr.every((item) => item === 0 || 1)
    );
    expect(isEveryNumber).toBeTruthy();
  });
});
