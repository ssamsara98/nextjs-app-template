import React from 'react';

// components

import { Navbar as AdminNavbar } from '~/components/navbars/admin-navbar';
import { Sidebar } from '~/components/sidebar/sidebar';
import { HeaderStats } from '~/components/headers/header-stats';
import { FooterAdmin } from '~/components/footers/footer-admin';

type AdminProps = {
  children: React.ReactNode;
};

export default function Admin({ children }: AdminProps) {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-slate-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
