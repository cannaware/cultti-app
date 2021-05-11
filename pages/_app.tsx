import type { FC } from 'react';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';

import 'tailwindcss/tailwind.css';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  // Check the URL starts with 'http://xxxxx' protocol, if it does then redirect to 'https://xxxxx' url of same resource
  if (typeof window !== 'undefined') {
    const httpTokens: string[] | null = /^http:\/\/(.*)$/.exec(window.location.href);
    const isDev = window.location.hostname === 'localhost';

    if (httpTokens && !isDev) {
      window.location.replace('https://' + httpTokens[1]);
    }
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
