import { NextPage } from 'next';
import Link from 'next/link';

const PreferenciasPage: NextPage = () => {
  return (
    <main className="text-black dark:text-white">
      <div className="mb-3">
        <h1 className="text-3xl font-bold">Preferencias</h1>
      </div>
      <p>
        <Link href="/">
          <a>Volver al Inicio</a>
        </Link>
      </p>
    </main>
  );
};

export default PreferenciasPage;
