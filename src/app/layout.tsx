import './globals.scss';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { getServerSession } from 'next-auth/next';
import { Providers } from './providers';
import { authOptions } from '~/lib/auth';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Next App Template - Notus',
  description: 'Generated by create next app',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${roboto.className} `}>
        <Providers session={session}>{children}</Providers>
      </body>
    </html>
  );
}
