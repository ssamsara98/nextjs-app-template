// app/providers.tsx
'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

export function Providers({ children, session }: { children: React.ReactNode; session: Session | null | undefined }) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <ColorModeScript />

        {/* next-auth provider */}
        <SessionProvider session={session}>{children}</SessionProvider>
        {/* {children} */}
      </ChakraProvider>
    </CacheProvider>
  );
}
