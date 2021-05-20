import { OverlayLoader } from '@components/Loader';
import { useSessionContext } from '@contexts/SessionContext';
import Head from 'next/head';

const Layout: React.FC = ({ children }) => {
  const { sid } = useSessionContext();

  if (!sid) {
    return <OverlayLoader />;
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="ScreenOrientation" content="autoRotate:disabled" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="application-name" content="Cultti" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Cultti" />
        <meta name="description" content="🌱 App de cultivo asistido" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#059669" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#059669" />
        <meta name="HandheldFriendly" content="true" />

        <link rel="apple-touch-icon" href="/static/icons/touch-icon-iphone.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/images/icons/icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/icons/icon/180x180.png" />

        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />

        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/static/icons/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://cultti.xyz" />
        <meta
          name="twitter:title"
          content="Cultti - Aprendé a cultivar cannabis gratis @cultti.arg"
        />
        <meta
          name="twitter:description"
          content="Aprendé a cultivar cannabis jugando. Es 100% gratis, divertido, y con contenido avalado científicamente."
        />
        <meta name="twitter:image" content="https://cultti.xyz/image/icons/icon-192x192.png" />
        <meta name="twitter:site" content="@cultti.arg" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Aprendé a cultivar cannabis gratis @cultti.arg" />
        <meta
          property="og:description"
          content="🌱 Aprendé a cultivar cannabis jugando. Es 100% gratis, divertido, y con contenido avalado científicamente."
        />
        <meta property="og:site_name" content="Cultti" />
        <meta property="og:url" content="https://cultti.xyz" />
        <meta property="og:image" content="https://cultti.xyz/og.png" />

        <title>Cultti - La mejor manera de aprender a cultivar cannabis. Gratis</title>
      </Head>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/3 xl:w-1/3"></div>
        <div className="w-full sm:w-1/3 xl:w-1/3 select-none">{children}</div>
        <div className="w-full sm:w-1/3 xl:w-1/3"></div>
      </div>
    </>
  );
};

export default Layout;
