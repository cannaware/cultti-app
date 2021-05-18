import { FC, useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import SessionContext from '../contexts/SessionContext';
import { set, get } from 'idb-keyval';
import { ulid } from 'ulid';

import 'tailwindcss/tailwind.css';

const SID_KEY = 'cultti.sid';
const INITIAL_SID = '';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  // Check the URL starts with 'http' protocol, and redirect to 'https' if needed
  if (typeof window !== 'undefined') {
    const httpTokens: string[] | null = /^http:\/\/(.*)$/.exec(window.location.href);
    const isDev = window.location.hostname === 'localhost';

    if (httpTokens && !isDev) {
      window.location.replace('https://' + httpTokens[1]);
    }
  }

  const [sid, setSID] = useState(INITIAL_SID);

  useEffect(() => {
    if (sid === INITIAL_SID) {
      const fetchSID = async (): Promise<void> => {
        let newSid = await get(SID_KEY);
        if (!newSid) newSid = ulid();
        setSID(newSid);
        set(SID_KEY, newSid);
      };
      fetchSID();
    }
  }, [sid]);

  return (
    <SessionContext.Provider value={{ sid }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionContext.Provider>
  );
};

export default App;
