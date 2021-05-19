import { useSessionContext } from '@contexts/SessionContext';
import { NextPage } from 'next';
import Link from 'next/link';
import { clear } from 'idb-keyval';
import toast from 'react-hot-toast';
import Router from 'next/router';

import type { MouseEvent } from 'react';

const PreferenciasPage: NextPage = () => {
  const { sid } = useSessionContext();

  const handleClearSID = (e: MouseEvent): void => {
    e.preventDefault();
    clear();
    toast.success('Borrado exitoso');
    console.log('clean db');
    Router.reload();
  };

  return (
    <main className="text-black dark:text-white">
      <div className="mb-3">
        <h1 className="text-3xl font-bold">Preferencias</h1>
      </div>
      <p>CID: {sid}</p>
      <p>
        <a href="#" onClick={handleClearSID}>
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
