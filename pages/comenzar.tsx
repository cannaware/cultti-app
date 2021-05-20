import { Page } from '@components/Page';
import { PageContent } from '@components/PageContent';
import { Topbar } from '@components/Topbar';
import { useSessionContext } from '@contexts/SessionContext';
import Link from 'next/link';

import type { NextPage } from 'next';

const ComenzarPage: NextPage = () => {
  const { sid } = useSessionContext();

  return (
    <Page title="Comenzar - Cultti">
      <Topbar title={'Comenzar'} />
      <PageContent>
        <p>SID: {sid}</p>
        <p>lalalalala</p>
        <p>lalalalala</p>
        <p>lalalalala</p>
        <p>lalalalala</p>
        <p>lalalalala</p>
        <p>lalalalala</p>
        <p>lalalalala</p>
        <p>lalalalala</p>
        <p>lalalalala</p>
        <p>lalalalala</p>
        <p>lalalalala</p>
        <p>lalalalala</p>
        <p>lalalalala</p>
        <p>lalalalala</p>
        <p>lalalalala</p>
        <p>lalalalala</p>
        <p>lalalalala</p>
        <p>lalalalala</p>
        <p>lalalalala</p>
        <p>lalalalala</p>
        <p>lalalalala</p>
        <p>lalalalala</p>
        <p>lalalalala</p>
        <p>lalalalala</p>
        <p>lalalalala</p>
        <p>lalalalala</p>
        <p>lalalalala</p>
        <p>lalalalala</p>
        <p>lalalalala</p>
        <p>lalalalala</p>
        <p>lalalalala</p>
        <p>lalalalala</p>
        <p>lalalalala</p>
        <p>lalalalala</p>
        <p>lalalalala</p>
        <p>lalalalala</p>
        <p>lalalalala</p>
        <p>lalalalala</p>
        <p>lalalalala</p>
        <p>lalalalala</p>
        <p>lalalalala</p>
        <p>lalalalala</p>
        <p>lalalalala</p>
        <p>lalalalala</p>
        <p>lalalalala</p>
        <p>lalalalala</p>
        <p>lalalalala</p>
        <p>lalalalala</p>
        <p>lalalalala</p>
        <p>
          <Link href="/">
            <a>Volver al Inicio</a>
          </Link>
        </p>
      </PageContent>
    </Page>
  );
};

export default ComenzarPage;
