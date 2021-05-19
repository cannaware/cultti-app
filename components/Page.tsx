import Head from 'next/head';

import type { ReactNode, FC } from 'react';

type PageProp = {
  children?: ReactNode;
  title?: string;
};

export const Page: FC<PageProp> = ({ children, title }) => {
  return (
    <>
      {title && (
        <Head>
          <title>{title}</title>
        </Head>
      )}
      <main className="text-black dark:text-white">{children}</main>
    </>
  );
};
