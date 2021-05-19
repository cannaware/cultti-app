import { Page } from '@components/Page';
import { PageContent } from '@components/PageContent';
import { Topbar } from '@components/Topbar';
import Link from 'next/link';

import type { NextPage } from 'next';

const AcercaPage: NextPage = () => {
  return (
    <Page title="Acerca - Cultti">
      <Topbar title={'Acerca de Cultti'} />
      <PageContent>
        <p>Con Cultti podes aprender a cultivar cannabis de una forma divertida y 100% gratis.</p>
        <p>
          <Link href="/">
            <a>Volver al Inicio</a>
          </Link>
        </p>
      </PageContent>
    </Page>
  );
};

export default AcercaPage;
