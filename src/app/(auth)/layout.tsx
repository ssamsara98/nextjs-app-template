import React from 'react';
import register_bg_2_png from '~/assets/images/register_bg_2.png';

// components

import { Navbar } from '~/components/navbars/auth-navbar';
import { FooterSmall } from '~/components/footers/footer-small';

type AuthProps = {
  children: React.ReactNode;
};

export default function Auth({ children }: AuthProps) {
  return (
    <>
      <Navbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              // backgroundImage: "url('/img/register_bg_2.png')",
              backgroundImage: `url('${register_bg_2_png.src}')`,
            }}
          ></div>
          {children}
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
