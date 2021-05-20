import '../styles/globals.css';

import Layout from '@components/Layout';
import SessionContext from '@contexts/SessionContext';
import { get, set } from 'idb-keyval';
import { FC, useEffect, useState } from 'react';
import { ulid } from 'ulid';
import { Toaster } from 'react-hot-toast';

import type { AppProps } from 'next/app';

const SID_KEY = 'cultti.sid';
const INITIAL_SID = '';

const App: FC<AppProps> = ({ Component, pageProps }) => {
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

  // Check the URL starts with 'http' protocol, and redirect to 'https' if needed
  if (typeof window !== 'undefined') {
    const httpTokens: string[] | null = /^http:\/\/(.*)$/.exec(window.location.href);
    const isDev = window.location.hostname === 'localhost';
    if (!!httpTokens && !isDev) {
      window.location.replace('https://' + httpTokens[1]);
      return <></>;
    }
  }

  return (
    <SessionContext.Provider value={{ sid }}>
      <Toaster position="bottom-center" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionContext.Provider>
  );
};

export default App;
