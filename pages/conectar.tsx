import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
// import { useState } from 'react';
// import useInterval from '../hooks/useInterval';
import useSWR from 'swr';

const Conectar: NextPage = () => {
  const router = useRouter();
  // const [config, setConfig] = useState(null);
  // const [message, setMessage] = useState(null);
  const { code, ip, ssid } = router.query;

  const { data, error } = useSWR(`http://${ip}/connect/${code}`);
  // console.log('data', `http://${ip}/connect/${code}`, data, error);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  // useInterval(async () => {
  //   if (ip && code) {
  //     fetch(`http://${ip}/connect/${code}`)
  //       .then((response) => response.json())
  //       .then(({ config }) => {
  //         setConfig(config);
  //       })
  //       .catch((error) => {
  //         console.log('error:', error.toString());
  //       })
  //       .finally(() => setMessage());
  //   }
  // }, 1000);

  return (
    <main className="text-black dark:text-white">
      <div className="mb-3">
        <h1 className="text-3xl text-center font-bold">
          <span role="img" aria-label="Celular">
            📱
          </span>{' '}
          Conectar nuevo dispositivo
        </h1>
      </div>
      <div className="m-2">
        <div className="mb-6 mt-6 text-gray-300 text-center text-xl">
          Para comenzar, necesitás conectar tu celular a la red WiFi
          <p className="mb-4 mt-4">
            <strong>{ssid}</strong>
          </p>
        </div>
        {/* <p className="mb-3">{config ? JSON.stringify(config) : 'sin response'}</p> */}
        {/* <p className="mb-3">{message ? message : 'sin mensaje'}</p> */}
        <p className="mb-3 text-center text-2xl">{ip || 'sin ip'}</p>
        <p className="mb-3">
          <a href={`http://${ip}/connect/${code}`}>{`http://${ip}/connect/${code}`}</a>
        </p>
        <p>
          <Link href="/">
            <a>Volver al Inicio</a>
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Conectar;
