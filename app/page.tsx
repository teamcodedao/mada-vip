import Image from 'next/image';
import clsx from 'clsx';

import Header from './header';

import banner1 from './banner-1.png';

export default function Home() {
  return (
    <div className='min-h-screen'>
      <Header />
      <main>
        <div className='relative after:multi-[`absolute;inset-0;-m-24;bg-[url(./banner-1.png)];[background-size:200%];bg-no-repeat;z-[-1];blur-xl`]'>
          <div className={clsx('relative mx-auto max-w-screen-desktop')}>
            <Image
              src={banner1}
              quality={100}
              priority
              alt=''
              className='max-h-screen w-full object-cover object-bottom'
            />
          </div>
        </div>
      </main>
      <Header />
    </div>
  );
}
