import Image from 'next/image';
import clsx from 'clsx';

import Header from './header';

import banner1 from './banner-1.png';
import superDog from './super-dog.png';
import paper from './paper.png';

export default function Home() {
  return (
    <div className='min-h-screen'>
      <Header />
      <main>
        <div className='relative after:multi-[`absolute;inset-0;-mt-24;bg-[url(./banner-1.png)];[background-size:400%];bg-no-repeat;z-[-1]`]'>
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

        <div className='relative z-10 -mt-40 flex justify-center px-5 sm:-mt-64 lg:-mt-80'>
          <Image
            src={superDog}
            quality={100}
            priority
            alt=''
            className='w-[300px] sm:w-[500px] lg:w-[614px]'
          />
        </div>

        <div className='mt-16 flex flex-col items-center gap-10 text-white'>
          <h1 className='text-5xl font-bold'>Symbol: MADA</h1>
          <a
            href={process.env.NEXT_PUBLIC_COIN_URL}
            target='_buy'
            className={clsx(
              'block rounded-full bg-primary font-luckiest-guy uppercase',
              'text-5xl lg:text-6xl xl:text-[64px]',
              'px-10 py-3 sm:px-16 sm:py-4 lg:px-28 lg:py-6 '
            )}
          >
            <span className='block translate-y-2'>BUY $MADA</span>
          </a>
        </div>

        <div className='mt-24 flex justify-center px-5 lg:mt-36'>
          <Image src={paper} alt='' />
        </div>
      </main>
      <Header />
    </div>
  );
}
