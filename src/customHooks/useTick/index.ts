import { useState, useEffect, useRef } from 'react';

interface ITick {
  tick: number
}

export function useTick(interval: number): ITick {
  const [tick, setTick] = useState<number>(0);
  const intervalId = useRef<number>(0);

  useEffect(() => {
    intervalId.current = window.setInterval(
      () => setTick((prev) => prev + 1),
      interval
    );

    return () => clearInterval(intervalId.current);
  }, []); // eslint-disable-line

  return { tick };
}
