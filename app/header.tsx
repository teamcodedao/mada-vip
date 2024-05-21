import Image from 'next/image';
import clsx from 'clsx';

import logoImg from './logo.svg';

export default function Header() {
  return (
    <div className='bg-primary'>
      <div
        className={clsx(
          'mx-auto flex max-w-screen-desktop items-center justify-between',
          'px-5 sm:px-10 md:px-16 lg:px-24 xl:px-28 desktop:px-36',
          'py-5 lg:py-9',
          'gap-x-10'
        )}
      >
        <div>
          <Image src={logoImg} priority quality={100} alt='' />
        </div>
        <div
          className={clsx(
            'flex gap-x-3 lg:gap-x-10 [&_img]:multi-[`h-[83px]`]'
          )}
        >
          <a href={process.env.NEXT_PUBLIC_TWITTER_URL} target='_twitter'>
            <img src='/twitter.svg' alt='' />
          </a>
          <a href={process.env.NEXT_PUBLIC_TELEGRAM_URL} target='_telegram'>
            <img src='/telegram.svg' alt='' />
          </a>
        </div>
      </div>
    </div>
  );
}
