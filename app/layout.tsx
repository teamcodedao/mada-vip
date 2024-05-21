import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.css';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
