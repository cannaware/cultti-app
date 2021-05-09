import { NextPage } from 'next';
import { useState } from 'react';
import Link from 'next/link';

interface Launch {
  flight_number: number;
  details: string;
  launch_year: string;
}

interface Props {
  launch: Launch;
}

const IndexPage: NextPage<Props> = ({ launch }) => {
  const [nextLaunch, setNextLaunch] = useState(launch);

  const getNextLaunch = async (): Promise<Launch> => {
    const response = await fetch('https://api.spacexdata.com/v3/launches/next');
    const newLaunch = await response.json();
    setNextLaunch(newLaunch);
    return newLaunch;
  };

  if (!nextLaunch?.flight_number) {
    getNextLaunch();
    return null;
  }

  return (
    <main>
      <div className="mb-3">
        <h1 className="text-black dark:text-white text-3xl font-bold">¡Hola!</h1>
        <p className="text-gray-500 dark:text-green-500 text-sm font-bold uppercase">
          Next SpaceX Launch: {nextLaunch.flight_number}
        </p>
      </div>
      <p>{nextLaunch.details}</p>
      <p>{nextLaunch.launch_year}</p>
      <p>
        <Link href="/info">
          <a>Ir a Info..</a>
        </Link>
      </p>
      <p>
        <Link href="/acerca">
          <a>Ir a Acerca..</a>
        </Link>
      </p>
    </main>
  );
};

export default IndexPage;
