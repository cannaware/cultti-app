import { useState, useEffect, useCallback } from 'react';
import { set, get } from 'idb-keyval';

type TState = string | boolean | number;

const usePersistedState = (
  keyToPersistWith: string,
  defaultState: TState
): readonly [TState | undefined, (newValue: TState) => void] => {
  const [state, setState] = useState<TState | undefined>(undefined);

  useEffect(() => {
    const fetchState = (): void => {
      get<TState>(keyToPersistWith).then((retrievedState) => {
        // If a value is retrieved then use it; otherwise default to defaultValue
        setState(retrievedState ?? defaultState);
      });
    };
    fetchState();
  }, [keyToPersistWith, setState, defaultState]);

  const setPersistedValue = useCallback(
    (newValue: TState) => {
      setState(newValue);
      set(keyToPersistWith, newValue);
    },
    [keyToPersistWith, setState]
  );

  return [state, setPersistedValue] as const;
};

export default usePersistedState;
