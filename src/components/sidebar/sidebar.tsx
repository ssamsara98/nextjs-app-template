'use client';
import React from 'react';
import {
  FaAngular,
  FaBars,
  FaClipboardList,
  FaCss3Alt,
  FaFingerprint,
  FaHome,
  FaJsSquare,
  FaLink,
  FaNewspaper,
  FaPaintBrush,
  FaReact,
  FaTable,
  FaTimes,
  FaTools,
  FaTv,
  FaUserCircle,
  FaVuejs,
} from 'react-icons/fa';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { NotificationDropdown } from '~/components/dropdowns/notification-dropdown';
import { UserDropdown } from '~/components/dropdowns/user-dropdown';
import { Icon, IconButton } from '@chakra-ui/react';

export function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState('hidden');
  const pathname = usePathname();
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <IconButton
            as={FaBars}
            aria-label="bars"
            // p={2}
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow('bg-white m-2 py-3 px-6')}
          />
          {/* <i className="fas fa-bars"></i>
            <Icon as={FaBars} />
          </IconButton> */}
          {/* Brand */}
          <Link
            href="/demo"
            className="md:block text-left md:pb-2 text-slate-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
          >
            Notus NextJS
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              'md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded ' +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-slate-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    href="/demo"
                    className="md:block text-left md:pb-2 text-slate-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                  >
                    Notus NextJS
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <IconButton
                    as={FaTimes}
                    aria-label="times"
                    // p={2}
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow('hidden')}
                  />
                  {/* <i className="fas fa-times"></i>
                    <Icon as={FaTimes} />
                  </IconButton> */}
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="px-3 py-2 h-12 border border-solid  border-slate-500 placeholder-slate-300 text-slate-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-slate-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Admin Layout Pages
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link
                  href="/admin/dashboard"
                  className={
                    'text-xs uppercase py-3 font-bold block ' +
                    (pathname.indexOf('/admin/dashboard') !== -1
                      ? 'text-sky-500 hover:text-sky-600'
                      : 'text-slate-700 hover:text-slate-500')
                  }
                >
                  {/* <i
                    className={
                      'fas fa-tv mr-2 text-sm ' +
                      (pathname.indexOf('/admin/dashboard') !== -1 ? 'opacity-75' : 'text-slate-300')
                    }
                  ></i> */}
                  <Icon
                    as={FaTv}
                    className={`mr-2 text-sm ${
                      pathname.indexOf('/admin/dashboard') !== -1 ? 'opacity-75' : 'text-slate-300'
                    }`}
                  />{' '}
                  Dashboard
                </Link>
              </li>

              <li className="items-center">
                <Link
                  href="/admin/settings"
                  className={
                    'text-xs uppercase py-3 font-bold block ' +
                    (pathname.indexOf('/admin/settings') !== -1
                      ? 'text-sky-500 hover:text-sky-600'
                      : 'text-slate-700 hover:text-slate-500')
                  }
                >
                  {/* <i
                    className={
                      'fas fa-tools mr-2 text-sm ' +
                      (pathname.indexOf('/admin/settings') !== -1 ? 'opacity-75' : 'text-slate-300')
                    }
                  ></i> */}
                  <Icon
                    as={FaTools}
                    className={`mr-2 text-sm ${
                      pathname.indexOf('/admin/settings') !== -1 ? 'opacity-75' : 'text-slate-300'
                    }`}
                  />{' '}
                  Settings
                </Link>
              </li>

              <li className="items-center">
                <Link
                  href="/admin/tables"
                  className={
                    'text-xs uppercase py-3 font-bold block ' +
                    (pathname.indexOf('/admin/tables') !== -1
                      ? 'text-sky-500 hover:text-sky-600'
                      : 'text-slate-700 hover:text-slate-500')
                  }
                >
                  {/* <i
                    className={
                      'fas fa-table mr-2 text-sm ' +
                      (pathname.indexOf('/admin/tables') !== -1 ? 'opacity-75' : 'text-slate-300')
                    }
                  ></i> */}
                  <Icon
                    as={FaTable}
                    className={`fas fa-table mr-2 text-sm ${
                      pathname.indexOf('/admin/tables') !== -1 ? 'opacity-75' : 'text-slate-300'
                    }`}
                  />{' '}
                  Tables
                </Link>
              </li>

              {/* <li className="items-center">
                <Link
                  href="/admin/maps"
                  className={
                    'text-xs uppercase py-3 font-bold block ' +
                    (pathname.indexOf('/admin/maps') !== -1
                      ? 'text-sky-500 hover:text-sky-600'
                      : 'text-slate-700 hover:text-slate-500')
                  }
                >
                  <i
                    className={
                      'fas fa-map-marked mr-2 text-sm ' +
                      (pathname.indexOf('/admin/maps') !== -1 ? 'opacity-75' : 'text-slate-300')
                    }
                  ></i>{' '}
                  Maps
                </Link>
              </li> */}
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-slate-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Auth Layout Pages
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link
                  href="/auth/login"
                  className="text-slate-700 hover:text-slate-500 text-xs uppercase py-3 font-bold block"
                >
                  {/* <i className="fas fa-fingerprint text-slate-400 mr-2 text-sm"></i> */}
                  <Icon as={FaFingerprint} className="text-slate-400 mr-2 text-sm" />
                  Login
                </Link>
              </li>

              <li className="items-center">
                <Link
                  href="/auth/register"
                  className="text-slate-700 hover:text-slate-500 text-xs uppercase py-3 font-bold block"
                >
                  {/* <i className="fas fa-clipboard-list text-slate-300 mr-2 text-sm"></i> */}
                  <Icon as={FaClipboardList} className="text-slate-300 mr-2 text-sm" />
                  Register
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-slate-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              No Layout Pages
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link
                  href="/demo"
                  className="text-slate-700 hover:text-slate-500 text-xs uppercase py-3 font-bold block"
                >
                  {/* <i className="fas fa-newspaper text-slate-400 mr-2 text-sm"></i> */}
                  <Icon as={FaHome} className="text-slate-400 mr-2 text-sm" />
                  Demo Page
                </Link>
              </li>

              <li className="items-center">
                <Link
                  href="/landing"
                  className="text-slate-700 hover:text-slate-500 text-xs uppercase py-3 font-bold block"
                >
                  {/* <i className="fas fa-newspaper text-slate-400 mr-2 text-sm"></i> */}
                  <Icon as={FaNewspaper} className="text-slate-400 mr-2 text-sm" />
                  Landing Page
                </Link>
              </li>

              <li className="items-center">
                <Link
                  href="/profile"
                  className="text-slate-700 hover:text-slate-500 text-xs uppercase py-3 font-bold block"
                >
                  {/* <i className="fas fa-user-circle text-slate-400 mr-2 text-sm"></i> */}
                  <Icon as={FaUserCircle} className="text-slate-400 mr-2 text-sm" />
                  Profile Page
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-slate-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Documentation
            </h6>
            {/* Navigation */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/colors/notus"
                  target="_blank"
                  className="text-slate-700 hover:text-slate-500 text-sm block mb-4 no-underline font-semibold"
                >
                  {/* <i className="fas fa-paint-brush mr-2 text-slate-300 text-base"></i> */}
                  <Icon as={FaPaintBrush} className="mr-2 text-slate-300 text-base" />
                  Styles
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus"
                  target="_blank"
                  className="text-slate-700 hover:text-slate-500 text-sm block mb-4 no-underline font-semibold"
                >
                  {/* <i className="fab fa-css3-alt mr-2 text-slate-300 text-base"></i> */}
                  <Icon as={FaCss3Alt} className="mr-2 text-slate-300 text-base" />
                  CSS Components
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/angular/overview/notus"
                  target="_blank"
                  className="text-slate-700 hover:text-slate-500 text-sm block mb-4 no-underline font-semibold"
                >
                  {/* <i className="fab fa-angular mr-2 text-slate-300 text-base"></i> */}
                  <Icon as={FaAngular} className="mr-2 text-slate-300 text-base" />
                  Angular
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/js/overview/notus"
                  target="_blank"
                  className="text-slate-700 hover:text-slate-500 text-sm block mb-4 no-underline font-semibold"
                >
                  {/* <i className="fab fa-js-square mr-2 text-slate-300 text-base"></i> */}
                  <Icon as={FaJsSquare} className="mr-2 text-slate-300 text-base" />
                  Javascript
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus"
                  target="_blank"
                  className="text-slate-700 hover:text-slate-500 text-sm block mb-4 no-underline font-semibold"
                >
                  {/* <i className="fab fa-react mr-2 text-slate-300 text-base"></i> */}
                  <Icon as={FaReact} className="mr-2 text-slate-300 text-base" />
                  NextJS
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus"
                  target="_blank"
                  className="text-slate-700 hover:text-slate-500 text-sm block mb-4 no-underline font-semibold"
                >
                  {/* <i className="fab fa-react mr-2 text-slate-300 text-base"></i> */}
                  <Icon as={FaReact} className="mr-2 text-slate-300 text-base" />
                  React
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/svelte/overview/notus"
                  target="_blank"
                  className="text-slate-700 hover:text-slate-500 text-sm block mb-4 no-underline font-semibold"
                >
                  {/* <i className="fas fa-link mr-2 text-slate-300 text-base"></i> */}
                  <Icon as={FaLink} className="mr-2 text-slate-300 text-base" />
                  Svelte
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus"
                  target="_blank"
                  className="text-slate-700 hover:text-slate-500 text-sm block mb-4 no-underline font-semibold"
                >
                  {/* <i className="fab fa-vuejs mr-2 text-slate-300 text-base"></i> */}
                  <Icon as={FaVuejs} className="mr-2 text-slate-300 text-base" />
                  VueJS
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
