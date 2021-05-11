import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import useInterval from '../../hooks/useInterval';

const Paso1: NextPage = () => {
  const router = useRouter();
  const [config, setConfig] = useState(null);
  const { ip } = router.query;

  useInterval(async () => {
    if (ip) {
      fetch(`http://${ip}`)
        .then((response) => response.json())
        .then(({ config }) => {
          setConfig(config);
        })
        .catch((error) => {
          console.log('error:', error.toString());
        });
    }
  }, 1000);

  return (
    <main className="text-black dark:text-white">
      <div className="mb-3">
        <h1 className="text-3xl font-bold">Paso 1</h1>
      </div>
      <div className="m-2">
        <p className="mb-3">{config ? JSON.stringify(config) : 'sin response'}</p>
        <p className="mb-3 text-center text-2xl">{ip || 'sin ip'}</p>
        <p>
          <Link href="/">
            <a>Volver al Inicio</a>
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Paso1;
