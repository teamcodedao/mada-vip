import type {Metadata} from 'next';
import {Inter, Luckiest_Guy} from 'next/font/google';
import './globals.css';
import clsx from 'clsx';

const inter = Inter({subsets: ['latin']});

const luckiestGuyFont = Luckiest_Guy({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--luckiest-guy-font',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_METADATABASE_URL),
  title: "Magatrump's",
  description:
    "Trump Speaks Out About VP Hopeful Kristi Noem's Controversial Dog-Killing Story",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={clsx(inter.className, luckiestGuyFont.variable)}>
        {children}
      </body>
    </html>
  );
}
