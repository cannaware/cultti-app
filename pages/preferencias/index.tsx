import { useSessionContext } from '@contexts/SessionContext';
import { NextPage } from 'next';
import Link from 'next/link';

import type { MouseEvent } from 'react';

const PreferenciasPage: NextPage = () => {
  const { sid } = useSessionContext();

  const handleCleanSID = (e: MouseEvent): void => {
    e.preventDefault();
    console.log(sid);
  };

  return (
    <main className="text-black dark:text-white">
      <div className="mb-3">
        <h1 className="text-3xl font-bold">Preferencias</h1>
      </div>
      <p>CID: {sid}</p>
      <p>
        <a href="#" onClick={handleCleanSID}>
          Borrar CID
        </a>
      </p>
      <p>
        <Link href="/">
          <a>Volver al Inicio</a>
        </Link>
      </p>
    </main>
  );
};

export default PreferenciasPage;
