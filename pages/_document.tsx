/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    // Check the URL starts with 'http' protocol, and redirect to 'https' if needed
    if (typeof window !== 'undefined') {
      const httpTokens: string[] | null = /^http:\/\/(.*)$/.exec(window.location.href);
      const isDev = window.location.hostname === 'localhost';
      if (!!httpTokens && !isDev) {
        window.location.replace('https://' + httpTokens[1]);
      }
    }

    return (
      <Html lang="es">
        <Head />
        <body className="bg-white dark:bg-gray-800">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
