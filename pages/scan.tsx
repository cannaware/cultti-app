import { useState } from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
// import QrReader from 'react-qr-reader';
import dynamic from 'next/dynamic';

const QrReader = dynamic(() => import('react-qr-reader'), {
  ssr: false,
});

const ScanPage: NextPage = () => {
  const [result, setResult] = useState<string | null>(null);

  const handleError = (error: Error): void => {
    console.log('error', error);
  };

  const handleScan = (data: string | null): void => {
    console.log('data', data);
    setResult(data);
  };

  return (
    <main className="text-black dark:text-white">
      <div className="mb-3">
        <h1 className="text-3xl font-bold">Scanneá el QR</h1>
      </div>
      <div className="m-2">
        <QrReader delay={300} onError={handleError} onScan={handleScan} style={{ width: '100%' }} />
        <p>{result}</p>
      </div>
      <div className="mb-2">
        <Link href="/">
          <a>Volver al Inicio</a>
        </Link>
      </div>
    </main>
  );
};

export default ScanPage;
