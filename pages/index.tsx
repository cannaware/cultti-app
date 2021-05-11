import { NextPage } from 'next';
// import { useState } from 'react';
import Link from 'next/link';

// interface Launch {
//   flight_number: number;
//   details: string;
//   launch_year: string;
// }

// interface Props {
//   launch: Launch;
// }

const IndexPage: NextPage = () => {
  // const [nextLaunch, setNextLaunch] = useState(launch);

  // const getNextLaunch = async (): Promise<Launch> => {
  //   const response = await fetch('https://api.spacexdata.com/v3/launches/next');
  //   const newLaunch = await response.json();
  //   setNextLaunch(newLaunch);
  //   return newLaunch;
  // };

  // if (!nextLaunch?.flight_number) {
  //   getNextLaunch();
  //   return null;
  // }

  return (
    <main className="text-black dark:text-white">
      <div className="mb-3">
        <h1 className="text-3xl font-bold">¡Hola!</h1>
        <p className="text-gray-500 dark:text-green-500 text-sm font-bold uppercase">
          Comencemos a cultivar
        </p>
      </div>
      <div className="m-2">
        <p>
          <Link href="/setup/paso-1">
            <a>Setup</a>
          </Link>
        </p>
        <p>
          <Link href="/scan">
            <a>Scannear QR</a>
          </Link>
        </p>
        <p>
          <Link href="/info">
            <a>Ir a Info</a>
          </Link>
        </p>
        <p>
          <Link href="/acerca">
            <a>Ir a Acerca</a>
          </Link>
        </p>
      </div>
    </main>
  );
};

export default IndexPage;
