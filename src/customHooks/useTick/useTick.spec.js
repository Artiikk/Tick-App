import { renderHook } from '@testing-library/react-hooks';
import { useTick } from './index';

jest.useFakeTimers();
jest.spyOn(global, 'setInterval');

describe('Tests for useTick hook', () => {
  const { result: { current } } = renderHook(useTick);

  it('Should return a number', () => {
    expect(typeof current.tick).toBe('number');
  });

  it('Should call setInterval after the render', () => {
    renderHook(useTick)
    expect(setInterval).toHaveBeenCalledTimes(1);
  });
});
