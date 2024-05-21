import Image from 'next/image';
import clsx from 'clsx';

import Header from './header';

export default function Home() {
  return (
    <div className='min-h-screen'>
      <Header />
      <main>main</main>
      <Header />
    </div>
  );
}
