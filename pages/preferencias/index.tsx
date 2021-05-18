import { NextPage } from 'next';
import Link from 'next/link';
import Loader from '../../components/Loader';
import usePersistedState from '../../hooks/usePersistedState';

const PreferenciasPage: NextPage = () => {
  const [cid, setCid] = usePersistedState('cultti.uid', '');

  if (!cid) return <Loader />;

  const deleteCid = (): void => {
    setCid(null);
    window.location.href = './';
  };

  return (
    <main className="text-black dark:text-white">
      <div className="mb-3">
        <h1 className="text-3xl font-bold">Preferencias</h1>
      </div>
      <p>CID: {cid}</p>
      <p>
        <a href="#" onClick={() => deleteCid()}>
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
