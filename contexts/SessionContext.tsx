import { createContext, useContext } from 'react';

type SessionContextType = {
  sid: string;
  lang?: string;
  theme?: string;
};

const defaultContextValues: SessionContextType = {
  sid: '',
  lang: 'es',
  theme: 'default',
};

const SessionContext = createContext<SessionContextType>(defaultContextValues);

export const useSessionContext = (): SessionContextType => useContext(SessionContext);

export default SessionContext;
