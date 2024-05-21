import Image from 'next/image';
import clsx from 'clsx';

import Header from './header';

import banner1 from './banner-1.png';
import superDog from './super-dog.png';
import paper from './paper.png';
import family from './family.png';

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
              'px-10 py-3 sm:px-16 sm:py-6 lg:px-28 lg:py-6',
              'transition hover:bg-primary/80'
            )}
          >
            <span className='block translate-y-2'>BUY $MADA</span>
          </a>
        </div>

        <div className='mt-24 flex justify-center px-5 lg:mt-36'>
          <Image src={paper} alt='' />
        </div>

        <div className='mt-10'>
          <h2 className='px-5 text-center text-4xl font-bold text-white lg:text-5xl'>
            Support Trump - Support Dog Club
          </h2>
          <div className='mt-10 bg-primary px-5 text-white'>
            <div
              className={clsx(
                'mx-auto flex max-w-screen-desktop py-5',
                'px-5 sm:px-10',
                'flex-col sm:flex-row'
              )}
            >
              <hgroup className='flex w-fit flex-col justify-center gap-4 font-bold'>
                <h3 className='text-4xl lg:text-5xl'>TOKENOMICS</h3>
                <h1 className='bg-[#0A3161] py-2 text-center text-xl lg:text-2xl'>
                  SUPPLY: $100.000.000
                </h1>
              </hgroup>
              <div
                className={clsx(
                  'text-balance border-white text-xl font-bold lg:text-2xl',
                  'sm:ml-10 sm:pl-10 lg:ml-24 lg:pl-24',
                  'max-sm:multi-[`mt-5;pt-5`]',
                  'py-3 sm:py-5 lg:py-10',
                  'border-t-2 sm:multi-[`border-l-2;border-t-0`]'
                )}
              >
                (0%) Tax on Buys/Sells/Transfers for Marketing, Development,
                Donations, and Liquidity.
              </div>
            </div>
          </div>
        </div>

        <div className='mt-14 px-5'>
          <h2 className='text-center font-luckiest-guy text-6xl font-medium text-white min-[400px]:text-7xl sm:text-8xl'>
            DONATIONS
          </h2>
          <div className='flex justify-center'>
            <hgroup
              className={clsx(
                'rounded-[2rem] border-[3.1px] border-white bg-primary text-center text-white',
                'px-6 sm:px-14',
                'py-3 sm:py-5'
              )}
            >
              <h4 className='text-5xl font-bold sm:text-[50px]'>X ETH</h4>
              <div className='text-2xl font-medium sm:text-[25px]'>
                Donations to animal shelters
              </div>
            </hgroup>
          </div>
          <div className='mt-10 flex justify-center px-5'>
            <Image src={family} alt='' className='max-w-[min(100%,756px)]' />
          </div>
        </div>
      </main>
      <div className='mt-10'>
        <Header />
      </div>
    </div>
  );
}
