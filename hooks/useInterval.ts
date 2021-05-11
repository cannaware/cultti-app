import { useEffect, useRef } from 'react';

type Callback = (current: void) => void;

const useInterval = (callback: Callback, delay: number): void => {
  const savedCallback = useRef<Callback | null>(null);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = (): void => {
      if (savedCallback.current) {
        savedCallback.current();
      }
    };

    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => {
        clearInterval(id);
      };
    }
  }, [callback, delay]);
};

export default useInterval;
